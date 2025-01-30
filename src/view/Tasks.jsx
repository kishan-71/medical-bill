import React, { useState, useEffect } from 'react';
import TasksData from '../service/TasksData'; // Import your data service

function Tasks() {
    const [newTask, setNewTask] = useState({ title: '', details: '', date: '' });
    const [editTask, setEditTask] = useState(null);
    const { tasks, fetchTasks, createTask, updateTask, deleteTask, loading, error } = TasksData();

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (editTask) {
            setEditTask({ ...editTask, [name]: value }); 
        } else {
            setNewTask({ ...newTask, [name]: value });
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editTask) {
            updateTask(editTask);
            setEditTask(null);
        } else {
            createTask(newTask);
        }
        setNewTask({ title: '', details: '', date: '' });
    };

    const handleEdit = (task) => {
        setEditTask({ ...task }); // Important: Create a copy!
        setNewTask({ title: '', details: '', date: '' });
    };

    return (

        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
            <form onSubmit={handleSubmit} className="mb-4 space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={editTask ? editTask.title : newTask.title} 
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                />
                <textarea
                    name="details"
                    placeholder="Details"
                    value={editTask ? editTask.details : newTask.details}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                />
                <input
                    type="date"
                    name="date"
                    value={editTask ? editTask.date : newTask.date} 
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 px-3 py-2 rounded"
                />
                <div className="flex space-x-2">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        {editTask ? 'Update' : 'Add'}
                    </button>
                    {editTask && (
                        <button
                            onClick={() => setEditTask(null)}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Cancel Edit
                        </button>
                    )}
                </div>
            </form>
            {loading && <p>Loading tasks...</p>} {/* Display loading message */}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>} {/* Display error message */}

            {tasks.length > 0 && !loading && !error ? ( // Only render table if data is loaded and no error

                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">Title</th>
                            <th className="border border-gray-300 px-4 py-2">Details</th>
                            <th className="border border-gray-300 px-4 py-2">Date</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>


                        {tasks.map((task) => (
                            <tr key={task.id}>
                                <td className="border border-gray-300 px-4 py-2">{task.title}</td>
                                <td className="border border-gray-300 px-4 py-2">{task.details}</td>
                                <td className="border border-gray-300 px-4 py-2">{task.date}</td>
                                <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                                    <button
                                        onClick={() => handleEdit(task)}
                                        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded text-sm"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteTask(task.id)} // Pass task.id
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             ) : (!loading && !error && <p>No tasks found.</p>)} 
        </div>
    );
}

export default Tasks;