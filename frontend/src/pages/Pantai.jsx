import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../shared/Common-SectionPantai";
import TourCard from "../shared/TourCard";

const API_URL = "http://localhost:5000/api/tours";

const Pantai = () => {
  const [pantaiTours, setPantaiTours] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(
          tour => tour.category && tour.category.toLowerCase() === "pantai"
        );
        setPantaiTours(filtered);
      })
      .catch(() => setPantaiTours([]));
  }, []);

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