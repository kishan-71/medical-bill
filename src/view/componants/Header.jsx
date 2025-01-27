import React, { createContext } from 'react';
import {Routes , Route, NavLink } from "react-router-dom";
import Home from '../home';
import Doctor from '../Doctor';
import NoMatch from '../NoMatch';
import MedicalBill from '../MedicalBill';
import BasicDataGrid from '../BasicDataGrid';

export const CountHContext = createContext();

const Header = () => {

  const [hcount, setHCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('hcount');
    if (storedCount) {
      setHCount(parseInt(storedCount));
    }
  }, []);


    return (
      <CountHContext.Provider value={{ hcount, setHCount }}>
        <nav>
           <NavLink to="/" >Home ({hcount})</NavLink> &nbsp;
          <NavLink to="/medical-bill" >Upload EXCEL File</NavLink> &nbsp;
          <NavLink to="/basic-data-grid" >BasicDataGrid</NavLink> &nbsp;
          <NavLink to="/doctor">Doctor</NavLink>
        </nav>

        <Routes> 
          <Route path ="/" element= {<Home />} /> 
          <Route path ="/doctor" element= {<Doctor />} /> 
          <Route path='/medical-bill' element={<MedicalBill />} />
          <Route path='/basic-data-grid' element={<BasicDataGrid   />} />
          <Route path ="*" element= {<NoMatch />} /> 
       </Routes> 
       </CountHContext.Provider>
    )
  };
  
  export default Header;
