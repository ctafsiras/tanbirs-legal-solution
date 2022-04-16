import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import chamber from '../../images/banner/law-chember.jpg'
import justice from '../../images/banner/law-justice.jpg'
import books from '../../images/banner/lawyer-books.jpg'


const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={chamber}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Law Chamber</h3>
          <p>Chamber is the first address of a lawyer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={books}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Law Books</h3>
          <p>A lawyer always a student.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={justice}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>The Sign of Justice</h3>
          <p>The ultimate goal of a lawyer is justice.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;