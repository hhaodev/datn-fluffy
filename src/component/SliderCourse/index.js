import '../SliderCourse/index.css'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../../assets/images/slider9.jpg'
import slider2 from '../../assets/images/slider7.jpg'
import slider3 from '../../assets/images/slider8.jpg'
import slider4 from '../../assets/images/slider5.jpg'

function SliderCourse() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 600,
    };
    return (
        <Slider {...settings}>
            <div className='slider'>
                <img src={ slider1} className='slider_images'></img>
            </div>
            <div className='slider'>
                <img src={ slider2} className='slider_images'></img>
            </div>
            <div className='slider'>
                <img src={ slider3} className='slider_images'></img>
            </div>
            <div className='slider'>
                <img src={ slider4} className='slider_images'></img>
            </div>
        </Slider>
    );
}

export default SliderCourse;