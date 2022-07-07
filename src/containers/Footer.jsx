import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png'

const FOOTER = styled.footer`
    text-align: center;
    clear: both;
    width: 100%;
    margin: 60px 0 0;
    padding: 30px 0;
    font-size: 14px;
    color: #aaa;
    background-color: #343434;
    font-weight: 300;
    flex-shrink: 0;
    bottom: 0;
`
const CONTAINER = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 900px;
    margin: 0 auto;
    border-top: 1px solid #4a4a4a;
    padding-top: 40px;
`
const SECTION1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 60px;
    text-align: left;
    border-right: 1px solid #4a4a4a;
    padding: 10px 15% 10px 0;
`
const IMG = styled.img`
    width: 50px;
    border-radius: 12px;
`
const P = styled.p`
    display: flex;
    align-items: center;
    font-size: 36px;
    color: #fff;
    position: relative;
    margin-bottom: 10px;
`

const Footer = () => {
    return (
        <FOOTER>
            <CONTAINER>
                <SECTION1>
                    <P><IMG alt="Logo" src={logo} /> WeatherAPP</P>
                </SECTION1>
                <div>
                    <ul style={{listStyle: "none"}}>
                        <li>iOS app</li>
                        <li>Terms of Service</li>
                        <li>Attribution</li>
                        <li>Blog</li>
                        <li>Help</li>
                        <li>Contact</li>
                        <li>Privacy</li>
                    </ul>
                </div>
            </CONTAINER>

            <div>
                <span>Copyright © 2022 Sebastian Luna. All rights reserved.&nbsp;</span>
            </div>
        </FOOTER>
    );
};

export default Footer;