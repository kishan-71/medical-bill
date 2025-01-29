import React, { useEffect, useState } from 'react';
import Doctor_control from '../../control/Doctor_control';

const DTable = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedDoctors = await Doctor_control.getDoctors();
      setDoctors(fetchedDoctors);
    };
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Mobile</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {doctors.map((doctor) => (
          <tr key={doctor.id}>
            <td>{doctor.name}</td>
            <td>{doctor.mobile}</td>
            <td>{doctor.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DTable;