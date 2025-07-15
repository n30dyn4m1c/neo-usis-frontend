import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EditStudentForm() {
  const { id } = useParams();
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    student_id:'', first_name:'', last_name:'', gender:'',
    dob:'', email:'', phone:'', address:''
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/students/${id}`)
      .then(r => setFormData(r.data))
      .catch(console.error);
  }, [id]);

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/students/${id}`, formData);
      nav('/students');
    } catch (err) {
      console.error(err);
      alert('Update failed');
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
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Save Changes
      </button>
    </form>
  );
}
