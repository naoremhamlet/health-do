import React from "react";
import styled from "styled-components";
import Sanathoi from "../assets/image/sanathoi.jpg";
import Sophina from "../assets/image/sophina.jpg";
import Sartaj from "../assets/image/sartaj.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import { styles } from "../constants/styles";

const data = [
  {
    name: "Sanathoi Thockchom",
    image: Sanathoi,
    comment: "I've been a fan of organic, healthy eating for years, and this website is now my go-to for finding the best options for my lifestyle."
  },
  {
    name: "Sophina Soubam",
    image: Sophina,
    comment: "The food provided is very good and helps me a lot in getting the lifestyle I want. I would love to recommend the food to everyone."
  },
  {
    name: "Sartaj Sheikh",
    image: Sartaj,
    comment: "One of the things I appreciate most about healthdo is their commitment to sourcing only the highest quality ingredients."
  }
]

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span>What</span> Customers Says
          </h1>
        </div>
        <div className="testimonials">
          {data.map(el => 
            <div className="testimonial">
              <div className="image">
                <img src={el.image} alt="" />
              </div>
              <p>
              <q>{el.comment} </q> <span> - {el.name} </span>
              </p>
            </div>
            
            )}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5vw;
  background: ${styles.background};
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
    ${TitleStyles};
    .title {
      position: absolute;
      top: -1rem;
      left: 25%;
      padding: 0 2rem;
      background-color: white;
    }
    .testimonials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6vw;
      margin-top: 3vw;
      .testimonial {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p {
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          q {
            font-style: italic;
            font-size: 14px;
          }
          span {
            color: #1b7603;
          }
        }
        ${imageZoomEffect};
        .image {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 10rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      margin: 0;
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
`;
