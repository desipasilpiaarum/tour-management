import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import SearchBar from "../shared/SearchBar";
import TourCard from "../shared/TourCard";
import Newseletter from "../shared/Newseletter";
import tourData from "../assets/data/tours";
import "../styles/tour.css";

const Tours = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  
  const gunungToursAll = tourData.filter(tour =>
    tour.title.toLowerCase().includes("gunung")
  );

  const pantaiToursAll = tourData.filter(tour =>
    tour.title.toLowerCase().includes("pantai")
  );

  const curugToursAll = tourData.filter(tour =>
    tour.title.toLowerCase().includes("curug") ||
    tour.title.toLowerCase().includes("air terjun") ||
    tour.title.toLowerCase().includes("sindang")
  );

  const bukitToursAll = tourData.filter(tour =>
    tour.title.toLowerCase().includes("bukit")
  );


  const gunungTours = gunungToursAll.slice(0, 4);
  const pantaiTours = pantaiToursAll.slice(0, 4);
  const curugTours = curugToursAll.slice(0, 4);
  const bukitTours = bukitToursAll.slice(0, 4);

  const renderTours = (tours) => (
    <Row>
      {tours.map((tour) => (
        <Col lg="3" className="mb-4" key={tour.id}>
          <div onClick={() => navigate(`/tour/${tour.id}`)} style={{ cursor: "pointer" }}>
            <TourCard tour={tour} />
          </div>
        </Col>
      ))}
    </Row>
  );

  const renderSection = (title, link, data) => (
    <>
      <Row className="align-items-center justify-content-between mb-2 mt-5">
        <Col><h2>{title}</h2></Col>
        <Col className="text-end">
          <Link to={link}>
            <button className="btn btn-primary btn-sm">See All</button>
          </Link>
        </Col>
      </Row>
      {renderTours(data)}
    </>
  );

  const lowerSearch = searchTerm.toLowerCase();

  return (
    <>
      <CommonSection title="All Tours" />

      {/* Search */}
      <section>
        <Container>
          <Row>
            <SearchBar onSearch={handleSearch} />
          </Row>
        </Container>
      </section>

      {/* List Wisata */}
      <section className="pt-0">
        <Container>
          {/* Jika tidak sedang mencari */}
          {lowerSearch === "" && (
            <>
              {renderSection("Pantai", "/pantai", pantaiTours)}
              {renderSection("Pegunungan", "/gunung", gunungTours)}
              {renderSection("Air Terjun", "/curug", curugTours)}
              {renderSection("Bukit", "/bukit", bukitTours)}
            </>
          )}

          {/* Jika ada pencarian */}
          {lowerSearch === "pantai" && renderSection("Pantai", "/pantai", pantaiToursAll)}
          {lowerSearch === "gunung" && renderSection("Pegunungan", "/gunung", gunungToursAll)}
          {(lowerSearch === "curug" || lowerSearch === "air terjun" || lowerSearch === "sindang") &&
            renderSection("Air Terjun", "/curug", curugToursAll)}
          {lowerSearch === "bukit" && renderSection("Bukit", "/bukit", bukitToursAll)}

          {/* Jika kategori tidak ditemukan */}
          {lowerSearch &&
            !["pantai", "gunung", "curug", "air terjun", "sindang", "bukit"].includes(lowerSearch) && (
              <Row className="text-center">
                <Col>
                  <h5>Kategori “{searchTerm}” tidak ditemukan.</h5>
                </Col>
              </Row>
            )}
        </Container>
      </section>

      <Newseletter />
    </>
  );
};

export default Tours;
