import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function AddStudentForm() {
  const [formData, setFormData] = useState({
    student_id: '',
    first_name: '',
    last_name: '',
    gender: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/students', formData);
      alert('Student added');
      navigate('/students');
    } catch (err) {
      console.error(err);
      alert('Failed to add student');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="student_id" placeholder="Student ID" onChange={handleChange} value={formData.student_id} />
      <input name="first_name" placeholder="First Name" onChange={handleChange} value={formData.first_name} />
      <input name="last_name" placeholder="Last Name" onChange={handleChange} value={formData.last_name} />
      <input name="gender" placeholder="Gender" onChange={handleChange} value={formData.gender} />
      <input type="date" name="dob" onChange={handleChange} value={formData.dob} />
      <input name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
      <input name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} />
      <input name="address" placeholder="Address" onChange={handleChange} value={formData.address} />
      <button type="submit">Add Student</button>
    </form>
  );
}
