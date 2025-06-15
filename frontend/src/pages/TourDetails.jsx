import React, { useRef, useState } from "react";
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating';
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newseletter from "../shared/Newseletter";


const TourDetails = () => {

    const { id } = useParams();
    const reviewsMsgref = useRef('')
    const [tourRating, setTourRating] = useState(null)


    const tour = tourData.find(tour => tour.id === id);

    const { photo, title, desc, price,  reviews, city, distance, } =
        tour;

    const { totalrating, avgRating } = calculateAvgRating
        (reviews);

    // format tanggal
    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    // sumbit request to server
    const sumbitHandler = e => {
        e.preventDefault()
        const reviewsText = reviewsMsgref.current.value;

        alert(`${reviewsText}, ${tourRating}`);


    };

    // later will call api



    return (
        <>

            <section>
                <Container>
                    <Row>
                        
                            <div className="tour__content">
                                <img src={photo} alt="" />

                                <div className="tour__info">
                                    <h2>{title}</h2>

                                    <div className="d-flex align-items-center gap-5">

                                        <span className="tour__rating d-flex align-items-center gap-1">
                                            <i class="ri-star-s-fill" style={{ 'color': "yellow" }}> </i>
                                            {avgRating === 0 ? null :
                                                avgRating}
                                            {totalrating === 0 ? (
                                                "Not rated"

                                            ) : (
                                                <span>({reviews.lenght})</span>
                                            )}
                                        </span>
                                       
                                    </div>
                                    <div className="tour__extra-details">
                                        <span><i class="ri-map-pin-2-line"></i>{city}</span>
                                        <span><i class="ri-money-dollar-circle-line"></i> Rp{price} k / per person</span>
                                        <span><i class="ri-map-pin-line"></i> {distance} k/m</span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>{desc}</p>
                                </div>

                                {/*============================ tour reviews section============================= */}
                                <div className="tour___reviews mt-4">
                                    <h4>Reviews ({reviews?.lenght} reviews)</h4>

                                    <Form onSumbit={sumbitHandler}>
                                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                            <span onClick={() => setTourRating(1)}>
                                                <i className="ri-star-s-fill" style={{ color: "yellow" }}></i>
                                                <span style={{ color: "black", marginLeft: "4px" }}>1</span>
                                            </span>
                                            <span onClick={() => setTourRating(2)}>
                                                <i className="ri-star-s-fill" style={{ color: "yellow" }}></i>
                                                <span style={{ color: "black", marginLeft: "4px" }}>2</span>
                                            </span>
                                            <span onClick={() => setTourRating(3)}>
                                                <i className="ri-star-s-fill" style={{ color: "yellow" }}></i>
                                                <span style={{ color: "black", marginLeft: "4px" }}>3</span>
                                            </span>
                                            <span onClick={() => setTourRating(4)}>
                                                <i className="ri-star-s-fill" style={{ color: "yellow" }}></i>
                                                <span style={{ color: "black", marginLeft: "4px" }}>4</span>
                                            </span>
                                            <span onClick={() => setTourRating(5)}>
                                                <i className="ri-star-s-fill" style={{ color: "yellow" }}></i>
                                                <span style={{ color: "black", marginLeft: "4px" }}>5</span>
                                            </span>
                                        </div>


                                        <div className="reviews__input">
                                            <input type="text" ref={reviewsMsgref} placeholder="share your thoughts" required />
                                            <button className="btn primary__btn text-white"
                                                type="sumbit"> sumbit
                                            </button>

                                        </div>
                                    </Form>

                                    <ListGroup className="user__reviews">
                                        {reviews?.map(reviews => (
                                            <div className="reviews__item">
                                                <img src={avatar} alt="" />

                                                <div className="w-100">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h5>Ms.Dania</h5>
                                                            <p>
                                                                {new Date("2025-03-01").toLocaleDateString("en-US", options)}
                                                            </p>
                                                        </div>
                                                        <span className="d-flex align-items-center">
                                                            5 <i class="ri-star-s-fill" style={{ color: "yellow" }}></i>
                                                        </span>
                                                    </div>
                                                    <h6>Luar Biasa Sekali Tempat Nya</h6>
                                                </div>
                                                

                                            </div>

                                        ))
                                        }
                                    </ListGroup>
                                </div>
                                {/*============================ tour reviews section end========================== */}

                            </div>
                       
                        <Col lg='4'>
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