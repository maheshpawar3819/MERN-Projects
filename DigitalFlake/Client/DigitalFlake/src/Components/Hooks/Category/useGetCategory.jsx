import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories, removeCategories } from "../../../store/categorySlice";
import { toast } from "react-toastify";

const useGetCategory = () => {
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
        dispatch(removeCategories(id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, [dispatch]);

  return { getCategory, deleteCategory };
};

export default useGetCategory;
