import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams,Link } from 'react-router-dom';
import { getProductsAll } from '../reducer/productSlice';
import SubNav from '../components/SubNav';
import Card from '../components/Card';
import { ClipLoader } from 'react-spinners';
import Pagenation from '../components/Pagenation';

const ProductAll = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");
  const { products, isLoading, error } = useSelector((state) => state.product);

  //for pagenation
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    dispatch(getProductsAll(searchQuery)); 
  }, [dispatch,searchQuery])
  
  if (isLoading) { 
    return (
    <div className='loading-spinner'>
      <ClipLoader size={100} color='black' loading/>
    </div>)
  }
   if (error) { 
    console.log("error:", error);
  }
  return (
    <div>
      <SubNav title='ALL' />
      {products.length === 0 ? (<div className='no-item'>
        <p>関連商品がありません。</p>
        <p><span>別のキーワードで検索</span>または</p>
        <Link className='link' to='/product'>商品Allへ戻る</Link>
        
      </div>) : (
        <div>
        <div className='card-area'>
        {products && currentProducts.map((product) => (<Card item={product} />))}
        </div>
        <Pagenation
        currentPage={currentPage}
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      /></div>
      )}
      {/* <Pagenation
        currentPage={currentPage}
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      /> */}
    </div>
  )
}

export default ProductAll