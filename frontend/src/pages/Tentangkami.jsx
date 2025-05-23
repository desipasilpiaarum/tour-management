import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import Newseletter from "../shared/Newseletter";
import "../styles/tentang.css";

import wisata1 from '../assets/images/sawer.png';

import wisata2 from '../assets/images/naga.png';
import wisata3 from '../assets/images/kacapi.png';

const TentangKami = () => {
    return (
        <>
            {/* Judul Section Umum */}
            <CommonSection title="Tentang Kami" />

        {/* Section Perkenalan Trip */}
            <section className="my-2">
                <Container className="text-center">
                    <div className="content">
                        <h2 className="subtitle">Memperkenalkan Trip Wisata Terbaik!</h2>
                        <p>
                            Bersama wisata kami ajakan keluarga serta teman-teman anda untuk
                            menikmati keindahan wisata yang ada di Tasikmalaya.
                        </p>
                        <div className="button-container">
                            <button className="trip-button">Pegunungan</button>
                            <button className="trip-button">Pantai</button>
                            <button className="trip-button">Air Terjun</button>
                            <button className="trip-button">Bukit</button>
                        </div>
                    </div>
               
                {/* Galeri Gambar */}
                <div className="image-gallery d-flex justify-content-center gap-3 flex-wrap">
                    <img src={wisata1} alt="Pemandangan Pegunungan Tasikmalaya" width={300} height={200} />
                    <img src={wisata2} alt="Pantai Indah Tasikmalaya" width={300} height={200} />
                    <img src={wisata3} alt="Air Terjun Eksotis di Tasikmalaya" width={300} height={200} />
                </div>

                {/* Lokasi Peta */}
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
        </section >

            {/* Komponen Langganan Berita */ }
            < Newseletter />
        </>
    );
};

export default TentangKami;
