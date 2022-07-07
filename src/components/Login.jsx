import React from 'react';
import icong from '../assets/google.png'
import iconf from '../assets/facebook.png'
import { Boton, Input, SOCIAL } from '../styles/Global';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { actionLoginAsync, loginFacebook, loginGoogle } from '../redux/actions/loginActions';
import styled from 'styled-components';
import background from '../assets/back2.jpg'

const BACK = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    position: absolute;
    z-index: 0;
`
const CONTENT = styled.div`
    text-align: center;
    position: absolute;
    width: 40%;
    z-index: 1;
    height: 100%;
    background-color: rgb(255 255 255 / 60%);
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formValue, handleChange, reset] = useForm({
        email: '',
        password: '',
    })

    const { email, password } = formValue

    let busqueda1 = [
        {
            name: ""
        }
    ]
    
    localStorage.setItem("busquedas", JSON.stringify(busqueda1))

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(actionLoginAsync(email, password))
        reset()
    }

    return (
        <>
            <BACK></BACK>
            <CONTENT>
                <h1>Sign In</h1>
                <form action="" onSubmit={handleSubmit}>
                    <Input type="email" name="email" placeholder="Email" value={formValue.email} onChange={handleChange} style={{marginBottom: "10px"}} />
                    <Input type="password" name="password" placeholder="Password" value={formValue.password} onChange={handleChange} style={{marginBottom: "2rem"}} />
                    <Boton>Sign In</Boton>
                    <h6>¿Forgot your password?</h6>
                </form>

                <div>
                    <h4>Sign in with</h4>
                    <SOCIAL>
                        <img src={icong} style={{cursor: "pointer"}} alt="" onClick={() => dispatch(loginGoogle(), navigate('/home'))} />
                        <img src={iconf} style={{cursor: "pointer"}} alt="" onClick={() => dispatch(loginFacebook(), navigate('/home'))}/>
                    </SOCIAL>
                </div>

                <div>
                    <span>Don't have an account?</span><span><Link to="/register"> Sign Up</Link></span>
                </div>
            </CONTENT>
        </>
    );
};

export default Login;