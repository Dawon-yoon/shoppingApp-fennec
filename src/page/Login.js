import React from 'react';
import SubNav from '../components/SubNav';
import { Link } from'react-router-dom';

const Login = () => {

  return (
    <div className='login-form'>
      <SubNav title="LOGIN" />
      <form>
          <div>
            <input type='email' placeholder='ID' required />
          </div>
          <div>
            <input type='password' placeholder='PASSWORD' required/>
          </div>
          <div>
            <button>LOGIN</button>
          </div>
        </form>
        <div className='login-links'>
          <div>Forgot your ID or Password?</div>
          <span>|</span>
          <Link to={'/register'} className='sign-up-link'><div>Sign up</div></Link>
        </div>
    </div>
  )
}

export default Login