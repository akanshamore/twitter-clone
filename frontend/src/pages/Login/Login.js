import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import twitterImage from "../../assets/images/twitter.jpeg";
import { useState } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth"
const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    console.log(user)

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log("clicked")
        console.log(email, password)
        signInWithEmailAndPassword(email, password);
    }

    return (

        <div className='login-container'>
            <div className='image-container'>
                <img src={twitterImage} alt="" />
            </div>
            <div className='form-container'>
                <TwitterIcon />
                <h2>Happening now</h2>
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
                        <button type="submit" className='="btn'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;