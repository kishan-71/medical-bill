// App.js (or your main component)

import React, { useState } from 'react';

function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1); // For table pagination
    const [searchQuery, setSearchQuery] = useState(''); // For table search
  
    const sampleTableData = [ // Sample data for the table
      { id: 1, name: 'User 1', email: 'user1@example.com', date: '2024-07-20' },
      { id: 2, name: 'User 2', email: 'user2@example.com', date: '2024-07-21' },
      { id: 3, name: 'User 3', email: 'user3@example.com', date: '2024-07-23' },
      { id: 4, name: 'User 4', email: 'user4@example.com', date: '2024-07-24' },
      { id: 5, name: 'User 5', email: 'user5@example.com', date: '2024-07-25' },
      { id: 6, name: 'User 6', email: 'user6@example.com', date: '2024-07-26' },
      { id: 7, name: 'User 7', email: 'user7@example.com', date: '2024-07-27' },
      { id: 8, name: 'User 8', email: 'user8@example.com', date: '2024-07-28' },
      { id: 9, name: 'User 9', email: 'user9@example.com', date: '2024-07-29' },
      { id: 10, name: 'User 10', email: 'user10@example.com', date: '2024-08-21' },
      { id: 11, name: 'User 11', email: 'user11@example.com', date: '2024-08-21' },
      { id: 12, name: 'User 12', email: 'user12@example.com', date: '2024-08-21' },
      { id: 13, name: 'User 13', email: 'user13@example.com', date: '2024-08-21' },
      { id: 14, name: 'User 14', email: 'user14@example.com', date: '2024-08-29' },
    ];
  
    const itemsPerPage = 5; // Number of items per table page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sampleTableData.slice(indexOfFirstItem, indexOfLastItem);
  
    const totalPages = Math.ceil(sampleTableData.length / itemsPerPage);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const filteredTableData = currentItems.filter(item => {
      // Customize search logic as needed (e.g., search in all fields)
      return Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  
  
  
    return (
      <div className="bg-gray-100 h-screen flex">
        {/* Sidebar (same as before) */}
        <div className={`w-64 bg-white fixed top-0 left-0 h-full transition-transform duration-300 z-10 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* ... (sidebar content) */}
        </div>
  
        {/* Mobile Menu Button (same as before) */}
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="fixed top-4 left-4 z-20 bg-gray-800 text-white px-3 py-2 rounded-md md:hidden">
          {/* ... (menu icon) */}
        </button>
  
        {/* Main Content */}
        <div className="flex-1 ml-0 md:ml-64 p-6 overflow-y-auto"> {/* Added overflow-y-auto */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
  
            {/* Form Example */}
            <form className="mb-6">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter email" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                <input type="password" id="password" className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter password" />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
                <input type="date" id="date" className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
            </form>
  
            {/* Card Example */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Card Title</h2>
              <p className="text-gray-600">Card content goes here.</p>
            </div>
  
            {/* Table Example */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTableData.map(item => (
                    <tr key={item.id}>
                      <td className="px-4 py-2">{item.id}</td>
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">{item.email}</td>
                      <td className="px-4 py-2">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
  
              {/* Pagination */}
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
  
  
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default Dashboard;