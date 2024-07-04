import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsWallets } from '../reducer/productSlice';
import SubNav from '../components/SubNav';
import Card from '../components/Card';


const ProductWallet = () => {
    const dispatch = useDispatch();
    const { products, isLoading, error } = useSelector((state) => state.product);
    
    useEffect(() => { 
        dispatch(getProductsWallets());
    },[dispatch])

    if (isLoading) { 
        console.log("Loading...");
    }
    if (error) { 
        console.log("error:", error);
    }
  return (
    <div>
        <SubNav title='WALLET' />
        <div className='card-area'>
              {products.map((product) => (<Card item={product} />))}
        </div>      
    </div>
  )
}

export default ProductWallet