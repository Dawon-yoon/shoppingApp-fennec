import React from 'react';
import { Link } from 'react-router-dom';
import "../scss/Footer.scss";

const Footer = () => {
  return (
    <div className='container'>
        <div className='first-row'>
              <div className='company'>
                  <h6>COMPANY</h6>
                  <p>ICO Company<br/>
                    OWNER Junghee Oh<br/>
                    BUSINESS LICENSE 480-87-00279<br/>
                    ONLINE LICENSE 2016-SeoulSeocho-0304<br/>
                      04782 8, Yeonmujang 3-gil, Seongdong-gu, Seoul, Republic of Korea</p>
                  <div className='footer-links'>
                      <div>TERMS OF USE</div>
                      <div>PRIVACY POLICY</div>
                      <div>SHOP GUIDE</div>
                  </div>
              </div>
              <div className='contact'>
                  <h6>CONTACT US</h6>
                  <p>
                    +82-70-8899-4502<br/>
                    info@fennec.co.kr<br/>
                    MON-FRI 10:00~18:00<br/>
                    BREAK TIME 13:00~14:00
                  </p>
              </div>
              <div className='info'>
                  <h6>INFO</h6>
                  <div>NOTICE</div>
                  <div>Q&A</div>
              </div>
              <div className='follow'>
                  <h6>FOLLOW</h6>
                  <Link to="https://www.instagram.com/fennecseoul/"><div>INSTAGRAM</div></Link>
              </div>  
        </div>
        <div className='second-row'>
            <p>
                © 2024. FennecAll rights reserved.
            </p>
          </div>
    </div>
  )
}

export default Footer