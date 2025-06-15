import React from "react";
import { Container, Row, Col } from "reactstrap";
import TourCard from "../shared/TourCard";
import tourData from "../assets/data/tours";
import CommonSectionCurug from "../shared/CommonSectionCurug";

const Curug = () => {
  const curugTours = tourData.filter(tour =>
    tour.title.toLowerCase().includes("curug") ||
    tour.title.toLowerCase().includes("air terjun")
  );

  return (
    <>
      <CommonSectionCurug title="Wisata Air Terjun" />
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
