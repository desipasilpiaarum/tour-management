import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import "../styles/home.css";

import heroImg from "../assets/images/hero-img01.jpeg";
import heroImg02 from "../assets/images/hero-img02.jpeg";
import heroVideo from "../assets/images/hero-video1.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.jpeg";

import Subtitle from "../shared/Subtitle";
import ServiceList from "../services/ServiceList";
import FeatureTourList from "../components/Featured-tours/FeatureTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newseletter from "../shared/Newseletter";
import SearchBar from "../shared/SearchBar";
import TourCard from "../shared/TourCard";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tours, setTours] = useState([]);

  // Fetch data wisata
  useEffect(() => {
    fetch("http://localhost:5000/api/tours")
      .then(res => res.json())
      .then(data => setTours(data))
      .catch(() => setTours([]));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

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

  return (
    <>
      {/*============= Hero Section Start ============*/}
      <section>
        <Container>
          <Row className="hero-row">
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg} alt="Hero 1" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box ">
                <img src={heroImg02} alt="Hero 2" />
              </div>
            </Col>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle="Mutiara dari priangan timur" />
                  <img src={worldImg} alt="World Map" />
                </div>
                <h1>
                  Tasikmalaya Pintu Gerbang Petualangan dan
                  <span className="highlight"> Kenangan</span>
                </h1>
                <p>
                  Jelajahi keindahan Tasikmalaya, dari hijauhnya Perkebunan Teh
                  Taraju hingga megahnya Curug Dengdeng. Rasakan keunikan budaya
                  di Kampung Naga dan nikmati lezatnya nasi tutug oncom. Setiap
                  sudut kota ini menyimpan cerita, setiap perjalanan menciptakan
                  kenangan.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*============ Experience Section ============*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <h1>Jelajahi</h1>
                <h2>
                  Semua Wisata Kami Yang <br /> Akan Melayani Anda
                </h2>
                <p>
                  Bersama wisata kami ajakan keluarga serta teman-teman anda
                  untuk menikmati keindahan wisata yang ada di Tasikmalaya.
                </p>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="Experience" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*============ Search Bar Section ============*/}
      <section className="my-4">
        <Container>
          <Row>
            <Col lg="12">
              <SearchBar onSearch={handleSearch} />
            </Col>
          </Row>
        </Container>
      </section>

      {/*============ Filtered Results Section ============*/}
      {lowerSearch !== "" && (
        <section className="my-4">
          <Container>
            {filteredTours.length > 0 ? (
              <Row>
                {filteredTours.map((tour) => (
                  <Col lg="3" className="mb-4" key={tour.id}>
                    <TourCard tour={tour} />
                  </Col>
                ))}
              </Row>
            ) : (
              <Row className="text-center">
                <Col>
                  <h5>Tidak ditemukan destinasi untuk “{searchTerm}”</h5>
                </Col>
              </Row>
            )}
          </Container>
        </section>
      )}

      {/*============ Featured Tours Section ============*/}
      {lowerSearch === "" && (
        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5">
                <div className="experience__content">
                  <h1>Jelajahi</h1>
                  <h2 className="featured__tour-title">Wisata Unggulan Kita</h2>
                </div>
              </Col>
              <FeatureTourList />
            </Row>
          </Container>
        </section>
      )}

      <Newseletter />

      {/* --- CSS Internal untuk Responsive Hero Section --- */}
      <style jsx="true">{`
        .hero-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }

        @media (max-width: 992px) {
          .hero-row {
            flex-direction: column-reverse !important;
          }

          .hero-row > [class*="col-"] {
            max-width: 100% !important;
            flex: 0 0 100% !important;
          }

          .hero__img-box {
            margin-top: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
