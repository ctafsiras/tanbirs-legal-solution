import React from 'react';
import developer from '../../images/SI_20211227_033648.jpg'

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <div className='d-md-flex justify-content-evenly d-block  align-items-center'>
                <div className='order-2 order-md-1 text-start p-4'>
                    <h2>Chowdhury Tafsir Ahmed Siddiki</h2>
                    <h4>Programmer | Web Developer</h4>
                    <p>Hey there, I am Tafsir Ahmed. I started my journey of programming from my childhood. I worked in different places for different people. </p>
                </div>
                <div className='order-1 order-md-2'> <img className='img-fluid' src={developer} alt="" /></div>
            </div>
        </div>
    );
};

export default About;