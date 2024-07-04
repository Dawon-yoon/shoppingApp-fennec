import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../reducer/productSlice';
import '../scss/Detail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus,faPlus,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../components/Carousel';

import { ClipLoader } from 'react-spinners';

const ProductDetail = () => {
  
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.product);
  const [orderStock, setOrderStock] = useState(1);
   let { id } = useParams();
  useEffect(() => { 
    dispatch(getProductDetail(id));
  }, [id,dispatch])
  
  if (isLoading) { 
    return (
    <div className='product-detail'>
      <ClipLoader size={150} color='black' loading/>
    </div>)
  }
  if (error) { 
    console.log("error:", error);
  }
  const handlePlusStock = () => setOrderStock(orderStock + 1);
  const handleMinusStock = () => { 
    if (orderStock > 1) { 
      setOrderStock(orderStock - 1);
    }
  }
  return (
    <div className='product-detail'>
      {products && products.additionalImages &&   <Carousel item={products.additionalImages} />}
      <div className='detail-info'>
        <h2>{products.title}</h2>
        <div className='detail-price'>
          ¥{products.price}
        </div>
        <div className='detail-order-stock'>
          <div>¥{products.price*orderStock}</div>
          <div>
            <button onClick={handleMinusStock}><FontAwesomeIcon icon={faMinus} /></button>
            <span>{orderStock}</span>
            <button  onClick={handlePlusStock}><FontAwesomeIcon icon={faPlus} /></button>
          </div>
        </div>
        <div className='detaile-button-area'>
          <button>Add to cart</button>
          <button>Buy it now</button>
        </div>
        <div>
          <h4>Details<FontAwesomeIcon icon={faAngleDown} /></h4>
          {products?.descriptions?.map((description, index) => (<p key={index}>- {description}</p>))}
        </div>
      </div>
      </div>
  )
}

export default ProductDetail