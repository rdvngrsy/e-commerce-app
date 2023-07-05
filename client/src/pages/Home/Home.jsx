import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import { fetchProductList } from "../../api";
import { useQuery } from "react-query";
import Card from "../../components/Card/Card";
import SimpleSlider from "../../components/ReactSlider/SimpleSlider";

const Home = () => {
  const { isLoading, error, data } = useQuery("product", () =>
    fetchProductList()
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  
 
  const slides = [
    {
      id: 1,
      title: "Iphone 14",
      subtitle: "Pro max",
      description: "Praesent ac sem eget est.",
      image: data[1].photos[1],
    },
    {
      id: 1,
      title: "Iphone 14",
      subtitle: "Pro max",
      description: "Praesent ac sem eget est.",
      image: data[1].photos[0],
    },
    {
      id: 2,
      title: "Second",
      subtitle: "slide",
      description: "Praesent ac sem eget est.",
      image: data[0].photos[0],
    },
    {
      id: 3,
      title: "Third",
      subtitle: "slide",
      description: "Praesent ac sem eget est.",
      image: data[0].photos[1],
    },
    {
      id: 4,
      title: "Fourty",
      subtitle: "slide",
      description: "Praesent ac sem eget est.",
      image: data[2].photos[0],
    },
    {
      id: 5,
      title: "Fifty",
      subtitle: "slide",
      description: "Praesent ac sem eget est.",
      image: data[2].photos[1],
    },
  ];

  return (
    <>
      <div className="flex w-full justify-center drop-shadow-commerce-carousel">
        <HomeSlider slides={slides} />
      </div>
      <div className="container grid grid-cols-1 ml-4 xs:mx-auto">
        <h1 className="mb-5 text-3xl font-oswald tracking-wide">Super Price, Super Offer</h1>
        <div className="">
          <SimpleSlider/>
        </div>
      </div>


      <h1 className="flex h-screen items-center justify-center text-6xl">
        HOME
      </h1>
      <h1 className="flex h-screen items-center justify-center text-6xl">
        HOME
      </h1>
      <h1 className="flex h-screen items-center justify-center text-6xl">
        HOME
      </h1>
      <h1 className="flex h-screen items-center justify-center text-6xl">
        HOME
      </h1>
      <h1 className="flex h-screen items-center justify-center text-6xl">
        HOME
      </h1>
      <h1 className="flex h-screen items-center justify-center text-6xl">
        HOME
      </h1>
    </>
  );
};

export default Home;
