import React from "react";
import './common-section-pantai.css'
import { Container, Row, Col } from 'reactstrap';


const CommonSectionPantai = ({ title }) => {
    return (
        <section className="common__section_pantai">
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

export default CommonSectionPantai;