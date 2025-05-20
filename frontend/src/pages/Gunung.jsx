import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import tourData from '../assets/data/tours';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import Newseletter from '../shared/Newseletter';
import { Container, Row, Col } from "reactstrap";

const Gunung = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const pages = Math.ceil(tourData.length / 4);
    setPageCount(pages);
  }, [page]);

  // ✅ Gunakan nama variabel yang sesuai
  const gunungTours = tourData.filter(tour =>
    tour.title.toLowerCase().includes("gunung")
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
      <CommonSection title={'Gunung'} />
      <section>
        <Container>
          <Row>
           
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          {/* ✅ Gunakan variabel yang sudah didefinisikan */}
          {renderSection("Gunung", "/gunung", gunungTours)}
        </Container>
      </section>

      <Newseletter />
    </>
  );
};

export default Gunung;
