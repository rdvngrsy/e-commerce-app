import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProduct } from "../../api";
import { Spinner } from "@material-tailwind/react";
import ProductDetailSlider from "../../components/ProductDetailSlider/ProductDetailSlider";

const ProductDetail = () => {
  const { product_id } = useParams();
  const { isLoading, error, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) return (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner color="teal" className="h-12 w-12" /> 
    </div>
  );

  if (error) return "An error has occurred: " + error.message;

  console.log(data);
  return (
    <div>
      <section className="font-poppins white:bg-gray-800 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="-mx-4 mb-24 flex flex-wrap">
            <ProductDetailSlider/>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6 mt-5">
                  <span className="white:bg-gray-700 white:text-gray-200 rounded-xl font-oswald bg-commerce-mint-2 px-2.5 py-1 text-sm text-commerce-teal">
                    Opportunity Product
                  </span>
                  <h2 className="white:text-gray-300 mb-6 mt-6 max-w-xl font-oswald text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl">
                    {data.title}
                  </h2>
                  <div className="mb-6 flex flex-wrap items-center">
                    <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 font-oswald text-xs font-bold">
                      5.0
                    </span>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                  <p className="white:text-gray-400 inline-block text-2xl font-oswald font-semibold text-gray-700 ">
                    <span>{data.price}$</span>
                    <span className="white:text-gray-400 ml-3 text-base font-normal text-gray-500 line-through">
                      {data.previous_price}$
                    </span>
                  </p>
                </div>
                <div className="mb-6">
                  <h2 className="white:text-gray-400 font-oswald mb-2 text-lg font-bold text-gray-700">
                    System Specs :
                  </h2>
                  <div className="white:bg-gray-700 rounded-xl bg-gray-100">
                    <div className="p-3 lg:p-3 ">
                      <div className="white:bg-gray-800 rounded-xl bg-gray-50 p-2 lg:p-2">
                        <div className="flex flex-wrap font-oswald font-light  gap-x-10 gap-y-4 tracking-wider leading-snug">
                          <p>{data.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="white:border-gray-700 mb-6 border-b border-t border-gray-200 py-6">
                  <span className="white:text-gray-400 text-base font-oswald text-gray-600">
                    In Stock
                  </span>
                  <p className="white:text-teal-200 mt-2 font-oswald font-normal text-sm text-teal-500">
                    Ships from Türkiye.
                    <span className="white:text-gray-400 text-gray-600">
                      {` Most customers receive within 3-31 days.`}
                    </span>
                  </p>
                </div>
                <div className="mb-6 "></div>
                <div className="mb-6 flex flex-wrap items-center">
                  <div className="mb-4 mr-4 lg:mb-0">
                    <div className="w-28">
                      <div className="relative flex h-10 w-full flex-row rounded-lg bg-transparent">
                        <button className="white:border-gray-700 white:hover:bg-gray-700 white:text-gray-400 white:bg-gray-900 h-full w-20 cursor-pointer rounded-l border-r bg-gray-100 text-gray-600 outline-none hover:bg-gray-300 hover:text-gray-700">
                          <span className="m-auto text-2xl font-thin">-</span>
                        </button>
                        <input
                          type="number"
                          className="white:text-gray-400 white:placeholder-gray-400 white:bg-gray-900 text-md flex w-full items-center bg-gray-100 text-center font-semibold text-gray-700 placeholder-gray-700 outline-none hover:text-black focus:outline-none"
                          placeholder="1"
                        />
                        <button className="white:border-gray-700 white:hover:bg-gray-700 white:text-gray-400 white:bg-gray-900 h-full w-20 cursor-pointer rounded-r border-l bg-gray-100 text-gray-600 outline-none hover:bg-gray-300 hover:text-gray-700">
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 lg:mb-0">
                    <button className="white:text-gray-200 white:border-teal-600 white:bg-teal-600 white:hover:bg-teal-500 white:hover:border-teal-500 white:hover:text-gray-100 mr-4 flex h-10 w-full items-center justify-center border border-gray-300 p-2 text-gray-700 hover:border-teal-600 hover:bg-teal-600 hover:text-gray-50 lg:w-11">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className=" bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                      </svg>
                    </button>
                  </div>
                    <a
                      href="#"
                      className="white:hover:bg-gray-900 font-oswald white:text-gray-400 white:border-gray-700 white:bg-gray-700 w-full rounded-xl border border-teal-600 bg-teal-100 px-4 py-3 text-center text-teal-600 hover:bg-commerce-teal hover:text-gray-100 lg:w-1/2"
                    >
                      Add to cart
                    </a>
                </div>
                <div className="mb-6 flex gap-4">
                  <a
                    href="#"
                    className="white:hover:border-gray-900 font-oswald white:text-gray-400 white:bg-gray-700 white:hover:bg-gray-700 w-full rounded-xl border border-teal-600 bg-teal-100 px-4 py-3 text-center text-teal-600 hover:bg-commerce-teal hover:text-gray-100"
                  >
                    Buy now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
