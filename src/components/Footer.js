import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Footerp>
      <p>
        <span>&copy;</span> Oleg Yadroshnikov, 2022
      </p>
    </Footerp>
  );
}

export default Footer;

const Footerp = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 4px rgba(34, 60, 80, 0.2);
  margin: 10px;
  font-weight: 400;
  height: 26px;
  padding: 3px;
  background-color: #efead7;
  span {
    padding: 2px;
  }
`;
