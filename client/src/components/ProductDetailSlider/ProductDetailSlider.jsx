import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProduct } from "../../api";

const ProductDetailSlider = () => {
  const { product_id } = useParams();
  const { isLoading, error, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data.photos.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data.photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="mb-8 w-full px-4 md:mb-0 md:w-1/2">
      <div className="sticky top-0 overflow-hidden ">
        <div className="relative mb-6 lg:mb-10 lg:h-96">
          <a
            className="translate-1/2 absolute left-0 top-1/2 transform lg:ml-2"
            href="#"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-left white:text-teal-200 h-7 w-7 text-teal-500"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              ></path>
            </svg>
          </a>
          <img
            className="w-full object-contain lg:h-full"
            src={data.photos[currentImageIndex]}
            alt=""
          />
          <a
            className="translate-1/2 absolute right-0 top-1/2 transform lg:mr-2"
            href="#"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right white:text-teal-200 h-7 w-7 text-teal-500"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="-mx-2 hidden flex-wrap md:flex">
          {data.photos.map((photo, index) => (
            <div className="w-1/2 p-2 sm:w-1/4" key={index}>
              <a
                className="white:border-gray-700 white:hover:border-teal-300 block border border-gray-200 hover:border-teal-400"
                href="#"
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  className="w-full object-contain lg:h-28"
                  src={photo}
                  alt=""
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSlider;
