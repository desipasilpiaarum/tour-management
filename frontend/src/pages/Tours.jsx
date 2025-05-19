import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import tourData from '../assets/data/tours';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import Newseletter from '../shared/Newseletter';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const pages = Math.ceil(tourData.length / 4);
    setPageCount(pages);
  }, [page]);

  // Filter data berdasarkan kategori dari title
  const gunungTours = tourData.filter(tour => tour.title.toLowerCase().includes("gunung"));
  const pantaiTours = tourData.filter(tour => tour.title.toLowerCase().includes("pantai"));
  const curugTours = tourData.filter(tour => tour.title.toLowerCase().includes("curug") || tour.title.toLowerCase().includes("air terjun") || tour.title.toLowerCase().includes("sindang"));
  const bukitTours = tourData.filter(tour => tour.title.toLowerCase().includes("bukit"));

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
      <Row className="align-items-center justify-content-between mb-2 mt-5">
        <Col><h2>{title}</h2></Col>
        <Col className="text-end">
          <Link to={link}>
            <button className="btn btn-primary btn-sm">See All</button>
          </Link>
        </Col>
      </Row>
      {renderTours(data)}
    </>
  );

  return (
    <>
      <CommonSection title={'All Tours'} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          {renderSection("Pantai", "/pantai", pantaiTours)}
          {renderSection("Pegunungan", "/gunung", gunungTours)}
          {renderSection("Air Terjun", "/curug", curugTours)}
          {renderSection("Bukit", "/bukit", bukitTours)}
        </Container>
      </section>

      <Newseletter />
    </>
  );
};

export default Tours;