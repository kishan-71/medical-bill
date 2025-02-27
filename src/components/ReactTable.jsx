import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import Button from "./Button";

const Table = ({ headers, rows, actions }) => {
  // Define columns for TanStack Table
  const columns = React.useMemo(() => {
    const cols = headers.map((header, index) => ({
      header: header,
      accessorKey: `col${index}`, // Use a unique accessor for each column
    }));

    // Add actions column if actions are provided
    if (actions) {
      cols.push({
        header: "Actions",
        accessorKey: "actions",
        cell: ({ row }) => (
          <div className="flex space-x-2">
            {actions.map((action, actionIndex) => (
              <Button
                key={actionIndex}
                onClick={() => action.onClick(row.index)}
                className={action.className}
              >
                {action.label}
              </Button>
            ))}
          </div>
        ),
      });
    }

    return cols;
  }, [headers, actions]);

  // Transform rows into the format expected by TanStack Table
  const data = React.useMemo(() => {
    return rows.map((row) => {
      const rowData = {};
      row.forEach((cell, cellIndex) => {
        rowData[`col${cellIndex}`] = cell;
      });
      return rowData;
    });
  }, [rows]);

  // Use TanStack Table hooks
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: 5, // Set initial page size
      },
    },
  });

  return (
    <div className="w-full bg-gray-800 shadow-md rounded-lg overflow-hidden">
      {/* Search Input */}
      <div className="p-2">
        <input
          type="text"
          value={table.getState().globalFilter || ""}
          onChange={(e) => table.setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className="p-2 w-full bg-gray-700 text-gray-200 rounded-lg focus:outline-none"
        />
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-gray-700">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-2 text-left font-semibold text-gray-300"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="p-4 text-center text-lg text-gray-400"
              >
                No records found.
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-750 transition-all"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="p-3  text-gray-200 border-t border-gray-700"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="p-2 flex items-center justify-between bg-gray-700">
        <div className="flex space-x-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="p-2 bg-gray-600 text-gray-200 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="p-2 bg-gray-600 text-gray-200 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <div className="text-gray-300">
          Page{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </div>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
          className="p-2 bg-gray-600 text-gray-200 rounded-lg"
        >
          {[5, 10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Table;