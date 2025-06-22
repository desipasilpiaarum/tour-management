import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import Dashboard from "../pages/Dashboard";
import Tentangkami from "../pages/Tentangkami";
import Pantai from "../pages/Pantai";
import Gunung from './../pages/Gunung';
import Curug from "../pages/Curug";
import Bukit from "../pages/Bukit";
import Umum from "../pages/Umum";
import GuestRoute from "./GuestRoutes";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/tours' element={<Tours />} />
            <Route path='/tour/:id' element={<TourDetails />} />
            <Route
                path='/login'
                element={
                    <GuestRoute>
                        <Login />
                    </GuestRoute>
                }
            />
            <Route
                path='/register'
                element={
                    <GuestRoute>
                        <Register />
                    </GuestRoute>
                }
            />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/tentangkami' element={<Tentangkami />} />
            <Route path='/pantai' element={<Pantai />} />
            <Route path='/gunung' element={<Gunung />} />
            <Route path='/curug' element={<Curug />} />
            <Route path='/bukit' element={<Bukit />} />
            <Route path='/umum' element={<Umum />} />
        </Routes>
    );
};

export default Routers;