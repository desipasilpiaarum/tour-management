import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import "../styles/home.css";

import SearchBar from "../shared/SearchBar";
import tourData from "../assets/data/tours";
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

const Home = () => {
    const navigate = useNavigate();
    const [filteredTours, setFilteredTours] = useState([]);

    const handleSearch = (location) => {
        const keyword = location.toLowerCase();
        const results = tourData.filter((tour) =>
            tour.title.toLowerCase().includes(keyword)
        );

        setFilteredTours(results);
        navigate("/tours", { state: { results } });
    };

    return (
        <>


            {/*============= Hero Section Start ============*/}
            <section>
                <Container>
                    <Row>
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
                            <div className="hero__img-box">
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
                                    Taraju hingga megahnya Curug Dengdeng. Rasakan keunikan
                                    budaya di Kampung Naga dan nikmati lezatnya nasi tutug
                                    oncom. Setiap sudut kota ini menyimpan cerita, setiap
                                    perjalanan menciptakan kenangan.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Search Bar */}
            <section>
                <Container>
                    <Row>
                        <SearchBar onSearch={handleSearch} />
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

            {/*============ Featured Tours Section ============*/}
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

            <Newseletter />
        </>
    );
};

export default Home;
