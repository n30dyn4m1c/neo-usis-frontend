import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/students')
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this student?')) return;
    await axios.delete(`http://localhost:5000/students/${id}`);
    setStudents(students.filter(s => s.id !== id));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>
      <Link to="/students/create" className="inline-block bg-green-600 text-white px-4 py-2 mb-4 rounded hover:bg-green-700">
  + Add Student
</Link>

      <table className="w-full table-auto border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Student ID</th>
            <th className="border px-4 py-2">First</th>
            <th className="border px-4 py-2">Last</th>
            <th className="border px-4 py-2">Gender</th>
            <th className="border px-4 py-2">DOB</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{s.id}</td>
              <td className="border px-4 py-2">{s.student_id}</td>
              <td className="border px-4 py-2">{s.first_name}</td>
              <td className="border px-4 py-2">{s.last_name}</td>
              <td className="border px-4 py-2">{s.gender}</td>
              <td className="border px-4 py-2">{s.dob}</td>
              <td className="border px-4 py-2">{s.email}</td>
              <td className="border px-4 py-2 space-x-2">
                <Link to={`/students/edit/${s.id}`} className="text-blue-600 hover:underline">
                  Edit
                </Link>
                <button onClick={() => handleDelete(s.id)} className="text-red-600 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
