import React,{useState} from 'react';
import { updateOrderStock } from '../reducer/cartSlice';
import { useDispatch } from'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus,faPlus,faXmark } from '@fortawesome/free-solid-svg-icons';

const CartBox = ({ item, index, handleRemoveItem,handleItemCheck }) => {
    const dispatch = useDispatch();
    const orderStock = item?.orderStock;
    const [isChecked, setIsChecked] = useState(false);

    const handlePlusStock = () => {
        dispatch(updateOrderStock({ index, orderStock: orderStock + 1 }));
    }
    const handleMinusStock = () => { 
        if (orderStock > 1) { 
            dispatch(updateOrderStock({index,orderStock: orderStock - 1}))
        }
    }
    const handleCheckboxChange = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        handleItemCheck(index, newCheckedState);
    }
  
    
  return (
      <div className='cart-box'>
          <input type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
          <img src={item?.productImage} alt='cart-item-image' width={120}/>   
          <div className='text-area'>
            <div className='cart-item'>
                  <div className='cart-item-title'>{item.title}</div>
                <p> 配送:[無料] / 基本配送</p>
              </div>
            <div className='cart-stock'>
                <div>
                    <button onClick={handleMinusStock}><FontAwesomeIcon icon={faMinus} /></button>
                      <span>{orderStock}</span>
                    <button onClick={handlePlusStock}><FontAwesomeIcon icon={faPlus} /></button>
                </div>
                  <div>¥{item?.price * orderStock}</div>
              </div>
              <button className='order-btn' >Order</button>
              <button
                  onClick={() => {handleRemoveItem(index)}}
                className='remove-btn'><FontAwesomeIcon icon={faXmark} /></button>
        </div>
    </div>
  )
}

export default CartBox