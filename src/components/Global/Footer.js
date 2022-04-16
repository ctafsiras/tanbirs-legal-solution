import React from 'react';

const Footer = () => {
    const today=new Date()
    const year=today.getFullYear()
    return (
        <div>
            <p>Copyright Protected &copy; {year} | Tanbir's Legal Solution</p>
        </div>
    );
};

export default Footer;