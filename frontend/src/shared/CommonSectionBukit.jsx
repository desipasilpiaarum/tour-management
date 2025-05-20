import React from "react";
import './common-section-bukit.css'
import { Container, Row, Col } from 'reactstrap';


const CommonSectionBukit = ({ title }) => {
    return (
        <section className="common__section_bukit">
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

export default CommonSectionBukit;