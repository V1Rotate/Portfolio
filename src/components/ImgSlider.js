import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='/images/imgSlider/myRp0.jpg' alt='myRPproject' />
      </Wrap>
      <Wrap>
        <img src='/images/imgSlider/myRp1.jpg' alt='myRPproject' />
      </Wrap>
      <Wrap>
        <img src='/images/imgSlider/myRp2.jpg' alt='myRPproject' />
      </Wrap>
      <Wrap>
        <img src='/images/imgSlider/clubHouse.jpg' alt='clubhouse-clone' />
      </Wrap>
      <Wrap>
        <img
          src='/images/imgSlider/disneyPlusClone.jpg'
          alt='disneyPlus-clone'
        />
      </Wrap>
      <Wrap>
        <img src='/images/imgSlider/linkedin0Clone.jpg' alt='linkedin-clone1' />
      </Wrap>
      <Wrap>
        <img src='/images/imgSlider/linkedinClone1.jpg' alt='linkedin-clone2' />
      </Wrap>
      <Wrap>
        <img src='/images/imgSlider/teslaClone.jpg' alt='teslaClone' />
      </Wrap>
      <Wrap>
        <img src='/images/imgSlider/world3d.jpg' alt='virtualWorld' />
      </Wrap>
      <Wrap>
        <img src='/images/imgSlider/olegsKitchen0.jpg' alt='olegsKitchen1' />
      </Wrap>
      <Wrap>
        <img
          src='/images/imgSlider/storeVisitorCounter.jpg'
          alt='visitorCounter'
        />
      </Wrap>
      <Wrap>
        <img src='/images/imgSlider/blackJackGame.jpg' alt='blackJackGame' />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  width: 33.3%;
  height: 62vh;
`;

const Wrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 14px;
    border: 4px solid rgba(33, 39, 46, 255);
    transition-duration: 200;
  }
`;
