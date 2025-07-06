import { useState } from 'react';
import axios from 'axios';

export default function AddStudentForm() {
  const [formData, setFormData] = useState({ name: '', email: '', dob: '' });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/students', formData);
      alert('Student added');
      setFormData({ name: '', email: '', dob: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to add student');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
      <input name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
      <input type="date" name="dob" onChange={handleChange} value={formData.dob} />
      <button type="submit">Add Student</button>
    </form>
  );
}
