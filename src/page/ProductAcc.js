import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAcc } from '../reducer/productSlice';
import SubNav from '../components/SubNav';
import Card from '../components/Card';

const ProductAcc = () => {
    const dispatch = useDispatch();
    const { products, isLoading, error } = useSelector((state) => state.product);
    useEffect(() => { 
        dispatch(getProductsAcc())
    },[dispatch])
    if (isLoading) { 
        console.log("Loading...");
    }
    if (error) {
        console.log("erorr:", error);
     }
  return (
    <div>
        <SubNav title='ACC' />
        <div className='card-area'>
            {products.map((product)=>(<Card item={product}/>)) }
        </div>      
    </div>
  )
}

export default ProductAcc