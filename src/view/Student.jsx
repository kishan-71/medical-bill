import React, { useState, useEffect, useCallback } from 'react';

const baseUrl = 'http://localhost/api/students.php';

function StudentManager() {
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState({ name: '', mobile: '' });
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (url, options = {}) => {
        setLoading(true); setError(null);
        try {
            const res = await fetch(url, options);
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return await res.json();
        } catch (err) { setError(err.message); console.error(err); }
        finally { setLoading(false); }
    }, []);

    const fetchStudents = useCallback(async () => {
        const data = await fetchData(baseUrl);
        if (data) setStudents(data);
    }, [fetchData]);

    const createStudent = useCallback(async () => {
        const data = await fetchData(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student),
        });
        if (data?.message) { fetchStudents(); setStudent({ name: '', mobile: '' }); }
        else setError(data?.error || "Create failed");
    }, [fetchData, fetchStudents, student]);

    const updateStudent = useCallback(async () => {
        const data = await fetchData(baseUrl, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student),
        });
        if (data?.message) { fetchStudents(); setStudent({ name: '', mobile: '' }); setEditId(null); }
        else setError(data?.error || "Update failed");
    }, [fetchData, fetchStudents, student]);

    const deleteStudent = useCallback(async (id) => {
        const data = await fetchData(`${baseUrl}?id=${id}`, { method: 'DELETE' });
        if (data?.message) fetchStudents();
        else setError(data?.error || "Delete failed");
    }, [fetchData, fetchStudents]);

    useEffect(() => { fetchStudents(); }, [fetchStudents]);

    const handleChange = (e) => setStudent({ ...student, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        editId ? updateStudent() : createStudent();
    };

    const handleEdit = (s) => { setStudent({ ...s }); setEditId(s.id); };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Student Manager</h1>
            <form onSubmit={handleSubmit} className="mb-4 space-y-4">
                <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required className="w-full border border-gray-300 px-3 py-2 rounded" />
                <input type="text" name="mobile" placeholder="Mobile" value={student.mobile} onChange={handleChange} required className="w-full border border-gray-300 px-3 py-2 rounded" />
                <div className="flex space-x-2">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        {editId ? 'Update' : 'Add'}
                    </button>
                    {editId && <button onClick={() => { setStudent({ name: '', mobile: '' }); setEditId(null); }} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Cancel</button>}
                </div>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            {students.length > 0 && !loading && !error ? (
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead><tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Mobile</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr></thead>
                    <tbody>
                        {students.map((s) => (
                            <tr key={s.id}>
                                <td className="border border-gray-300 px-4 py-2">{s.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{s.mobile}</td>
                                <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                                    <button onClick={() => handleEdit(s)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded text-sm">Edit</button>
                                    <button onClick={() => deleteStudent(s.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (!loading && !error && <p>No students found.</p>)}
        </div>
    );
}

export default StudentManager;