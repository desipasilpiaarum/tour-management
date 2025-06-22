import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../shared/CommonSectionBukit";
import TourCard from "../shared/TourCard";

const API_URL = "http://localhost:5000/api/tours";

const Bukit = () => {
  const [bukitTours, setBukitTours] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(
          tour => tour.category && tour.category.toLowerCase() === "bukit"
        );
        setBukitTours(filtered);
      })
      .catch(() => setBukitTours([]));
  }, []);

  return (
    <>
      <CommonSection title="Wisata Bukit" />
      <section>
        <Container>
          <Row>
            {bukitTours.map((tour) => (
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

export default Bukit;