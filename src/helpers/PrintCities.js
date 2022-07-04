import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IMGD = styled.img`
    width:44px; height:44px;
    border-radius: 10px;
`
const H5 = styled.h5`
    font-weight: 400;
    font-size: 14px;
    color: #414141;
`
const H6 = styled.h6`
    font-weight: 400;
    font-size: 14px;
    color: #A7A7A7;
`

const PrintDishes = ({ image, name, price }) => {
    return (
        <Link style={{ textDecoration: "none" }} to={`/product/${name}`}>
            <div style={{ display: "flex" }}>
                <div>
                    <IMGD src={image} alt="" />
                </div>
                <div style={{marginLeft: "1rem"}}>
                    <H5>{name}</H5>
                    <H6>${price}</H6>
                </div>
            </div>
        </Link>
    );
};

export default PrintDishes;