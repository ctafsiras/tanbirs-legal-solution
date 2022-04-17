import React from 'react';
import developer from '../../images/SI_20211227_033648.jpg'

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <div className='d-md-flex justify-content-evenly d-block  align-items-center'>
                <div style={{maxWidth: '600px'}} className='order-2 order-md-1 text-start p-4'>
                    <h2>Chowdhury Tafsir Ahmed Siddiki</h2>
                    <h4>Programmer | Web Developer</h4>
                    <p>Hey there, I am Tafsir Ahmed. I started my journey of programming from my childhood. I worked in different places for different people. after these years I started my journey of Web Development with Programming Hero. Now finally I am being ready to work for a dedicated company and upgrade my skill to the next level.</p>
                </div>
                <div style={{maxWidth: '400px'}} className='order-1 order-md-2'> <img className='img-fluid' src={developer} alt="" /></div>
            </div>
        </div>
    );
};

export default About;