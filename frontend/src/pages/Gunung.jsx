import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../shared/CommonSectionGunung";
import TourCard from "../shared/TourCard";

const API_URL = "http://localhost:5000/api/tours";

const Gunung = () => {
  const [gunungTours, setGunungTours] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(
          tour => tour.category && tour.category.toLowerCase() === "pegunungan"
        );
        setGunungTours(filtered);
      })
      .catch(() => setGunungTours([]));
  }, []);

  return (
    <>
      <CommonSection title="Wisata Pegunungan" />
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