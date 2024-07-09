import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../reducer/commonUiSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Searchbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);

    const handleClickBtn = (event) => { 
        event.preventDefault();
        if (inputRef.current) { 
            inputRef.current.value = '';
        }
    }
    const handleSearch = (event) => { 
        if (event.key === "Enter") { 
            let keyword = inputRef.current.value;
            console.log("keyword",keyword)
            if (isSidebarOpen) { 
                dispatch(toggleSidebar());
            }
            navigate(`product/?q=${keyword}`);
        }
    }
  return (
      <form className='search-bar'>
          <input
              ref={inputRef}
              type='text'
              placeholder='search'
              onKeyDown={handleSearch}
          />
          <button onClick={handleClickBtn}><FontAwesomeIcon icon={faX} /></button>
     </form>
  )
}

export default Searchbar