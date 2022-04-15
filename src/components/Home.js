import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title='Oleg Yadroshnikov'
        anchor='welcome'
        description='Junior React Developer with an extensive Mechanical Engineering and Technical Sales background '
        backgroundImg='section1.jpg'
      />
      <Section
        title='About Me'
        anchor='about'
        description='I would be happy to discuss my professional experience and credentials in details...'
        backgroundImg='section2.jpg'
      />
      <Section
        title='My Projects'
        anchor='projects'
        description='Please review my GitHub profile for details'
        backgroundImg='section3.jpg'
      />
      <Section
        title='Contacts'
        anchor='contacts'
        description='Please feel free to contact me with any questions'
        backgroundImg='section4.jpg'
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background-color: lightblue;
`;
