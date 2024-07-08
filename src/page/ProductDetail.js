import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from'react-redux';
import { useParams,useNavigate } from 'react-router-dom';
import { getProductDetail } from '../reducer/productSlice';
import { addToCartList } from '../reducer/cartSlice';
import '../scss/Detail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus,faPlus,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../components/Carousel';
import { ClipLoader } from 'react-spinners';

const ProductDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();

  const { product, isLoading, error } = useSelector((state) => state.product);

  const [orderStock, setOrderStock] = useState(1);

  useEffect(() => { 
    dispatch(getProductDetail(id));
  }, [id,dispatch])
  
  if (isLoading) { 
    return (
    <div className='loading-spinner'>
      <ClipLoader size={100} color='black' loading/>
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

  const handleNavigate = (path, orderStock) => { 
    if (path === "/cart") { 
      dispatch(addToCartList({ ...product, orderStock }));
    }
    navigate(path, {state:orderStock*product.price});
  } 

  return (
    <div className='product-detail'>
      {product && product.additionalImages &&  <Carousel item={product.additionalImages} />}
      <div className='detail-info'>
        <h2>{product?.title}</h2>
        <div className='detail-price'>
          ¥{product?.price}
        </div>
        <div className='detail-order-stock'>
          <div>¥{product?.price*orderStock}</div>
          <div>
            <button onClick={handleMinusStock}><FontAwesomeIcon icon={faMinus} /></button>
            <span>{orderStock}</span>
            <button  onClick={handlePlusStock}><FontAwesomeIcon icon={faPlus} /></button>
          </div>
        </div>
        <div className='detaile-button-area'>
          <button onClick={()=>handleNavigate("/cart",orderStock)}>Add to cart</button>
          <button onClick={()=>handleNavigate("/payment",orderStock,product?.price)}>Buy it now</button>
        </div>
        <div>
          <h4>Details<FontAwesomeIcon icon={faAngleDown} /></h4>
          {product?.descriptions?.map((description, index) => (<p key={index}>- {description}</p>))}
        </div>
      </div>
      </div>
  )
}

export default ProductDetail