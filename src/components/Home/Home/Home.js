import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

import Slide from '../Slide/Slide';
import Other from './Other/Other';






const Home = () => {


    return (
        <div>


            <div><Slide></Slide></div>

            <div><Other></Other></div>

        </div>
    );
};

export default Home;