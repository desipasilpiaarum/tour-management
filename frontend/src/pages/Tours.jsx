import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import SearchBar from "../shared/SearchBar";
import TourCard from "../shared/TourCard";
import Newseletter from "../shared/Newseletter";
import "../styles/tour.css";

const API_URL = "http://localhost:5000/api/tours";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTours(data))
      .catch(() => setTours([]));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter search: nama, lokasi, deskripsi, kategori (case-insensitive)
  const lowerSearch = searchTerm.trim().toLowerCase();
  const filteredTours = tours.filter((tour) => {
    const title = (tour.title || "").toLowerCase();
    const location = (tour.location || "").toLowerCase();
    const description = (tour.description || "").toLowerCase();
    const category = (tour.category || "").toLowerCase();
    return (
      title.includes(lowerSearch) ||
      location.includes(lowerSearch) ||
      description.includes(lowerSearch) ||
      category.includes(lowerSearch)
    );
  });

  // Filter berdasarkan kategori (case-insensitive)
  const filterByCategory = (category) =>
    tours.filter(
      (tour) =>
        tour.category &&
        tour.category.toLowerCase() === category.toLowerCase()
    );

  const pantaiToursAll = filterByCategory("Pantai");
  const gunungToursAll = filterByCategory("Pegunungan");
  const curugToursAll = tours.filter(
    (tour) =>
      tour.category &&
      (tour.category.toLowerCase() === "air terjun" ||
        tour.category.toLowerCase() === "curug")
  );
  const bukitToursAll = filterByCategory("Bukit");
  const umumToursAll = filterByCategory("Umum");

  const gunungTours = gunungToursAll.slice(0, 4);
  const pantaiTours = pantaiToursAll.slice(0, 4);
  const curugTours = curugToursAll.slice(0, 4);
  const bukitTours = bukitToursAll.slice(0, 4);
  const umumTours = umumToursAll.slice(0, 4);

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
          {/* Jika search kosong, tampilkan per kategori */}
          {lowerSearch === "" && (
            <>
              {renderSection("Pantai", "/pantai", pantaiTours)}
              {renderSection("Pegunungan", "/gunung", gunungTours)}
              {renderSection("Air Terjun", "/curug", curugTours)}
              {renderSection("Bukit", "/bukit", bukitTours)}
              {renderSection("Umum", "/umum", umumTours)}
            </>
          )}

          {/* Jika search ada, tampilkan hasil pencarian */}
          {lowerSearch !== "" && (
            <>
              {filteredTours.length > 0 ? (
                <>
                  <Row className="mb-3">
                    <Col>
                      <h5>
                        Hasil pencarian untuk: <b>{searchTerm}</b>
                      </h5>
                    </Col>
                  </Row>
                  {renderTours(filteredTours)}
                </>
              ) : (
                <Row className="text-center">
                  <Col>
                    <h5>Tidak ditemukan destinasi dengan kata kunci “{searchTerm}”.</h5>
                  </Col>
                </Row>
              )}
            </>
          )}
        </Container>
      </section>

      <Newseletter />
    </>
  );
};

export default Tours;