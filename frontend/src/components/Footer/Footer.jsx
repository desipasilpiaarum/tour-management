import React from "react";
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logokita.png';

const quick__links = [
    { path: "/home", display: "Beranda" },
    { path: "/tours", display: "Wisata" },
    { path: "/Tentangkami", display: "Tentang Kita" },
];
const quick__links2 = [

];




const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='4'>
                        <h5 ></h5>
                        <div className="logo">
                            <img src={logo} alt="" />
                            <p>Bersama kami ciptakan liburan yang luar biasa</p>
                            <div className="social__links d-flex align-items-center gap-4">
                                <span>
                                    <Link to='#'><i class="ri-youtube-line"></i></Link>
                                </span>
                                <span>
                                    <Link to='#'><i class="ri-github-fill"></i></Link>
                                </span>
                                <span>
                                    <Link to='#'><i class="ri-facebook-fill"></i></Link>
                                </span>
                                <span>
                                    <Link to='#'><i class="ri-instagram-line"></i></Link>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <h5 className="footer__link-title"> Discovery</h5>

                        <ListGroup className="footer__quick-links">
                            {
                                quick__links.map((item, index) => (
                                    <ListGroupItem key={index} className="ps-0 border-0">
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>

                                ))
                            }

                        </ListGroup>
                    </Col>
                    
                    <Col lg='3'>
                    <h5 className="footer__link-title">Contac Person</h5>

                        <ListGroup className="footer__quick-links">

                              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                       <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span><i class="ri-map-pin-line"></i></span>
                                        Address:
                                       </h6>

                                       <p className="mb-0">Tasikmalaya, Indonesia</p>
                                    </ListGroupItem>

                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                       <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span><i class="ri-mail-line"></i></span>
                                        Email:
                                       </h6>

                                       <p className="mb-0">wisatakita@gmail.com</p>
                                    </ListGroupItem>

                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                       <h6 className="mb-0 d-flex align-items-center gap-2">
                                        <span><i class="ri-phone-fill"></i></span>
                                        Phone:
                                       </h6>

                                       <p className="mb-0">+62 8752-89008</p>
                                    </ListGroupItem>

                        </ListGroup>
                    </Col>

                  
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;