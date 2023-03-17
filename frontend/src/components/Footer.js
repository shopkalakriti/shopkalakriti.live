import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  return (
    <Wrapper>
      <p>
        Copyright &copy;{new Date().getFullYear()}
        <span> KalaKriti</span>
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-6);
  }
  p {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;
