import React from "react";
import SideBar from "./SideBar";
import InventoryList from "./InventoryList";

const Dashboard = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <main className="p-4 bg-gray-100 flex-1">
          <h1 className="text-2xl font-bold mb-4">Inventory Dashboard</h1>
          <InventoryList />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
