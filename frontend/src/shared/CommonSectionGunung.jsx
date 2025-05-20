import React from "react";
import './common-section-gunung.css'
import { Container, Row, Col } from 'reactstrap';


const CommonSectionGunung = ({ title }) => {
    return (
        <section className="common__section_gunung">
            <Container>
                <Row>
                    <Col lg='12'>
                        <h1>{title}</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CommonSectionGunung;