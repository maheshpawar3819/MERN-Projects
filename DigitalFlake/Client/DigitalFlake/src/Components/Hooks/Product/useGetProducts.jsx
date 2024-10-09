import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../../store/categorySlice";

const useGetProducts = () => {
  useEffect(() => {
    getProducts();
  }, []);
  const dispatch = useDispatch();
  const getProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/product/products`
      );
      dispatch(getProduct(response?.data));
    } catch (error) {
      console.error(`something worng not able to fetch data`, error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/product/delete/${id}`
      );
      if (response.status >= 200) {
        alert("product delete successfully");
        getProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { getProducts, deleteProduct };
};

export default useGetProducts;
