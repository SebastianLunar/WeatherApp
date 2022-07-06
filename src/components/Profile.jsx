import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Boton, Input } from '../styles/Global';
import styled from 'styled-components';
import Navbar from '../containers/Navbar';

const DIV = styled.div`
    width: 83px; height: 32px;
    background: #2E3562; border-radius: 47px;
    display: flex; align-items: center; justify-content: space-evenly;
`
const TITLE = styled.h2`
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    margin-top: 53px;
    margin-bottom: 22px;
    text-align: center;
`

const Profile = () => {
    const user = useSelector(store => store.registerStore)
    const dispatch = useDispatch()
    console.log(user)

    return (
        <div>
            <Navbar />
            <TITLE>Your Profile</TITLE>
            <img src={user.image} width="78px" alt="" className='d-flex mx-auto' style={{ borderRadius: "100%" }} />
            <div className='d-flex justify-content-center my-3' style={{ gap: "1.5rem" }}>
                <DIV>
                    <h3>{user.name}</h3>
                </DIV>
                <DIV>
                    <h3>{user.email}</h3>
                </DIV>
            </div>
            <TITLE>Your Badges</TITLE>
            <div>

            </div>
        </div >
    );
};

export default Profile;