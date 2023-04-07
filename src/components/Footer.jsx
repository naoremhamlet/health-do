import React from "react";
import styled from "styled-components";
import logo from "../assets/icon/logo.svg";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
export default function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          <img src={logo} alt="" />
          <p>
          Filling the gap of healthy fast food in the market.
          </p>
          <ul>
            <li>
              <a href="https://www.instagram.com/health_do/" target="_blank">
                <AiFillInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Healthdo.in" target="_blank">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.google.com" target="_blank">
                <GrLinkedinOption />
              </a>
            </li>
            <li>
              <a href="https://www.google.com" target="_blank">
                <BsTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="about container">
          <div className="title">
            <h3>About Us</h3>
          </div>
          <p>
          We work to promote a healthy community through real food but educating the importance
           of healthy eating and provide easy access to healthy food.
          </p>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Contact Us</h3>
          </div>
          <p><a href="tel:+919774430099">+91 97744 30099</a></p>
          <p><a href="mailto:healthdo123@gmail.com"> healthdo123@gmail.com </a></p>
          {/* <p>@health_do</p> */}
          <p>Nongmeibung, Ananda School Road, Imphal, 795005</p>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2>
          Copyright &copy; 2023 <span>health do!</span>
        </h2>
      </LowerFooter>
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background: linear-gradient(to right, #1b7603, #13b908);
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
    a {
      text-decoration: none;
      color: #ffff;
    }
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #1b7603;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    width: 10vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }

    img {
      width: 70px;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
        align-self: center;
        margin: 1rem;
      }
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;
  h2 {
    span {
      color: #1b7603;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;
