import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {


    const { signInUsingGoogle } = useAuth()

    return (
        <div className="pt-5 pb-5 register" onSubmit="">

            <p>Already Have An Account? <Link to="/login"><button className="btn btn-warning">LogIn</button></Link></p>

            <div className="pt-5">
                <Button onClick={signInUsingGoogle}>Google Sign up</Button>
            </div>
        </div>
    );
};

export default Register;