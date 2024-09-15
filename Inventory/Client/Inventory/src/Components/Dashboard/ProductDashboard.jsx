import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const ProductDashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleClearSelection = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto p-4">
      <ProductForm
        selectedProduct={selectedProduct}
        onProductSubmit={handleClearSelection} // Refresh the product list
        clearSelection={handleClearSelection}
      />
      <ProductList onEdit={handleEditProduct} />
    </div>
  );
};

export default ProductDashboard;
