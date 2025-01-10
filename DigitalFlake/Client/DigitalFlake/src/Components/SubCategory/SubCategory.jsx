import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSubCategories from "../Hooks/Subcategory/useSubCategories";
import { useSelector } from "react-redux";

const SubCategory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Custom hook contains combine logic of getting and deleting subCategories
  const { deleteSubcategory } = useSubCategories();

  // Get subCategories from Redux store
  const getSubCategories = useSelector(
    (store) => store?.category?.subCategory || []
  );

  // Filter subCategories based on search term
  const filteredData = getSubCategories.filter((subCategory) =>
    subCategory.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle page navigation
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="ml-72 mt-20 p-4">
        <div className="flex justify-between items-center mb-4">
          <button className="bg-[#662671] hover:bg-[#823c8f] text-white py-2 px-5 rounded-md">
            <Link to={"/subcategory/add"}>Add New</Link>
          </button>
          <p className="text-3xl font-bold font-mono">
            SubCategory <span className="text-purple-900">{totalItems}</span>
          </p>
          <input
            type="text"
            placeholder="Search subCategory..."
            className="p-2 border rounded-md w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table
          border="1"
          cellPadding="10"
          cellSpacing="0"
          className="w-full bg-white shadow-md rounded-lg overflow-hidden"
        >
          <thead className="bg-yellow-200 text-left">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">SubCategory Name</th>
              <th className="p-3">Image</th>
              <th className="p-3">Status</th>
              <th className="p-3">Category Name</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((ele) => {
                const { id, imageUrl, name, status } = ele;
                return (
                  <tr key={id} className="border-b hover:bg-gray-100">
                    <td className="p-3">{id}</td>
                    <td className="p-3">{name}</td>
                    <td className="p-3">
                      <img
                        src={imageUrl}
                        alt={name}
                        width="50"
                        height="50"
                        className="rounded-lg"
                      />
                    </td>
                    <td
                      className={`p-3 ${
                        status === "active"
                          ? "text-green-600"
                          : ele?.products.length > 0
                          ? "text-yellow-600" // If status is not active but has products
                          : "text-red-600"
                      }`}
                    >
                      {status}
                    </td>
                    <td className="p-3">{ele?.category?.name}</td>
                    <td className="p-3 flex space-x-2 mt-2">
                      <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        <Link to={`/subcategory/${id}`}> Edit</Link>
                      </button>
                      <button
                        className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                        onClick={() => deleteSubcategory(id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="p-3 text-center">
                  No subCategories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`mx-1 px-4 py-2 rounded-md ${
                    currentPage === page
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SubCategory;
