import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import { fetchProductListForAllCategories } from "../../api";
import { useQuery } from "react-query";
import SimpleSlider from "../../components/ReactSlider/SimpleSlider";
import { Spinner } from "@material-tailwind/react";

const Home = () => {
  const { isLoading, error, data } = useQuery("product", () =>
    fetchProductListForAllCategories()
  );

  if (isLoading) return (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner color="teal" className="h-12 w-12" /> 
    </div>
  );

  if (error) return "An error has occurred: " + error.message;

  const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
  const shuffleData = shuffle(data);
  

  const laptopProduct = data.filter((item) =>
    item.category === "Laptop" 
  );

  const tvProduct = data.filter((item) =>
    item.category === "Tv" 
  );

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
      <div className="container ml-4 grid grid-cols-1 xs:mx-auto">
        <h1 className="mb-5 font-oswald text-3xl tracking-wide">
          Super Price, Super Offer
        </h1>
        <div className="">
          <SimpleSlider product={shuffleData} />
        </div>
      </div>

      <div className="container ml-4 grid grid-cols-1 xs:mx-auto xs:mt-32">
        <h1 className="mb-5 font-oswald text-3xl tracking-wide">
          Super Laptop, Super Offer
        </h1>
        <div className="">
          <SimpleSlider product={laptopProduct} />
        </div>
      </div>

      <div className="container ml-4 grid grid-cols-1 xs:mx-auto xs:mt-32">
        <h1 className="mb-5 font-oswald text-3xl tracking-wide">
          Super Tv, Super Offer
        </h1>
        <div className="">
          <SimpleSlider product={tvProduct} />
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
