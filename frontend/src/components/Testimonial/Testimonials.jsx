import React from "react";
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ]
    };

    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p>
                    “Liburan ke Pantai Selatan bersama keluarga sangat menyenangkan! 
                    Pelayanan tour guide ramah dan fasilitas lengkap. Anak-anak sangat menikmati perjalanan ini.”
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Andi Pratama</h6>
                        <p>Guru SD</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>
                    “Pengalaman mendaki Gunung Gede sangat berkesan. 
                    Pemandangan indah dan rute yang aman membuat perjalanan ini tak terlupakan. 
                    Terima kasih atas pelayanannya!”
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Siti Rahmawati</h6>
                        <p>Pegawai Bank</p>
                    </div>
                </div>
            </div>
            <div className="testimonial py-4 px-3">
                <p>
                    “Air terjun Curug Cikaso benar-benar memukau! 
                    Tempatnya bersih dan akses mudah. Sangat direkomendasikan untuk wisata alam bersama teman-teman.”
                </p>
                <div className="d-flex align-items-center gap-4 mt-3">
                    <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className="mb-0 mt-3">Budi Santoso</h6>
                        <p>Wiraswasta</p>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default Testimonials;