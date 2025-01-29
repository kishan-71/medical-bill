import { Routes, Route, NavLink } from "react-router-dom";
import Home from '../home';
import NoMatch from '../NoMatch';
import MedicalBill from '../MedicalBill';
import BasicDataGrid from '../BasicDataGrid';
import { useContext } from "react";
import { CountContext } from "../Context/CountContext";
import Doctor_crud from "../Doctor_crud";

const Header = () => {
  const { count } = useContext(CountContext);

  return (
  <>
      <nav>
        <NavLink to="/" >Home {count} </NavLink> &nbsp;
        <NavLink to="/medical-bill" >Upload EXCEL File</NavLink> &nbsp;
        <NavLink to="/basic-data-grid" >BasicDataGrid</NavLink> &nbsp;
        <NavLink to="/doctor">Doctor CRUD</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<Doctor_crud />} />
        <Route path='/medical-bill' element={<MedicalBill />} />
        <Route path='/basic-data-grid' element={<BasicDataGrid />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      </>
  )
};

export default Header;
