import React from "react";
import { fetchProductList } from "../../api";
import { useInfiniteQuery } from "react-query";
import Card from "../../components/Card/Card";
import { Spinner } from "@material-tailwind/react";

const AllProducts = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["product"],
    queryFn: fetchProductList,
    getNextPageParam: (lastPage, pages) => {
      const morePagesExist = lastPage?.length === 10;

      if (!morePagesExist) {
        return;
      }

      return pages.length + 1;
    },
  });

  if (status === "loading")
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner color="teal" className="h-12 w-12" />
      </div>
    );

  if (status === "error") return "An error has occurred: " + error.message;

  return (
    <>
      <div className="container relative mt-5 grid grid-cols-1 justify-items-center gap-y-10 sm:grid-cols-3 md:grid-cols-4 ">
        {/* {data.map((item) => (
          <Card key={item._id} item={item} />
        ))} */}
        {data.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group.map((item) => (
              <Card key={item._id} item={item} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center py-10">
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          type="button"
          className="btn-green group relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap"
        >
          <div className="relative rounded-md bg-white px-5 py-1.5 font-oswald text-base font-bold transition duration-200 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
            {isFetchingNextPage ? (
              <Spinner color="teal" />
            ) : hasNextPage ? (
              "Load More"
            ) : (
              "Nothing more to load"
            )}
          </div>
        </button>
      </div>

      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

export default AllProducts;
