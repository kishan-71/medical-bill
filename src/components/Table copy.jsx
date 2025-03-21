// Table.jsx
import React from "react";
import Button from "./Button";

const Table = ({ headers, rows, actions }) => {
  return (
    <div className="w-full max-h-[350px] overflow-auto rounded-lg border border-gray-700 custom-scrollbar">
      <table className="w-full border-collapse bg-gray-800 shadow-md rounded-lg">
        <thead className="sticky top-0 bg-gray-700 z-10">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="p-1 text-left text-lg font-semibold text-gray-300"
              >
                {header}
              </th>
            ))}
            {actions && (
              <th className="p-1 text-left text-lg font-semibold text-gray-300">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={headers.length + (actions ? 1 : 0)}
                className="p-4 text-center text-gray-400" >
                No records found. </td> </tr>) : (
            rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-750 p-1 transition-all">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}
                    className="p-1 text-lg text-gray-200 border-t border-gray-700" >
                    {cell} </td>))}
                {actions && (
                  <td className="p-1 text-sm text-gray-200 border-t border-gray-700">
                    <div className="flex space-x-2">
                      {actions.map((action, actionIndex) => (
                        <Button key={actionIndex}
                          onClick={() => action.action(rowIndex)}
                          className={action.className} >
                          {action.label} </Button>
                      ))}
                    </div>
                  </td>
                )} </tr>
            )))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;