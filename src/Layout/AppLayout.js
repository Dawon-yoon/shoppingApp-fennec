import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector} from 'react-redux';

const AppLayout = ({ children }) => {
    const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);
  return (
      <div>
        <Navbar/>
          {children}
      {!isSidebarOpen && <Footer />}
      
    </div>
  )
}

export default AppLayout