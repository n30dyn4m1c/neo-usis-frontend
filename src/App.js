import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentList from './pages/StudentList';
import AddStudentForm from './components/AddStudentForm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/add-student" element={<AddStudentForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
