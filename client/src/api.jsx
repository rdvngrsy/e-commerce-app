import axios from "axios";

export const fetchProductListForAllCategories = async () => {
  const { data } = await axios.get(`http://localhost:4000/product`);
  return data;
};

export const fetchProductList = async ({ pageParam = 0 }) => {
  const { data } = await axios.get(
    `http://localhost:4000/product?page=${pageParam}`
  );
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(`http://localhost:4000/product/${id}`);
  return data;
};
