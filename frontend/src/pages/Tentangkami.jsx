import React from "react";
import { Container } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import Newseletter from "../shared/Newseletter";
import "../styles/tentang.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import wisata1 from '../assets/images/sawer.png';
import wisata2 from '../assets/images/naga.png';
import wisata3 from '../assets/images/kacapi.png';
import wisata4 from '../assets/images/bpantai.png';
import wisata5 from '../assets/images/sindangkerta.png';

const TentangKami = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <CommonSection title="Tentang Kami" />

            <section className="my-2">
                <Container className="text-center">
                    <div className="content">
                        <h2 className="subtitle">Memperkenalkan Trip Wisata Terbaik!</h2>
                        <p>
                            Bersama wisata kami, ajak keluarga serta teman-teman anda untuk
                            menikmati keindahan wisata yang ada di Tasikmalaya.
                        </p>

                        {/* Tombol Trip */}
                        <div className="button-container mb-4">
                            <button className="trip-button">Pegunungan</button>
                            <button className="trip-button">Pantai</button>
                            <button className="trip-button">Air Terjun</button>
                            <button className="trip-button">Bukit</button>
                        </div>
                    </div>

                    {/* Galeri Gambar Carousel */}
                    <div className="image-gallery mt-4">
                        <Slider {...settings}>
                            <div><img src={wisata1} alt="Sawer" className="carousel-image" /></div>
                            <div><img src={wisata2} alt="Naga" className="carousel-image" /></div>
                            <div><img src={wisata3} alt="Kacapi" className="carousel-image" /></div>
                            <div><img src={wisata4} alt="Pantai" className="carousel-image" /></div>
                            <div><img src={wisata5} alt="Sindangkerta" className="carousel-image" /></div>
                        </Slider>
                    </div>

                    {/* Lokasi Peta */}
                    <h2 className="subtitle mt-5">Lokasi Wisata Tasikmalaya</h2>
                    <div className="map mt-3">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12603.123456789!2d108.210123!3d-7.327123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dfabbeebfaaa%3A0x9a12345abcde!2sTasikmalaya!5e0!3m2!1sen!2sid!4v1234567890"
                            width="600"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Peta Lokasi Wisata di Tasikmalaya"
                        ></iframe>
                    </div>
                </Container>
            </section>

            <Newseletter />
        </>
    );
};

export default TentangKami;
