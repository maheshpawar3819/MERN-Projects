import React from "react";

const InventoryList = () => {
  const items = [
    { id: 1, name: "Product A", quantity: 50, price: 20.0 },
    { id: 2, name: "Product B", quantity: 30, price: 15.0 },
    { id: 3, name: "Product C", quantity: 20, price: 25.0 },
  ];
  return (
    <div>
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Inventory List</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="border px-4 py-2">Product</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2">${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryList;
