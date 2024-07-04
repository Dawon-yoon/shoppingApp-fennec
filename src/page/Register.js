import React from 'react';
import SubNav from '../components/SubNav';

const Register = () => {
  return (
    <div className='wrapper'>
          <SubNav title='SIGN UP' />
          <form className='register-form'>
              <div>
                  <label htmlFor='register-name'>お名前<span>*</span></label>
                  <input type='text' required id='register-name'/>
              </div>
              <div>
                  <label htmlFor='register-email'>メールアドレス<span>*</span></label>
                  <input type='email' required id='register-email'/>
              </div>
              <div>
                  <label htmlFor='register-password'>パスワード<span>*</span></label>
                  <input type='password' required id='register-password'/>
              </div>
              <div>
                  <label htmlFor='register-confirmpassword'>パスワード確認<span>*</span></label>
                  <input type='password' required id='register-confirmpassword'/>
              </div>
              <div>
                  <input
                      type='checkbox' required id='register-checkbox'
                    className='checkbox'
                  />
                  <label className='checkbox-label' htmlFor='register-checkbox'>ロボットではありません</label>
              </div>
              <button>SIGN UP</button>
          </form>
    </div>
  )
}

export default Register