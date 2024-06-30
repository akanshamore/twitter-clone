import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import twitterImage from "../../assets/images/twitter.jpeg";

const Login = () => {


    return (

        <div className='login-container'>
            <div className='image-container'>
                <img src={twitterImage} alt="" />
            </div>
            <div className='form-container'>
                <TwitterIcon />
                <h2>Happening now</h2>
                <form>
                    <input type="email" />
                    <input type="password" />
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