import React from "react";
import HeroImg from "../assets/images/hero.png";
import Button from "./Button";
import PText from "./PText";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";
import styled from "styled-components";

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &__heading {
      font-size: 2rem;
      margin-bottom: -4rem;
      position: relative;
      span {
        display: inline-block;
        width: 100%;
      }
    }
    &__name {
      font-family: "Montserrat SemiBold";
      font-size: 7rem;
      color: var(--white);
    }
    &__img {
      max-width: 900px;
      width: 100%;
      height: 600px;
      margin: 0 auto;
      border: 2px solid var(--gray-1);
    }
    &__info {
      margin-top: -18rem;
    }
    &__socials,
    &__scrollDown {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      position: absolute;
      bottom: 20px;
      width: 50px;
    }
    &__socials {
      left: 50px;
    }
    &__scrollDown {
      right: 50px;
    }
    &__social-indicator,
    &__scrollDown {
      width: 50px;
      p {
        font-size: 1.6rem;
        transform: translateY(-70px) rotate(90deg);
        letter-spacing: 0.7rem;
        text-transform: uppercase;
      }
      img {
        max-height: 45px;
        width: 16px;
        margin: 0 auto;
        object-fit: contain;
      }
    }
    &__scrollDown {
      img {
        max-height: 70px;
      }
    }
    &__social-text {
      ul {
        li {
          margin-bottom: 1rem;
        }
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
      &__heading {
        font-size: 1.4rem;
        margin-bottom: -3rem;
      }
      &__name {
        font-size: 4.5rem;
      }
      &__img {
        height: 300px;
      }
      &__info {
        margin-top: 3rem;
      }
      &__socials {
        left: 0px;
        bottom: -15%;
        width: 20px;
      }
      &__social-indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      &__social-text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
      &__scrollDown {
        right: 0;
        width: 20px;
        gap: 1rem;
        p {
          font-size: 1.3rem;
        }
      }
    }
  }
`;

function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, My name is</span>
            <span className="hero__name">Khanh Nguyen</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              I am working as a freelance web designer and developer for 1
              years. I love to design and make new web experiences for the
              people.
            </PText>
            <Button btnLink="/projects" btnText="see my work" />
          </div>
          <div className="hero__socials">
            <div className="hero__social-indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="social media arrow"></img>
            </div>
            <div className="hero__social-text">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/bao.khanh.52493/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/khanh-nguyen-441123198/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LI
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt=""></img>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

export default HeroSection;
