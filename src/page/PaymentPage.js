import React,{ useState } from 'react';
import { useLocation } from 'react-router-dom';
import SubNav from '../components/SubNav';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/lib/styles.scss';
import '../scss/Payment.scss';

const PaymentPage = () => {
  const location = useLocation();
  const price = location.state;
  
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (event) => {
    setCardDetails((prev) => ({ ...prev, focus: event.target.name }));
  }

  const handleSubmit = (event) => { 
    event.preventDefault();
    alert("決済機能は準備中です");
  }

  return (
    <div>
      <SubNav title='Payment'/>
      <form className='payment' onSubmit={handleSubmit}>
        <h2>配送先住所</h2>
        <div className='form-row'>
          <div className='form-group'>
            <label htmlFor="lastname">姓</label>
            <input required type="text" id="lastname" name="lastname" />
          </div>
          <div className='form-group'>
            <label htmlFor="firstname">名前</label>
            <input required type="text" id="firstname" name="firstname" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone">連絡先</label>
          <input required type="tel" id="phone" name="phone" placeholder="例: 090-xxxx-xxxx" />
        </div>
        <div className="form-group">
          <label htmlFor="address">住所</label>
          <input required type="text" id="address" name="address" placeholder="アパート、スタジオ、フロア" />
        </div>
        <div className="form-group">
          <label htmlFor="city">市区町村</label>
          <input required type="text" id="city" name="city" />
        </div>
        <div className="form-group">
          <label htmlFor="zip">郵便番号</label>
          <input required type="text" id="zip" name="zip" />
        </div>
        <h2>決済情報</h2>
        <div className='form-credit'>
          <Cards
            number={cardDetails.number}
            name={cardDetails.name}
            expiry={cardDetails.expiry}
            cvc={cardDetails.cvc}
            focused={cardDetails.focus}
          />
          <div className='form-area'>
            <div className="form-group">
          <label htmlFor="cardnumber">カード番号</label>
          <input required type="text" id="cardnumber" name="number" value={cardDetails.number} onChange={handleInputChange}
          onFocus={handleInputFocus}      maxLength="16" />
        </div>
        <div className="form-group">
          <label htmlFor="cardname">名前</label>
          <input required type="text" id="cardname" name="name" value={cardDetails.name} onChange={handleInputChange}
          onFocus={handleInputFocus}
          maxLength="50" />
        </div>
        <div className="form-group">
          <label htmlFor="expiry">有効期限</label>
          <input required type="text" id="expiry" name="expiry" placeholder="MM/YY" value={cardDetails.expiry} onChange={handleInputChange}
          onFocus={handleInputFocus}      maxLength="4" />
        </div>
        <div className="form-group">
          <label htmlFor="cvc">CVC</label>
          <input required type="text" id="cvc" name="cvc" value={cardDetails.cvc} onChange={handleInputChange}
          onFocus={handleInputFocus}      maxLength="3" />
        </div>
          </div>
        </div>
        <div className='totalprice'>
          <p>Total price:</p>
          <p>¥{price}</p>
        </div>
        <button type="submit">支払い</button>
      </form>
    </div>
  )
}

export default PaymentPage