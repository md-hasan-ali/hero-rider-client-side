import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './banner.css'

const Banner = () => {
    return (
        <div className='banner-area'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="ragistration-button">
                            <Link to='/rider'>
                                <button className='rider'>Ragistration as a Rider</button>
                            </Link>
                            <Link to='/driving'>
                                <button className='driving-lesson'>Ragistration as a Driving Lesson</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;