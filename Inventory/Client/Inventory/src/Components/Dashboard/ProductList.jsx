import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/products"); // Adjust the API endpoint as needed
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/products${id}`, {
        method: "DELETE",
      });
      fetchProducts(); // Refresh product list after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">Product List</h2>
      <ul>
        {products && products.map((product) => (
          <ProductItem
            key={product._id}
            product={product}
            onEdit={onEdit}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
