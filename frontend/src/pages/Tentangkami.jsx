import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import Newseletter from "../shared/Newseletter";
import "../styles/tentang.css";

const TentangKami = () => {
    return (
        <>
           
            <CommonSection title="Tentang Kami" />

           
            <section>
                <Container>
                    <Row>
                        <Col>
                            <p className="text-center mt-4">
                                Selamat datang di <strong>Wisata Kita</strong>! Kami adalah tim pengembang yang berdedikasi untuk menyediakan platform informasi wisata yang menarik, mudah diakses, dan terpercaya. Wisata Kita hadir untuk membantu Anda menemukan destinasi wisata terbaik seperti pantai, gunung, curug, dan bukit di berbagai daerah dengan lebih mudah dan menyenangkan.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Section Perkenalan Trip */}
            <section className="container text-center my-5">
                <h1>
                    Memperkenalkan Trip <br />
                    <span className="highlight">Wisata Terbaik!</span>
                </h1>
                <p>
                    Bersama wisata kami, ajaklah keluarga serta teman-teman Anda untuk menikmati keindahan wisata yang ada di Tasikmalaya.
                </p>

                {/* Tombol Kategori */}
                <div className="categories my-4">
                    <button className="category-button">Pegunungan</button>
                    <button className="category-button">Pantai</button>
                    <button className="category-button">Air Terjun</button>
                    <button className="category-button">Bukit</button>
                </div>

                {/* Galeri Gambar */}
                <div className="image-gallery d-flex justify-content-center gap-3 flex-wrap">
                    <img src="https://via.placeholder.com/300x200" alt="Wisata 1" />
                    <img src="https://via.placeholder.com/300x200" alt="Wisata 2" />
                    <img src="https://via.placeholder.com/300x200" alt="Wisata 3" />
                </div>

                {/* Peta Lokasi */}
                <h2 className="mt-5">Lokasi Wisata Tasikmalaya</h2>
                <div className="map mt-3">
                    <img src="https://via.placeholder.com/600x400" alt="Peta Tasikmalaya" />
                </div>
            </section>

            {/* Section Berlangganan */}
            <Newseletter />
        </>
    );
};

export default TentangKami;
