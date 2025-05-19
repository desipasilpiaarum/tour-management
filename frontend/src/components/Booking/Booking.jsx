import React, { useState } from "react";
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

import { useNavigate } from "react-router-dom";
const Booking = ({ tour, avgRating }) => {
    const { price, reviews } = tour;
    const navigate = useNavigate()


    const [ credentials, setCredentials ] = useState({
        userId: '01', //later it will be dynamic
        userEmail: 'example@gmail.com',
        fullName: ' ',
        phone: ' ',
        guestSize: 1,
        bookAt: ' '

    });

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const serviceFee = 10
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number
        (serviceFee)


    // send data to the server

    const handleClick = e => {
        e.preventDefault();

        navigate("/thank-you");
    };

    
};

export default Booking;