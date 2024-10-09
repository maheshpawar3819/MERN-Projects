import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../../../store/categorySlice";

const useGetCategory = () => {
  useEffect(() => {
    getCategory();
  }, []);
  const dispatch = useDispatch();
  const getCategory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/categories/categories`
      );

      dispatch(getCategories(response?.data));
    } catch (error) {
      console.error(`something worng not able to fetch data`, error);
    }
  };
};

export default useGetCategory;
