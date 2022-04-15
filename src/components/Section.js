import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import Contacts from './Contacts';
import ImgSlider from './ImgSlider';

function Section({ title, description, backgroundImg, anchor }) {
  const isLastPage = title === 'Contacts';
  const isMiddlePage = title === 'My Projects';

  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1 id={anchor}>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      {isMiddlePage && <ImgSlider />}
      {isLastPage && <Contacts />}
      <Buttons>
        {!isLastPage && <DownArrow src='../../images/down-arrow.svg' />}
      </Buttons>

      {isLastPage && <Footer />}
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; //horizontal
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 8vh;
  text-align: center;
`;

const DownArrow = styled.img`
  height: 50px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
