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

  return (
    <>
      <div className="container mt-5 grid grid-cols-1 justify-items-center gap-y-10 sm:grid-cols-3 md:grid-cols-4 ">
        {data.map((item) =>
          item.category === "Mobile Phone" ? (
            <Card key={item._id} item={item} />
          ) : (
            false
          )
        )}
      </div>
    </>
  );
};

export default MobilePhones;
