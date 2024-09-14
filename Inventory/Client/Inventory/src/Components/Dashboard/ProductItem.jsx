import React from "react";

const ProductItem = ({ product, onEdit, onDelete }) => {
  return (
    <li className="flex justify-between items-center p-2 border-b">
      <div>
        <h3 className="font-semibold">{product.name}</h3>
        <p>SKU: {product.sku}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Category: {product.category}</p>
      </div>
      <div>
        <button
          className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
          onClick={() => onEdit(product)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => onDelete(product._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
