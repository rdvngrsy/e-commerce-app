import React from "react";
import { fetchProductList } from "../../api";
import { useQuery } from "react-query";
import Card from "../../components/Card/Card";

const MobilePhones = () => {
  const { isLoading, error, data } = useQuery("product", () =>
    fetchProductList()
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data);

  return (
    <>
      <div className="mt-5 grid grid-cols-1 justify-items-center gap-y-2 sm:grid-cols-3 md:grid-cols-5 ">
        {data.map((item) => (
            item.category === 'Mobile Phone' ? <Card key={item._id} item={item} /> : false
          
        ))}
      </div>
    </>
  );
};

export default MobilePhones;
