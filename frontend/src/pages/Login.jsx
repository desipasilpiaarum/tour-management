import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import "../styles/login.css";

import loginImg from "../assets/images/login1.jpg";
import userIcon from "../assets/images/user.png";

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login data:", credentials);
        // Tambahkan logika autentikasi di sini
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="8" className="m-auto">
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={loginImg} alt="Login" />
                            </div>
                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="User Icon" />
                                </div>
                                <h2>Login</h2>

                                <Form onSubmit={handleSubmit}>
                                    <FormGroup>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            required
                                            id="email"
                                            value={credentials.email}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            required
                                            id="password"
                                            value={credentials.password}
                                            onChange={handleChange}
                                        />
                                    </FormGroup>
                                    <Button className="btn secondary__btn auth__btn" type="submit">
                                        Login
                                    </Button>
                                </Form>

                                <p>
                                    Don't have an account? <Link to="/register">Create an account</Link>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;
