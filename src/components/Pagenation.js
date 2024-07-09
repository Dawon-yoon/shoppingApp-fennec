import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAnglesLeft, faAngleRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import '../scss/Pagenation.scss';

const Pagenation = ({ currentPage, totalItems, itemsPerPage, onPageChange}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClickPageBtn = (pageNumber) => { 
    onPageChange(pageNumber);
  }
  
  const handleNextPageBtn = () => { 
    if (currentPage < totalPages) { 
      onPageChange(currentPage + 1);
    }
  } 

  const handlePrevPageBtn = () => {
    if (currentPage > 1) { 
      onPageChange(currentPage - 1);
    }
  }

  const handleFirstPageBtn = () => { 
    onPageChange(1);
  }

  const handleLastPageBtn = () => { 
    onPageChange(totalPages);
  }

  return (
    <div className='pagenation'>
      <button onClick={handleFirstPageBtn}>
        <FontAwesomeIcon icon={faAnglesLeft} />
      </button>
      <button onClick={handlePrevPageBtn} disabled={currentPage === 1}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
          key={index + 1}
          onClick={() => handleClickPageBtn(index + 1)}
          className={currentPage === index + 1 ? 'active' : ''}
        >
          {index + 1}
        </button>
        ))}
      </div>
      <button onClick={handleNextPageBtn} disabled={currentPage === totalPages}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      <button onClick={handleLastPageBtn}>
        <FontAwesomeIcon icon={faAnglesRight} />
      </button>
    </div>
  )
}

export default Pagenation