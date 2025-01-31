import React,{useEffect,useState} from 'react';
import SubNav from '../components/SubNav';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartBox from '../components/CartBox';
import "../scss/Cart.scss";
import { loadCart, removeFromCartList } from '../reducer/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [totalPrice, setTotalPrice] = useState(0);
    const [orderPrice, setOrderPrice] = useState(0);
    const [selectedItem, setSelectedItem] = useState({});

    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const cartList  = useSelector((state) => state.cart.cartList);

    useEffect(() => {
        if (!isAuthenticated) { 
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => { 
        dispatch(loadCart());
    }, [dispatch]);

    useEffect(() => { 
        const totalPrice = () => {
            let total = 0;
            cartList.forEach(item => { total += item.price * item.orderStock });
            setTotalPrice(total);
        };
        totalPrice();
    }, [cartList])
    
    useEffect(() => { 
        const orderPrice = () => {
            let total = 0;
            Object.keys(selectedItem).forEach(index => {
                if (selectedItem[index]) {
                    const item = cartList[index];
                    total += item.price * item.orderStock;
                }
            });
            setOrderPrice(total);
        }
        orderPrice();
    },[selectedItem,cartList])
    
    
    const handleRemoveItem = (index) => {
        dispatch(removeFromCartList(index));
    }
    
    const handleItemCheck = (index, isChecked) => { 
        setSelectedItem(prev => ({ ...prev, [index]: isChecked }));
    }

    const handleOrderSelect = () => { 
        navigate("/payment", {state:orderPrice})
    }

    const handleOrderAll = () => { 
        navigate("/payment", {state:totalPrice})
    }

    const handleProductAll = () => { 
        navigate("/product");
    }

  return (
    <div >
          <SubNav title="Cart" />
          <div className='cart-center'>
              {cartList.length === 0 ? (
                  <div className='cart-empty'>
                      <p>cart is empty.</p>
                      <button
                          onClick={handleProductAll}>
                          商品を見に行く
                      </button>
                  </div>                  
              ) : (<div className='cart-area'>
                  {cartList.map((item, index) => (
                      <CartBox
                          key={index}
                          item={item}
                          index={index}
                          handleRemoveItem={handleRemoveItem}
                          handleItemCheck={handleItemCheck}
                      />))}
              <div className='total-area'>
                      <div className='total-price'>
                          Total price:
                          <div>¥{totalPrice}</div>
                      </div>
                  <div className='total-price'>
                          Order price:
                          <div>¥{orderPrice}</div>
                      </div>
                  <div className='total-btn-area'>
                          <button
                              onClick={handleOrderSelect}
                              className='order-checked'>Select Order</button>
                          <button
                              onClick={handleOrderAll}
                              className='order-all'>All Order</button>
                  </div>
                  </div>
              </div>)}
              {/* <div className='cart-area'>
                  {cartList.map((item, index) => (
                      <CartBox
                          key={index}
                          item={item}
                          index={index}
                          handleRemoveItem={handleRemoveItem}
                          handleItemCheck={handleItemCheck}
                      />))}
              <div className='total-area'>
                      <div className='total-price'>
                          Total price:
                          <div>¥{totalPrice}</div>
                      </div>
                  <div className='total-price'>
                          Order price:
                          <div>¥{orderPrice}</div>
                      </div>
                  <div className='total-btn-area'>
                          <button
                              onClick={handleOrderSelect}
                              className='order-checked'>Select Order</button>
                          <button
                              onClick={handleOrderAll}
                              className='order-all'>All Order</button>
                  </div>
                  </div>
              </div>   */}
         </div>   
    </div>
  )
}

export default Cart