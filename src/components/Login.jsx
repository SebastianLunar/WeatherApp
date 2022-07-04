import React from 'react';
import icong from '../assets/google.png'
import iconf from '../assets/facebook.png'
import { Boton, Input, SOCIAL } from '../styles/Global';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { actionLoginAsync, loginFacebook, loginGoogle } from '../redux/actions/loginActions';

const Login = () => {
    const dispatch = useDispatch()

    const [formValue, handleChange, reset] = useForm({
        email: '',
        password: '',
    })

    const { email, password } = formValue

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(actionLoginAsync(email, password))
        reset()
    }

    return (
        <>
            <div style={{textAlign: "center", marginTop: "65px"}}>
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
                        <img src={icong} alt="" onClick={() => dispatch(loginGoogle())} />
                        <img src={iconf} alt="" onClick={() => dispatch(loginFacebook())}/>
                    </SOCIAL>
                </div>

                <div>
                    <span>Don't have an account?</span><span><Link to="/register"> Sign Up</Link></span>
                </div>
            </div>
        </>
    );
};

export default Login;