import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

function Contacts() {
  return (
    <Content>
      <li>
        <a href='https://github.com/V1Rotate'>
          <span>
            <AiFillGithub />
          </span>
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/oleg-yadroshnikov-1556a821/'>
          <span>
            <AiFillLinkedin />
          </span>
        </a>
      </li>
      <li>
        <a href='https://twitter.com/Olegnskyahoo'>
          <span>
            <AiFillTwitterCircle />
          </span>
        </a>
      </li>
    </Content>
  );
}

export default Contacts;

const Content = styled.div`
  margin-bottom: -30px;
  border-left: 2px solid 60px;

  li {
    list-style: none;

    margin-left: 22vw;
    font-size: 55px;
    padding: 15px;
  }
  span:hover {
    border: 3px solid;
    border-radius: 60px;
    display: flex;
    font-size: 56px;
    background-color: #78ebed;
  }
`;
