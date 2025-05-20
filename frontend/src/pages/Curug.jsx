import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import CommonSectionCurug from "../shared/CommonSectionCurug";
import "../styles/tour.css";
import tourData from '../assets/data/tours';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import Newseletter from '../shared/Newseletter';
import { Container, Row, Col } from "reactstrap";

const Curug = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const pages = Math.ceil(tourData.length / 4);
    setPageCount(pages);
  }, [page]);

  const curugTours = tourData.filter(tour =>
    tour.title.toLowerCase().includes("curug")
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
      <CommonSectionCurug title={'AIR TERJUN'} />

      <section className="pt-0">
        <Container>
          {renderSection("Curug", "/curug", curugTours)}
        </Container>
      </section>

      <Newseletter />
    </>
  );
};

export default Curug;
