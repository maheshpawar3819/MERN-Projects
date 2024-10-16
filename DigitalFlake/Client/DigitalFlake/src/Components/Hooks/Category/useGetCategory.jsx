import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../../../store/categorySlice";
import { toast } from "react-toastify";

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

  const deleteCategory = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/categories/categories/${id}`
      );
      console.log(response);
      if (response.statusText === "OK") {
        toast.success(response?.data?.message);
        getCategory();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { getCategory, deleteCategory };
};

export default useGetCategory;
