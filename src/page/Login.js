import React,{useEffect} from 'react';
import SubNav from '../components/SubNav';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../reducer/userSlice';
import { Link,useNavigate } from'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => { 
    if (isAuthenticated) { 
      navigate('/');
    }
  }, [isAuthenticated,navigate])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin());
    navigate('/');
  }
  return (
    <div className='login-form'>
      <SubNav title="LOGIN" />
      <form onSubmit={handleSubmit}>
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