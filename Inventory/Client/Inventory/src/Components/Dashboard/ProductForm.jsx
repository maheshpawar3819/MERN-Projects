import React, { useState, useEffect } from "react";

const ProductForm = ({ selectedProduct, onProductSubmit, clearSelection }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    category: "",
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData({
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: selectedProduct.quantity,
        category: selectedProduct.category,
      });
    } else {
      setFormData({
        name: "",
        price: "",
        quantity: "",
        category: "",
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data:", formData); // Log the data being sent

    // Validate all required fields are present
    const { name, price, quantity, category } = formData;
    if (!name  || !price || !quantity || !category) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is okay (status in the range 200-299)
      if (!response.ok) {
        const errorData = await response.json(); // Try to get error details
        console.error("Error response:", errorData);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Assuming a successful response
      onProductSubmit(); // Refresh product list
      clearSelection(); // Clear form
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <form className="bg-white p-4 rounded shadow mt-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">
        {selectedProduct ? "Edit Product" : "Add Product"}
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="border rounded w-full p-2 mb-2"
      />
      
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
        className="border rounded w-full p-2 mb-2"
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        required
        className="border rounded w-full p-2 mb-2"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
        className="border rounded w-full p-2 mb-4"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {selectedProduct ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
};

export default ProductForm;
