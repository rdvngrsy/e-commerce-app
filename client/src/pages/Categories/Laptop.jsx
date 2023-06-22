import React from "react";
import Card from "../../components/Card/Card";
import { fetchProductList } from "../../api";
import { useQuery } from "react-query";

const Laptop = () => {
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
            item.category === 'Laptop' ? <Card key={item._id} item={item} /> : false
          
        ))}
      </div>
    </>
  );
};

export default Laptop;
