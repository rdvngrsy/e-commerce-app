import React from 'react'
import { fetchProductList } from "../../api";
import { useQuery } from "react-query";
import Card from "../../components/Card/Card";

const AllProducts = () => {
  const { isLoading, error, data } = useQuery("product", () =>
    fetchProductList()
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data);

  return (
    <>
      <div className="relative mt-5 grid grid-cols-1 justify-items-center gap-y-2 sm:grid-cols-3 md:grid-cols-5 ">
        {data.map((item) => (
            <Card key={item._id} item={item}/>
        ))}
      </div>
    </>
  );
}

export default AllProducts