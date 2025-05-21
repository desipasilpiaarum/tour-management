// pages/Pantai.jsx
import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import TourCard from "../shared/TourCard";
import tourData from "../assets/data/tours";

const Pantai = () => {
  const pantaiTours = tourData.filter(tour =>
    tour.title.toLowerCase().includes("pantai")
  );

  return (
    <>
      <CommonSection title="Wisata Pantai" />
      <section>
        <Container>
          <Row>
            {pantaiTours.map((tour) => (
              <Col lg="3" className="mb-4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Pantai;
