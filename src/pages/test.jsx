import React from "react";

const complaintsData = [
  {
    customerNumber: "#12345",
    complaints: [
      { name: "Olivia Martin", status: "Pending", color: "text-red-500" },
      { name: "Jackson Lee", status: "Resolved", color: "text-green-500" },
    ],
    visits: [
      { name: "Olivia Martin", status: "Visited", color: "text-green-500" },
      { name: "Jackson Lee", status: "Not Visited", color: "text-red-500" },
    ],
  },
  {
    customerNumber: "#12346",
    complaints: [
      { name: "William Kim", status: "Resolved", color: "text-green-500" },
      { name: "Sofia Davis", status: "Pending", color: "text-red-500" },
    ],
    visits: [
      { name: "William Kim", status: "Visited", color: "text-green-500" },
      { name: "Sofia Davis", status: "Scheduled", color: "text-yellow-500" },
    ],
  },
];

const App = () => {
  const printPDF = () => {
    window.print();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Customer Complaints</h1>
        <button
          onClick={printPDF}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition print:hidden"
        >
          Download as PDF
        </button>
      </div>

      {/* Complaints Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {complaintsData.map((customer, index) => (
          <div key={index} className="border-2 border-gray-500 p-4 rounded-lg bg-white shadow-md">
            <h2 className="text-lg font-semibold mb-3">Customer Number: {customer.customerNumber}</h2>

            {/* Complaints Details - Two in One Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {customer.complaints.map((complaint, i) => (
                <div key={i} className="border border-gray-500 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Complain Details</h4>
                  <div className="flex justify-between">
                    <span>{complaint.name}</span> 
                    <span className={complaint.color}>{complaint.status}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Visit List */}
            <div className="border border-gray-500 p-4 mt-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold mb-2">Visit List</h4>
              <ul className="text-sm space-y-2">
                {customer.visits.map((visit, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{visit.name}</span> 
                    <span className={visit.color}>{visit.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Print Styles */}
      <style>
        {`
          @media print {
            body {
              -webkit-print-color-adjust: exact;
            }
            .print:hidden {
              display: none;
            }
            .grid {
              grid-template-columns: 1fr 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
