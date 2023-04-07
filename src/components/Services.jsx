import React from "react";
import styled from "styled-components";
import Organic from "../assets/icon/organic.svg";
import Delivery from "../assets/icon/delivery.svg";
import Custom from "../assets/icon/custom.svg";
import { TitleStyles } from "./ReusableStyles";

const data = [
  {
    name:"organic",
    image: Organic,
    desc:"We're committed to sourcing the highest quality organic ingredients and working with local farmers and producers whenever possible."
  },
  {
    name:"delivery",
    image: Delivery,
    desc:"We understand that your time is valuable, which is why we work tirelessly to ensure that your orders are delivered to you in a timely and reliable manner."
  },
  {
    name:"custom",
    image: Custom,
    desc:"We are a team of food enthusiasts who are passionate about creating delicious, healthy meals that you can customize to your liking."
  },
]

export default function Services() {
  return (
    <Section id="services">
      <div className="title">
        <h1 className="heading">What we do?</h1>
        <p>
        We are a team of passionate food lovers who are dedicated to promoting health and wellness through delicious, nutrient-dense meals made from the highest-quality ingredients.
        {/* We understand that everyone has different dietary needs and preferences, which is why we offer a wide range of options to suit all lifestyles, from vegetarian and vegan to paleo and gluten-free. Whether you're looking for a quick and healthy meal on-the-go or a fully customizable meal plan, we've got you covered. */}

        </p>
      </div>
      <div className="services">
        {data.map(el => <div className="service">
          <img src={el.image} alt="" />
          <p> {el.desc} </p>
        </div>)}
        {/* <div className="service yellow">
          <img src={Services1} alt="" />
          <p>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industry's
          </p>
        </div>
        <div className="service">
          <img src={Services3} alt="" />
          <p>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industry's
          </p>
        </div> */}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #1b7603;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
    .heading {
      button {
        background-color: #f9c74f;
        &:hover {
          background-color: #1b7603;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
