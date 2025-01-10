import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getSubCateogries,
  removeSubCategories,
} from "../../../store/categorySlice";
import { toast } from "react-toastify";

const useSubCategories = () => {
  const dispatch = useDispatch();

  const getSubCategory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/subcategory/subcategories`
      );
      dispatch(getSubCateogries(response?.data?.subCategoreis));
    } catch (error) {
      console.error(`something wrong not able to fetch data`, error);
    }
  };

  const deleteSubcategory = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/subcategory/delete/${id}`
      );
      if (response.status >= 200) {
        toast.success(response?.data?.message);
        dispatch(removeSubCategories(id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubCategory();
  }, [dispatch]);

  return { getSubCategory, deleteSubcategory };
};

export default useSubCategories;
