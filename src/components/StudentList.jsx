return (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-4">Student List</h2>
    <table className="w-full border border-gray-300 table-auto">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 border">ID</th>
          <th className="px-4 py-2 border">Student ID</th>
          <th className="px-4 py-2 border">First</th>
          <th className="px-4 py-2 border">Last</th>
          <th className="px-4 py-2 border">Gender</th>
          <th className="px-4 py-2 border">DOB</th>
          <th className="px-4 py-2 border">Email</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id} className="hover:bg-gray-50">
            <td className="px-4 py-2 border">{s.id}</td>
            <td className="px-4 py-2 border">{s.student_id}</td>
            <td className="px-4 py-2 border">{s.first_name}</td>
            <td className="px-4 py-2 border">{s.last_name}</td>
            <td className="px-4 py-2 border">{s.gender}</td>
            <td className="px-4 py-2 border">{s.dob}</td>
            <td className="px-4 py-2 border">{s.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
