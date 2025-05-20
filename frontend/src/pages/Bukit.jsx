import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";import "../styles/tour.css";
import tourData from '../assets/data/tours';
import TourCard from '../shared/TourCard';
import Newseletter from '../shared/Newseletter';
import { Container, Row, Col } from "reactstrap";
import CommonSectionBukit from "../shared/CommonSectionBukit";

const Bukit = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const pages = Math.ceil(tourData.length / 4);
    setPageCount(pages);
  }, [page]);

  // ✅ Ganti nama variabel agar sesuai
  const bukitTours = tourData.filter(tour =>
    tour.title.toLowerCase().includes("bukit")
  );

  const renderTours = (tours) => (
    <Row>
      {tours.map(tour => (
        <Col lg='3' className="mb-4" key={tour.id}>
          <div onClick={() => navigate(`/tour/${tour.id}`)} style={{ cursor: "pointer" }}>
            <TourCard tour={tour} />
          </div>
        </Col>
      ))}
    </Row>
  );

  const renderSection = (title, link, data) => (
    <>
      <Row className="align-items-center justify-content-between mb-2 mt-5"></Row>
      {renderTours(data)}
    </>
  );

  return (
    <>
    
      <CommonSectionBukit title={'BUKIT'} />

      <section className="pt-0">
        <Container>
          {renderSection("Bukit", "/bukit", bukitTours)}
        </Container>
      </section>

      <Newseletter />
    </>
  );
};

export default Bukit;
