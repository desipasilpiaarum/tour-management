import React, { useRef, useState, useEffect } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newseletter from "../shared/Newseletter";

const API_URL = "http://localhost:5000/api/tours";

const TourDetails = () => {
  const { id } = useParams();
  const reviewsMsgref = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Fetch tour dari backend
  const fetchTour = () => {
    setLoading(true);
    fetch(`${API_URL}/${id}`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setTour(data);
        setLoading(false);
      })
      .catch(() => {
        setTour(null);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTour();
    // eslint-disable-next-line
  }, [id]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <span>Loading...</span>
      </div>
    );
  }

  if (!tour) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <span>Destinasi tidak ditemukan.</span>
      </div>
    );
  }

  // Ambil data dari tour
  const {
    image,
    photo,
    title,
    description,
    price,
    reviews = [],
    city,
    distance,
  } = tour;
  const tourImage = photo || image;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // format tanggal
  const options = { day: "numeric", month: "long", year: "numeric" };

  // submit review ke backend
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewsText = reviewsMsgref.current.value;
    if (!tourRating || !reviewsText) return;

    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/${id}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          rating: tourRating,
          text: reviewsText,
        }),
      });
      if (res.ok) {
        fetchTour();
        reviewsMsgref.current.value = "";
        setTourRating(null);
      } else {
        alert("Gagal menambah review");
      }
    } catch {
      alert("Gagal menambah review");
    }
    setSubmitting(false);
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img
                  src={
                    tourImage?.startsWith("http") ? tourImage : `/${tourImage}`
                  }
                  alt={title}
                />

                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        className="ri-star-s-fill"
                        style={{ color: "yellow" }}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span>({reviews.length})</span>
                      )}
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span>
                      <i className="ri-map-pin-2-line"></i> {city}
                    </span>
                    <span>
                      <i className="ri-money-dollar-circle-line"></i> Rp{price}
                      /person
                    </span>
                    <span>
                      <i className="ri-map-pin-line"></i> {distance}km
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{description}</p>
                </div>

                {/*============================ tour reviews section============================= */}
                <div className="tour___reviews mt-4">
                  <h4>Reviews ({reviews.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <span
                          key={num}
                          style={{ cursor: "pointer" }}
                          onClick={() => setTourRating(num)}
                        >
                          <i
                            className={
                              tourRating && num <= tourRating
                                ? "ri-star-s-fill"
                                : "ri-star-line"
                            }
                            style={{ color: "yellow", fontSize: "1.5rem" }}
                          ></i>
                          <span style={{ color: "black", marginLeft: "4px" }}>
                            {num}
                          </span>
                        </span>
                      ))}
                    </div>
                    <div className="reviews__input">
                      <input
                        type="text"
                        ref={reviewsMsgref}
                        placeholder="share your thoughts"
                        required
                      />
                      <button
                        className="btn primary__btn text-white"
                        type="submit"
                        disabled={submitting}
                      >
                        {submitting ? "Mengirim..." : "submit"}
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {reviews.map((review, idx) => (
                      <div className="reviews__item" key={idx}>
                        <img src={avatar} alt="" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username || "Anonim"}</h5>
                              <p>
                                {review.date
                                  ? new Date(review.date).toLocaleDateString(
                                      "en-US",
                                      options
                                    )
                                  : ""}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              {review.rating}{" "}
                              <i
                                className="ri-star-s-fill"
                                style={{ color: "yellow" }}
                              ></i>
                            </span>
                          </div>
                          <h6>{review.text || review.review || "-"}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/*============================ tour reviews section end========================== */}
              </div>
            </Col>
            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <Newseletter />
    </>
  );
};

export default TourDetails;
