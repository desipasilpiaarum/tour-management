import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../shared/CommonSectionCurug";
import TourCard from "../shared/TourCard";

const API_URL = "http://localhost:5000/api/tours";

const Curug = () => {
  const [curugTours, setCurugTours] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(
          tour =>
            tour.category &&
            (tour.category.toLowerCase() === "air terjun" ||
             tour.category.toLowerCase() === "curug")
        );
        setCurugTours(filtered);
      })
      .catch(() => setCurugTours([]));
  }, []);

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