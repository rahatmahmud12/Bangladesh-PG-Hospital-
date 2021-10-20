import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIslogin] = useState(false);
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

    const auth = getAuth();

    const handleToggle = e => {
        setIslogin(e.target.checked)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)

    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)

    }


    const handleRegistration = (e) => {
        e.preventDefault()
        console.log(email, password)
        if (password.length < 6) {
            setError('Password Must Be 6 Characters')
            return;
        }

        isLogin ? newLogin(email, password) : createNewUser(email, password)
    }
    const newLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                verifyEmail();
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }
    return (
        <div className="login">
            <div>
                <div>
                    <form className="mx-5 w-50 mx-auto" onSubmit={handleRegistration}>
                        <h2 className="fs-1 text-warning mb-5 pt-5">Please {isLogin ? 'Login' : 'Register'} Here</h2>
                        <div className="row mb-3 ">
                            <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                            </div>
                        </div>
                        <div className="text-danger mb-4">{error}</div>

                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input onChange={handleToggle} className="form-check-input" type="checkbox" id="gridCheck1" />

                                    <label className="form-check-lebel" for="gridCheck1"><span className="mr-5"> If you already registered, please click the checkbox and the click button below.</span></label>

                                    {/* <input type="submit" value="Register" /> */}
                                </div>
                            </div>

                        </div>

                        <button onSubmit={handleRegistration} type="submit" className="btn btn-primary">{isLogin ? "Login" : "Register"}</button>
                    </form>

                    <br />
                    <br />
                    <br />
                    <br />
                </div>
                <p>New Here <Link to="/register"> <button className="btn btn-light">Create Account</button></Link></p>

                <br />
                <button className="btn btn-primary mb-3" onClick={handleGoogleLogIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;