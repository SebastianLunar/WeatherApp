import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';
import Subir from '../components/Subir';
import Badge from '../components/Badge';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/subir" element={<Subir />} />
                <Route path="/badge/:id" element={<Badge />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;