import React from 'react';
import "../scss/Navbar.scss";
import { useNavigate,useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../reducer/commonUiSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faMagnifyingGlass,faUser,faBars,faX } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  }

  const handleNavigate = (path) => {
    if (isSidebarOpen) { dispatch(toggleSidebar())}
    navigate(path);
  }

  return (
    <div className='nav-bar'>
      <div className={`nav ${location.pathname !=="/"? 'nav-bg':''}`}>
          <img width={130} src='/img/logo_.svg' alt='logo.png' onClick={()=>handleNavigate("/")}/>
          <ul>
            <li onClick={()=>handleNavigate("/product")}>ALL</li>
            <li onClick={() => handleNavigate("/product/bag")}>BAG</li>
            <li onClick={()=>handleNavigate("/product/wallet")}>WALLET</li>
            <li onClick={()=>handleNavigate("/product/acc")}>ACC</li>
          </ul>
          <div className='nav-icons'>
            <div className='nav-icons-hidden'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            <div className='nav-icons-hidden'><FontAwesomeIcon icon={faCartShopping} /></div>
            <div className='nav-icons-hidden'><FontAwesomeIcon icon={faUser} /></div>
          </div>
        <div
          onClick={handleSidebar}
          className='nav-hamberger'>
          {isSidebarOpen? (<FontAwesomeIcon icon={faX} />):(<FontAwesomeIcon icon={faBars} />)}
          </div>
      </div>
      {isSidebarOpen && <Sidebar />}
    </div>
      
  )
}

export default Navbar