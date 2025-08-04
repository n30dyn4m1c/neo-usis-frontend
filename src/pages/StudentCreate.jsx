import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreateStudentForm() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    student_id:'', first_name:'', last_name:'', gender:'',
    dob:'', email:'', phone:'', address:''
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/students', formData);
      nav('/students');
    } catch (err) {
      console.error(err);
      alert('Creation failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-4">
      {[
        ['student_id','Student ID'],
        ['first_name','First Name'],
        ['last_name','Last Name'],
        ['gender','Gender'],
        ['dob','DOB', 'date'],
        ['email','Email'],
        ['phone','Phone'],
        ['address','Address']
      ].map(([name,label,type]) => (
        <input
          key={name}
          name={name}
          type={type || 'text'}
          placeholder={label}
          value={formData[name] || ''}
          onChange={handleChange}
          className="w-full border px-2 py-1"
        />
      ))}
      <button type="submit" className="bg-green-600 text-white px-4 py-2">
        Add Student
      </button>
    </form>
  );
}
