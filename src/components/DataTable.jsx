import React, { useState } from "react";
import {
  FaSortUp,
  FaSortDown,
  FaAngleLeft,
  FaAngleRight,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";

const DataTable = ({
  headers,
  rows,
  actions,
  defaultRowsPerPage = 5,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  // Sorting Function
  const handleSort = (index) => {
    const order = sortedColumn === index && sortOrder === "asc" ? "desc" : "asc";
    setSortedColumn(index);
    setSortOrder(order);

    rows.sort((a, b) => {
      if (a[index] < b[index]) return order === "asc" ? -1 : 1;
      if (a[index] > b[index]) return order === "asc" ? 1 : -1;
      return 0;
    });
  };

  // Search Filter
  const filteredRows = rows.filter((row) =>
    row.some((cell) => cell.toString().toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedRows = filteredRows.slice(startIndex, startIndex + rowsPerPage);

  // Handle Page Changes
  const goToPage = (page) => setCurrentPage(page);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const firstPage = () => setCurrentPage(1);
  const lastPage = () => setCurrentPage(totalPages);

  return (
    <div className="p-1">
      {/* Search & Rows Per Page Controls */}
      <div className="flex justify-between mb-3">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 p-2 border border-gray-600 rounded-md bg-gray-800 text-white"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div>
          <label className="text-gray-300 mr-2">Rows per page:</label>
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="p-2 mr-1 border border-gray-600 rounded-md bg-gray-800 text-white"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>

      {/* Table Container */}
      <div className="w-full max-h-[350px] overflow-auto rounded-lg border border-gray-700 custom-scrollbar">
        <table className="w-full border-collapse bg-gray-800 shadow-md rounded-lg">
          {/* Table Header */}
          <thead className="sticky top-0 bg-gray-700 z-10">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="p-2 text-left text-lg font-semibold text-gray-300 cursor-pointer"
                  onClick={() => handleSort(index)}
                >
                  {header}
                  {sortedColumn === index ? (
                    sortOrder === "asc" ? (
                      <FaSortUp className="inline-block" />
                    ) : (
                      <FaSortDown className="inline-block" />
                    )
                  ) : (
                    ""
                  )}
                </th>
              ))}
              {actions?.length > 0 && (
                <th className="p-2 text-left text-lg font-semibold text-gray-300">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {paginatedRows.length === 0 ? (
              <tr>
                <td
                  colSpan={headers.length + (actions?.length > 0 ? 1 : 0)}
                  className="p-4 text-center text-gray-400"
                >
                  No records found.
                </td>
              </tr>
            ) : (
              paginatedRows.map((row, rowIndex) => (
                <tr key={rowIndex} className="even:bg-gray-750 hover:bg-gray-900 transition-all">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="p-2 text-lg text-gray-200 border-t border-gray-700">
                      {cell}
                    </td>
                  ))}
                  {actions?.length > 0 && (
                    <td className="p-2 text-sm text-gray-200 border-t border-gray-700">
                      <div className="flex space-x-2">
                        {actions.map((action, actionIndex) => (
                          <button
                            key={actionIndex}
                            onClick={() => action.action(rowIndex)}
                            className={`px-2 py-1 rounded ${action.className}`}
                          >
                            {action.label}
                          </button>
                        ))}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-3">
          <button
            onClick={firstPage}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-700 text-white rounded"
          >
            <FaAnglesLeft />
          </button>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-700 text-white rounded"
          >
            <FaAngleLeft />
          </button>
          <span className="px-3 py-1 bg-gray-900 text-white rounded">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-700 text-white rounded"
          >
            <FaAngleRight />
          </button>
          <button
            onClick={lastPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-700 text-white rounded"
          >
            <FaAnglesRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
