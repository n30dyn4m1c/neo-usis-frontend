import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function HomePage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/students')
      .then(res => setStudents(res.data))
      .catch(console.error);
  }, []);

  const total       = students.length;
  const maleCount   = students.filter(s => s.gender === 'Male').length;
  const femaleCount = students.filter(s => s.gender === 'Female').length;

  // compute age in years from dob string
  const calculateAge = dob => {
    const birth = new Date(dob);
    const diff  = Date.now() - birth.getTime();
    const ageDt = new Date(diff);
    return Math.abs(ageDt.getUTCFullYear() - 1970);
  };
  const avgAge = total
    ? Math.floor(students.reduce((sum, s) => sum + calculateAge(s.dob), 0) / total)
    : 0;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Neo USIS Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Metrics */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium">Total Students</h2>
          <p className="text-4xl font-bold mt-2">{total}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium">Male Students</h2>
          <p className="text-4xl font-bold mt-2">{maleCount}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium">Female Students</h2>
          <p className="text-4xl font-bold mt-2">{femaleCount}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium">Average Age</h2>
          <p className="text-4xl font-bold mt-2">{avgAge}</p>
        </div>

        {/* Quick Links */}
        <Link
          to="/add-student"
          className="bg-blue-600 text-white text-center rounded-lg p-6 hover:bg-blue-700"
        >
          <h2 className="text-lg">Add Student</h2>
        </Link>
        <Link
          to="/students"
          className="bg-green-600 text-white text-center rounded-lg p-6 hover:bg-green-700"
        >
          <h2 className="text-lg">View Students</h2>
        </Link>
      </div>
    </div>
  );
}
