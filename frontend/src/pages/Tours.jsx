import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Tambahkan ini
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import tourData from '../assets/data/tours';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import Newseletter from '../shared/Newseletter';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Tours = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const navigate = useNavigate(); // Hook untuk navigasi

    useEffect(() => {
        const pages = Math.ceil(tourData.length / 4); // Hitung jumlah halaman dari data
        setPageCount(pages);
    }, [page]);

    return (
        <>
            <CommonSection title={'All Tours'} />
            <section>
                <Container>
                    <Row>
                        <SearchBar />

                        <Row className="align-items-center justify-content-between mb-2">
                            <Col>
                                <h2>Pegunungan</h2>
                            </Col>
                            <Col className="text-end">
                                <Link to="/home">
                                    <button className="btn btn-primary btn-sm">
                                        See All
                                    </button>
                                </Link>
                            </Col>
                        </Row>

                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Container>
                    <Row>
                        {tourData?.map(tour => (
                            <Col lg='3' className="mb-4" key={tour.id}>
                                {/* Navigasi ke TourDetails saat kartu diklik */}
                                <div onClick={() => navigate(`/tour/${tour.id}`)} style={{ cursor: "pointer" }}>
                                    <TourCard tour={tour} />
                                </div>
                            </Col>
                        ))}

                        <Row className="align-items-center justify-content-between mb-2">
                            <Col>
                                <h2>Pantai</h2>
                            </Col>
                            <Col className="text-end">
                                <Link to="/pantai">
                                    <button className="btn btn-primary btn-sm">
                                        See All
                                    </button>
                                </Link>
                            </Col>
                        </Row>

                        <section className="pt-0">
                            <Container>
                                <Row>
                                    {tourData?.map(tour => (
                                        <Col lg='3' className="mb-4" key={tour.id}>
                                            {/* Navigasi ke TourDetails saat kartu diklik */}
                                            <div onClick={() => navigate(`/tour/${tour.id}`)} style={{ cursor: "pointer" }}>
                                                <TourCard tour={tour} />
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </section>



                        <Row className="align-items-center justify-content-between mb-2">
                            <Col>
                                <h2>Air Terjun</h2>
                            </Col>
                            <Col className="text-end">
                                <Link to="/home">
                                    <button className="btn btn-primary btn-sm">
                                        See All
                                    </button>
                                </Link>
                            </Col>
                        </Row>

                        <section className="pt-0">
                            <Container>
                                <Row>
                                    {tourData?.map(tour => (
                                        <Col lg='3' className="mb-4" key={tour.id}>
                                            {/* Navigasi ke TourDetails saat kartu diklik */}
                                            <div onClick={() => navigate(`/tour/${tour.id}`)} style={{ cursor: "pointer" }}>
                                                <TourCard tour={tour} />
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </section>


                        <Row className="align-items-center justify-content-between mb-2">
                            <Col>
                                <h2>Bukit</h2>
                            </Col>
                            <Col className="text-end">
                                <Link to="/home">
                                    <button className="btn btn-primary btn-sm">
                                        See All
                                    </button>
                                </Link>
                            </Col>
                        </Row>

                        <section className="pt-0">
                            <Container>
                                <Row>
                                    {tourData?.map(tour => (
                                        <Col lg='3' className="mb-4" key={tour.id}>
                                            {/* Navigasi ke TourDetails saat kartu diklik */}
                                            <div onClick={() => navigate(`/tour/${tour.id}`)} style={{ cursor: "pointer" }}>
                                                <TourCard tour={tour} />
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </section>
                    </Row>
                </Container>
            </section>
            <Newseletter />
        </>
    );
};

export default Tours;
