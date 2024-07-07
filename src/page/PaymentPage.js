import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const price = location.state;
  console.log(price);
  return (
    <div>PaymentPage</div>
  )
}

export default PaymentPage