import React from "react";
import styled from "styled-components";
import product1 from "../assets/image/item1.png";
import product2 from "../assets/image/item2.png";
import product3 from "../assets/image/item3.png";
import product4 from "../assets/image/item5.png";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Products() {
  const data = [
    {
      image: product1,
      name: "hie",
      price: "$22.4/pcs",
    },
    {
      image: product2,
      name: "Toasted Bread",
      price: "$5.5/pcs",
    },
    {
      image: product3,
      name: "Egg Sandwich",
      price: "$8/pcs",
    },

    {
      image: product4,
      name: "Raspberry Cake",
      price: "$12.5/pcs",
    },
  ];
  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Favourite</span> All the time!
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>He Printing and Typesetting the industry. Lorem Ipsum has</p>
              <button>Buy Now</button>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #1b7603;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: linear-gradient(to right, #1b7603, #13b908);
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(to right, #13b908, #1b7603);
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
