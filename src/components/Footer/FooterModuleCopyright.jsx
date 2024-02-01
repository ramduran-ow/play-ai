import React from 'react';
import './Copyright.css';

const Copyright = () => {
  return (
      <div className='copyright'>
        <div className='footerWrapper'>
          <div className='dFlex spaceBetween'>
            <div>
              <span className='copyTxt'>
                &copy;Lippincott 2023
              </span>
            </div>
            <div>
              <ul className='dFlex legalLinks'>
                <li><a href="https://lippincott.com/terms/" target='_blank'>Terms of Use</a></li>
                <li><a href="https://lippincott.com/site-directory/" target='_blank'>Site Directory</a></li>
                <li><a href="https://lippincott.com/privacy-policy/" target='_blank'>Privacy Notice</a></li>
                <li><a href="https://lippincott.com/cookie-policy/" target='_blank'>Cookies</a></li>
                <li><a href="https://lippincott.com/terms/" target='_blank'>Terms and Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Copyright;