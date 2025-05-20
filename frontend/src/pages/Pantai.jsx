import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Tambahkan ini
import CommonSectionPantai from "../shared/Common-SectionPantai";
import "../styles/tour.css";
import tourData from '../assets/data/tours';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import Newseletter from '../shared/Newseletter';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Pantai = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const pages = Math.ceil(tourData.length / 4);
    setPageCount(pages);
  }, [page]);

  // Filter data berdasarkan kategori dari title
  
  const pantaiTours = tourData.filter(tour => tour.title.toLowerCase().includes("pantai"));
  

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
      <CommonSectionPantai title={'Pantai'} />
      <section>
        <Container>
          <Row>
           
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          {renderSection("Pantai", "/pantai", pantaiTours)}
         
        </Container>
      </section>

      <Newseletter />
    </>
  );
};

export default Pantai;