import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import twitterImage from "../../assets/images/twitter.jpeg";
import { useState } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth"
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');

    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleUserrror] = useSignInWithGoogle(auth);
    if (user || googleUser) {
        navigate('/')
        console.log(user)
        console.log(googleUser)
    }

    if (error) {

        console.log(error.message)
    }

    if (loading) {

        console.log('loading...')
    }


    const handleSubmit = (e) => {

        e.preventDefault();
        console.log("clicked")
        console.log(email, password)
        signInWithEmailAndPassword(email, password);
    }

    const handleGoogleSignIn = () => {

        signInWithGoogle();
    }

    return (

        <div className='login-container'>
            <div className='image-container'>
                <img className='image' src={twitterImage} alt="" />
            </div>
            <div className='form-container'>
                <TwitterIcon style={{ color: 'skyblue' }} />
                <h2 className='heading'>Happening now</h2>
                <h3 className='heading1'>What Happening Today ? </h3>
                <div className='form-box'>
                    <form onSubmit={handleSubmit}>
                        <input type="email"
                            className='email'
                            placeholder='Email address'
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input type="password"
                            className='password'
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className='btn-login'>
                            <button type="submit" className='btn'>
                                Login
                            </button>
                        </div>
                    </form></div>


                <hr />
                <div className='google-button'>
                    <GoogleButton
                        className='g-btn'
                        type="light"
                        onClick={handleGoogleSignIn}
                    />
                </div>
                <div>
                    Don't have an account?
                    <Link
                        to='/signup'
                        style={{
                            textDecoration: 'none',
                            color: 'skyblue',
                            fontWeight: '600',
                            marginLeft: '5px'

                        }}>
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;