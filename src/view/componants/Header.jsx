import { Routes, Route, NavLink } from "react-router-dom";
import Home from '../home';
import NoMatch from '../NoMatch';
import MedicalBill from '../MedicalBill';
import BasicDataGrid from '../BasicDataGrid';
import { useContext } from "react";
import { CountContext } from "../Context/CountContext";
import Doctor_crud from "../Doctor_crud";
import Dashboard from "../Dashboard";
import Tasks from "../Tasks";
import StudentManager from "../Student";

const Header = () => {
  const { count } = useContext(CountContext);

  return (
    <>

      <header className="bg-gray-800 text-white py-4 px-6 mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Demo Tutorial {count}  </h1> {/* Your app title */}
        <nav className="flex space-x-4">
          <NavLink to="/" className="hover:text-gray-300">Home </NavLink>
          <NavLink to="/medical-bill" className="hover:text-gray-300">Upload EXCEL File</NavLink>
          <NavLink to="/basic-data-grid" className="hover:text-gray-300">BasicDataGrid</NavLink>
          <NavLink to="/dashboard" className="hover:text-gray-300">Dashboard</NavLink>
          <NavLink to="/task" className="hover:text-gray-300">Tasks</NavLink>
          <NavLink to="/student" className="hover:text-gray-300">Student</NavLink>
          <NavLink to="/doctor" className="hover:text-gray-300">Doctor23</NavLink> 
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<Doctor_crud />} />
        <Route path='/medical-bill' element={<MedicalBill />} />
        <Route path='/basic-data-grid' element={<BasicDataGrid />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/task' element={<Tasks />} />
        <Route path='/student' element={<StudentManager />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
};

export default Header;
