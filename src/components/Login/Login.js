import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'


    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login">
            <div>
                <h2 className="fs-2 pb-3">Login</h2>
                <form onSubmit="">
                    <input placeholder="Your Email" type="email" name="" id=""></input>
                    <br />
                    <input className="" placeholder="Password" type="password" name="" id=""></input><br />
                    <input className="btnn mt-1" type="submit" value="submit"></input>

                </form>
                <p>New Here <Link to="/register">Create Account</Link></p>

                <br />
                <button onClick={handleGoogleLogIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;