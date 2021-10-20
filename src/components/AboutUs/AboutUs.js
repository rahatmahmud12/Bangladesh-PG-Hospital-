import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <p>hello</p>

            <div className="container tw-mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
                    <div className="max-h-96 md:h-screen">
                        <img className="w-screen h-screen object-cover object-top" src="https://i.ibb.co/gzTdprt/av-imagen.jpg" alt="" />
                    </div>
                    <div className="flex bg-gray-100  ps-5">
                        <div className="mb-auto mt-auto max-w-lg">
                            <h1 className="text-4xl uppercase">Bangladesh PG HosPital</h1>
                            <p className="tw-font-semibold mb-5 pt-2">Medical and Care Service</p>
                            <p>The leading source for trustworthy and timely health and medical news and information. Providing credible health information, supportive community.</p>

                            <h4 className="pt-3 text-2xl">PG Hospital, Shahbagh Rd, Dhaka 1000</h4>
                            <button className="bg-black rounded-md py-3 px-7 mt-6 px-3 text-white">Email Us</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;