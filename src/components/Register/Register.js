import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {

    return (
        <div className="pt-5 pb-5 register" onSubmit="">
            <form>
                <input placeholder="Your Email" type="email" name="" id="" /><br />

                <input placeholder="Password" type="password" name="" id="" /><br />
                <input placeholder="Re-enter password" type="password" name="" id="" /><br />
                <input type="submit" value="Submit"></input>
            </form>
            <p>Already Have An Account? <Link to="/login">Log In</Link></p>

            <div>
                <Button >Google Sign In</Button>
            </div>
        </div>
    );
};

export default Register;