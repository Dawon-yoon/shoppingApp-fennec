import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => { 
    navigate(`/product/${item?.id}`)
  }
  return (
      <div className='card' onClick={showDetail}>
      <img src={item?.productImage} alt='product-image'/>
          <div className='card-text'>
        <div>{item?.title}</div>
        <div>¥{item?.price}</div>
        {item?.new && (<div className='new-item'>new</div>)}
          </div>
    </div>
  )
}

export default Card