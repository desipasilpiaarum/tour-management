import React, { useEffect, useState } from "react";
import TourCard from "../../shared/TourCard";
import { Col } from 'reactstrap';
import calculateAvgRating from "../../utils/avgRating";

const API_URL = "http://localhost:5000/api/tours";

const FeatureTourList = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                // Hitung avgRating untuk setiap tour
                const toursWithRating = data.map(tour => {
                    const reviews = tour.reviews || [];
                    const { avgRating } = calculateAvgRating(reviews);
                    return { ...tour, avgRating };
                });
                // Urutkan dari rating tertinggi, ambil 8 teratas
                const sorted = toursWithRating
                    .sort((a, b) => b.avgRating - a.avgRating)
                    .slice(0, 8);
                setTours(sorted);
            })
            .catch(() => setTours([]));
    }, []);

    return (
        <>
            {tours.map(tour => (
                <Col lg='3' className="mb-4" key={tour.id}>
                    <TourCard tour={tour} />
                </Col>
            ))}
        </>
    );
};

export default FeatureTourList;