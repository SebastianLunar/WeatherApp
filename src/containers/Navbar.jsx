import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png'

const NAV = styled.nav`
    display: table;
    width: 100%;
    background-color: #333;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
`
const INNER = styled.div`
    margin: 6px auto;
    width: 80%;
    max-width: 900px;
    text-align: center;
    white-space: nowrap;
    display: flex;
    justify-content: space-evenly;
`
const IMG = styled.img`
    width: 30px;
    border-radius: 8px;
`

const Navbar = () => {
    return (
        <NAV>
            <INNER>
                <Link style={{ textDecoration: "none", color: "white" }} to="/home">
                    <IMG src={logo} alt="Logo" /><span>WeatherAPP</span>
                </Link>
                <Link style={{ textDecoration: "none", color: "white" }} to="/profile">
                    Profile
                </Link>
            </INNER>
        </NAV>
    );
};

export default Navbar;