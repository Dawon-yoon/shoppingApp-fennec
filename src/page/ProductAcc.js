import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAcc } from '../reducer/productSlice';
import SubNav from '../components/SubNav';
import Card from '../components/Card';
import { ClipLoader } from'react-spinners';
import Pagenation from '../components/Pagenation';

const ProductAcc = () => {
    const dispatch = useDispatch();
    const { products, isLoading, error } = useSelector((state) => state.product);

  //for pagenation
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  
    useEffect(() => { 
        dispatch(getProductsAcc())
    }, [dispatch])
    
    if (isLoading) { 
    return (
    <div className='loading-spinner'>
      <ClipLoader size={100} color='black' loading/>
    </div>)
  }
    if (error) {
        console.log("erorr:", error);
     }
  return (
    <div>
        <SubNav title='ACC' />
        <div className='card-area'>
          {products&& currentProducts.map((product)=>(<Card item={product}/>)) }
      </div>
      <Pagenation
        currentPage={currentPage}
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default ProductAcc