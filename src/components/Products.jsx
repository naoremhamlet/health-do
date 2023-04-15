import React from "react";
import styled from "styled-components";
import product1 from "../assets/image/item1.png";
import product2 from "../assets/image/item2.png";
import product3 from "../assets/image/item3.png";
import product4 from "../assets/image/item5.png";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import { styles } from "../constants/styles";

import SwiperCore, {  Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination]);


export default function Products() {
  const data = [
    {
      image: product1,
      name: "Chicken Tortilla",
      price: "₹220",
      ingredient: "blackened chicken, tomato, raw carrot, cilantro, tortilla chips, cheese, warm quinoa, baby spinach, hot sauce, lime cilantro chilli vinaigrette"
    },
    {
      image: product2,
      name: "Harvest Bowl",
      price: "₹220",
      ingredient: "roasted chicken, roasted sweet potato, apple, cheese, roasted almond, warm wild rice, shredded kale, balsamic vinaigrette"
    },
    {
      image: product3,
      name: "Avocado Green Bowl",
      price: "₹220",
      ingredient: "roasted chicken, avocado, tomato, red onion, shredded cabbage, tortilla chips, spring mix, chopped romaine, lime squeeze, lime cilantro chilli vinaigrette"
    },

    {
      image: product4,
      name: "Garden Cobb",
      price: "₹160",
      ingredient: "avocado, hard boiled egg, roasted sweet potato, tomato, red onion, cheese, roasted almond, spring mix, chopped romaine, balsamic vinaigrette"
    },
  ];
  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Favourite</span> All the time!
        </h1>
      </div>
      
      <div className="products desktop">
          {data.map((product) => {
            return (
              <div className="product">
                <div className="image">
                  <img src={product.image} alt="" />
                </div>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <p>{product.ingredient}</p>
                <button>Buy Now</button>
              </div>
            );
          })}
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        // pagination={true}
        navigation={true}
        className="products mobile"
      >
          {data.map((product) => {
            return (
              <SwiperSlide className="product">
                <div className="image">
                  <img src={product.image} alt="" />
                </div>
                <h2>{product.name}</h2>
                <h3>{product.price}</h3>
                <p>{product.ingredient}</p>
                <button>Buy Now</button>
              </SwiperSlide>
            );
          })}

        </Swiper>

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
          width: 20rem;
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
        background: ${styles.background};
        text-transform: uppercase;
        &:hover {
          background: ${styles.reversebackground};
        }
      }
    }
  }

  .products.mobile {
    display: none;
  }
  .products.desktop {
    display: flex;
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    .products.mobile {
      display: flex;
    }
    .products.desktop {
      display: none;
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
