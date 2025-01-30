import React, { useState, useEffect, useCallback } from 'react'; // Import useCallback

const baseUrl = 'http://localhost/api/tasks.php';

const TasksData = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = useCallback(async () => {  // Use useCallback here
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    }, []); // Empty dependency array for useCallback - fetchTasks will only be created once

    const createTask = useCallback(async (task) => { // Use useCallback here
        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });
            const data = await response.json();
            if (data.message) {
                fetchTasks();
            } else {
                console.error("Error creating task", data.error);
            }
        } catch (error) {
            console.error("Error creating task:", error);
        }
    }, [fetchTasks]); // fetchTasks is a dependency for createTask
 
    const updateTask = async (task) => { // 'task' should contain the id and updated fields
        console.log(task);
        try {
            const response = await fetch(baseUrl, { // Make sure baseUrl is correct
                method: 'PUT', // Or PATCH, depending on your API
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task), // Send the entire task object
                
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json(); // Get the response from the server
            if (data.message) {
                fetchTasks(); // Refresh the task list
            } else {
                console.error("Error updating task:", data.error);
            }
    
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };
    /* const updateTask = useCallback(async (task) => {  // Use useCallback here
        try {
            const response = await fetch(baseUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });
            const data = await response.json();
            if (data.message) {
                fetchTasks();
            } else {
                console.error("Error updating task", data.error);
            }
        } catch (error) {
            console.error("Error updating task:", error);
        }
    }, [fetchTasks]); // fetchTasks is a dependency for updateTask
*/
    const deleteTask = useCallback(async (id) => { // Use useCallback here
        try {
            const response = await fetch(`${baseUrl}?id=${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            if (data.message) {
                fetchTasks();
            } else {
                console.error("Error deleting task", data.error);
            }
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    }, [fetchTasks]); // fetchTasks is a dependency for deleteTask

    return { tasks, fetchTasks, createTask, updateTask, deleteTask };
};

export default TasksData;