import React from 'react';
import './Other.css'

const Other = () => {
    return (
        <div>
            <div className="container py-3">




                <div className="carda">
                    <div className="row ">

                        <div className="col-md-7 px-3">
                            <div className="card-blocka px-6">
                                <h4 className="card-titlea text-2xl pb-2">Doing all the surgery with greatest technology of the time  </h4>
                                <p className="card-texta">
                                    A clean hospital ensures all biological hazards aren’t seeping into the air stream. The hotel housekeeping staff must roll soiled bedclothes away from their body before placing them in linen bins. Staff must also securely tie garbage bags without excess air in the bag so the air stays clean for patients.  If an air purifier is not there, you must install an air purifier or an air filter in the premises
                                </p>
                                <p className="card-text">Made for usage, commonly searched for. Fork, like and use it. Just move the carousel div above the col containing the text for left alignment of images</p>
                                <br />
                                <a href="#" className="mt-auto btn btn-primary  ">Read More</a>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div id="CarouselTest" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#CarouselTest" data-slide-to="0" className="active"></li>
                                    <li data-target="#CarouselTest" data-slide-to="1"></li>
                                    <li data-target="#CarouselTest" data-slide-to="2"></li>

                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block p-3" src="https://electronichealthreporter.com/wp-content/uploads/2020/06/9-Essential-Tips-for-Cleaning-and-Housekeeping-in-Hospitals.jpg?ezimgfmt=ng:webp/ngcb1" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block" src="https://picsum.photos/450/300?image=855" alt="" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block" src="https://picsum.photos/450/300?image=355" alt="" />
                                    </div>
                                    <a className="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </div>

            <div className="container">
                <div className="carda float-left">
                    <div className="row ">

                        <div className="col-sm-7">
                            <div className="card-blocka">

                                <p className="fs-4">Easygoing and Affordable</p><br />
                                <p>Very good for all kinds of people for their health treatment.</p>
                                <a href="#" className="btn btn-primary btn-sm">Read More</a>
                            </div>
                        </div>

                        <div className="col-sm-5">
                            <img className="d-block w-100" src="https://i.ibb.co/ZzgpSWk/Portrait-of-beautiful-mature-woman-doctor-holding-digital-tablet-and-looking-at-camera-Confident-fem.jpg" alt="" />
                        </div>
                    </div>
                </div>


                <div className="carda float-right pl-2">
                    <div className="row pl-2">
                        <div className="col-sm-5">
                            <img className="d-block w-100 pt-1" src="https://i.ibb.co/R0RpWCF/Portrait-Of-Mature-Male-Doctor-Wearing-White-Coat-Standing-In-Hospital-Corridor.jpg" alt="" />
                        </div>
                        <div className="col-sm-7">
                            <div className="card-blocka">

                                <p className="fs-5">Young and Experinced Doctors</p>
                                <p>Young and moderately experienced doctors who need to work shifts Studies pointed out.</p>
                                <br />
                                <a href="#" className="btn btn-primary btn-sm float-right">Read More</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <br />
            <br />

        </div>
    );
};

export default Other;