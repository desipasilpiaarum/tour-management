import React, { useEffect, useState } from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';
import calculateAvgRating from "../utils/avgRating";
import './tour-card.css';

const API_URL = "http://localhost:5000/api/tours";

const TourCard = ({ tour }) => {
  const { id, title, city, photo, image } = tour;
  const [reviews, setReviews] = useState(tour.reviews || []);
  const [avgRating, setAvgRating] = useState(0);
  const [totalRating, setTotalRating] = useState(0);

  const tourImage = photo || image;

  // Fetch reviews & rating dari backend
  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (res.ok) {
          const data = await res.json();
          const backendReviews = data.reviews || [];
          setReviews(backendReviews);
          const { avgRating, totalRating } = calculateAvgRating(backendReviews);
          setAvgRating(avgRating);
          setTotalRating(totalRating);
        }
      } catch {
        setReviews([]);
        setAvgRating(0);
        setTotalRating(0);
      }
    };
    fetchTour();
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={tourImage?.startsWith("http") ? tourImage : `/${tourImage}`} alt="tour-img" />
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {city}
            </span>

            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i>
              {avgRating === 0 ? null : avgRating}
              {totalRating === 0 ? (
                "Not Rated"
              ) : (
                <span> ({reviews.length})</span>
              )}
            </span>
          </div>

          <h5 className="tour__title">
            <Link to={`/tour/${id}`}>{title}</Link>
          </h5>

          <button className="btn booking__btn">
            <Link to={`/tour/${id}`}>Kunjungi Sekarang</Link>
          </button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;