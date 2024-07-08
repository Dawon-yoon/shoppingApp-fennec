import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../reducer/commonUiSlice';
import "../scss/Sidebar.scss";
import { userLogout } from '../reducer/userSlice';

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    const handleNavigate = (path) => {
        if (isSidebarOpen) { dispatch(toggleSidebar());}
        navigate(path);
    }

    const handleLogout = () => { 
        dispatch(userLogout());
    }

    useEffect(() => { 
        const handleResize = () => {
            if (window.innerWidth > 1000 && isSidebarOpen) { 
                dispatch(toggleSidebar());
            }
        }
        window.addEventListener('resize', handleResize);
        return () => { 
            window.removeEventListener('resize', handleResize);
        }
    },[dispatch,isSidebarOpen])


  return (
    <div className='sidebar'>
          <div className='first-col'>
              <span onClick={()=>handleNavigate("/product")}>ALL</span>
              <span onClick={()=>handleNavigate("/product/bag")}>BAG</span>
              <span onClick={() => handleNavigate("/product/wallet")}>WALLET</span>
              <span onClick={()=>handleNavigate("/product/acc")}>ACC</span>
        </div>
          <div className='second-col'>
              <span onClick={() => handleNavigate("/cart")}>Cart</span>
              {isAuthenticated? (<span onClick={handleLogout}>Logout</span>):(<span onClick={()=>handleNavigate("/login")}>Login</span>)}
              
              <span>JP / KR</span>
          </div>  
    </div>
  )
}

export default Sidebar