import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import TourCard from "../shared/TourCard";

const API_URL = "http://localhost:5000/api/tours";

const Umum = () => {
  const [umumTours, setUmumTours] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(
          tour => tour.category && tour.category.toLowerCase() === "umum"
        );
        setUmumTours(filtered);
      })
      .catch(() => setUmumTours([]));
  }, []);

  return (
    <>
      <CommonSection title="Wisata Lainnya" />
      <section>
        <Container>
          <Row>
            {umumTours.map((tour) => (
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

export default Umum;