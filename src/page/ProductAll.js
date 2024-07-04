import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAll } from '../reducer/productSlice';
import SubNav from '../components/SubNav';
import Card from '../components/Card';
import { ClipLoader } from 'react-spinners';

const ProductAll = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.product);

  useEffect(() => { 
    if (!products) { 
      dispatch(getProductsAll()); 
    }
     
  }, [dispatch,products])
  

   if (error) { 
    console.log("error:", error);
  }
  return (
    <div>
      <SubNav title='ALL' />
      {isLoading? (<ClipLoader className='loading-sppiner' size={150} color='black' />):(<div className='card-area'>
        {products && products.map((product) => (<Card item={product} />))}
      </div>)}
    </div>
  )
}

export default ProductAll