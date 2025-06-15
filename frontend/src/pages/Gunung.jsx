import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSectionGunung from "../shared/CommonSectionGunung";
import TourCard from "../shared/TourCard";
import tourData from "../assets/data/tours";


const Gunung = () => {
  const gunungTours = tourData.filter(tour =>
    tour.title.toLowerCase().includes("gunung")
  );

  return (
    <>
      <CommonSectionGunung title="Wisata Pegunungan" />
      <section>
        <Container>
          <Row>
            {gunungTours.map((tour) => (
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

export default Gunung;
