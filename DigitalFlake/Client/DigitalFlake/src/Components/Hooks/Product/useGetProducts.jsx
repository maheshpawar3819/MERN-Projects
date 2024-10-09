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
};

export default useGetProducts;
