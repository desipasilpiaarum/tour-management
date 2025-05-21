import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import TourCard from "../shared/TourCard";
import tourData from "../assets/data/tours";

const Curug = () => {
  const curugTours = tourData.filter(tour =>
    tour.title.toLowerCase().includes("curug") ||
    tour.title.toLowerCase().includes("air terjun")
  );

  return (
    <>
      <CommonSection title="Wisata Air Terjun" />
      <section>
        <Container>
          <Row>
            {curugTours.map((tour) => (
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

export default Curug;
