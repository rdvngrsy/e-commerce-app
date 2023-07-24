import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import Card from "../../components/Card/Card";
import { fetchProductList } from "../../api";
import { useQuery } from "react-query";

const SimpleSlider = ({product}) => {

  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {product.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
