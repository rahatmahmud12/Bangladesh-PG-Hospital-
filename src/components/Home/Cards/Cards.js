
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Booking from '../../Booking/Booking';


import './Cards.css'

const Cards = (props) => {



    const { id, img, service, description, phone } = props.service
    return (

        <div className="card-div ">
            <div class="container mt-2">

                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div className="card card-block">

                            <img className="image" src={img} alt="Photo of sunset" />
                            <h5 class="card-title mt-3 mb-3 fs-5 mx-auto">{service} </h5>
                            <p class="card-text">{description}</p>

                            <Link to={`/booking/${id}`}><Button className="">Contract {service} </Button></Link>


                            <h6 className="pt-5">Phone: {phone}</h6>

                        </div>

                    </div>



                </div>

            </div>
        </div >
    );
};

export default Cards;