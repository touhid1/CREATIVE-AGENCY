import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import work1 from '../../../images/carousel-1.png';
import work2 from '../../../images/carousel-2.png';
import work3 from '../../../images/carousel-3.png';
import work4 from '../../../images/carousel-4.png';
import work5 from '../../../images/carousel-5.png';

import './Works.css';

const works = [
    {
        img: work1,
        interval: 1000
    },
    {
        img: work2,
        interval: 500
    },
    {
        img: work3,
        interval: 500
    },
    {
        img: work4,
        interval: 500
    },
    {
        img: work5,
        interval: 500
    },
]
const Works = () => {
    return (
        <div className="my-carousel my-5 w-100 text-center">
            <h2 className='text-light'>Here are some of <span style={{color: '#7AB259'}}>our works</span></h2>
            <Carousel className='w-75 m-auto'>
                {
                    works.map((work, idx) => <Carousel.Item key={idx} interval={work.interval}>
                        <img
                            className="carousel-img-height d-block w-50 mx-auto my-5 img-fluid"
                            src={work.img}
                            alt=""
                        />
                    </Carousel.Item>)
                }
            </Carousel>
        </div>
    );
};

export default Works;