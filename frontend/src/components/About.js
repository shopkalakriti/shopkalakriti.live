import React from 'react';
import styled from 'styled-components';
import aboutImg from '../assets/images/about-img.jpg';

const About = () => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <img src={aboutImg} alt="about-image" />
        <article>
          <div className="title">
            <h2>about us</h2>
            <div className="underline"></div>
          </div>
          <p>
            <strong>KalaKriti</strong> is an E-commerce platform that seeks to
            improve the online market for small-town and rural handicrafts
            companies. By offering a shared platform for the production,
            marketing, and sale of high-quality handicrafts and products, this
            application seeks to promote the Indian handicraft industry
            globally.
            <br />
            India's artisan legacy is both real and intangible, and when
            combined with its regional distinctiveness, it gives the nation a
            competitive worldwide advantage. With the correct assistance and a
            conducive business environment, the Indian craft market has the
            potential to grow to be a billion-dollar industry. Access to new
            markets will be increased by creating a systematic strategy that
            fosters the intrinsic worth of craft skills and creates
            opportunities for product design and manufacturing. In addition, as
            the industry develops and receives more traction, leveraging
            e-commerce for online visibility and operational efficiencies will
            show to be a crucial success factor.
          </p>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  .section-center {
    display: grid;
    place-items: center;
    gap: 4rem;
    img {
      width: 100%;
      display: block;
      border-radius: var(--radius);
      height: 500px;
      object-fit: contain;
    }
    p {
      line-height: 2;
      max-width: 45em;
      margin: 0 auto;
      margin-top: 2rem;
      color: var(--clr-grey-5);
      text-transform: normal;
    }
    .title {
      text-align: left;
    }
    .underline {
      margin-left: 0;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1280px) {
    padding-top: 12rem;
  }
`;

export default About;
