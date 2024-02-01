import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './GetInTouch.css';

const GetInTouchWrapper = styled.div.attrs({
  className: 'getInTouch'
})`
  background-image: url('../../images/footer/get-in-touch.jpg');
`;

const GetInTouch = () => {
  const [isBodyOpen, setIsBodyOpen] = useState(false);

  const openFormClick = () => {
    setIsBodyOpen(true);
    document.getElementById('getInTouchWrap').scrollIntoView({ behavior: 'smooth' });
  };

  const closeFormClick = () => {
    setIsBodyOpen(false);
  };

  useEffect(() => {
    if (isBodyOpen) {
      document.body.classList.add('openGetInTouch');
    } else {
      document.body.classList.remove('openGetInTouch');
    }
  }, [isBodyOpen]);

  return (
    <div>
      <GetInTouchWrapper>
        <div className='footerWrapper'>
          <div id='getInTouchWrap' className='getInTouchButton dFlex' onClick={openFormClick}>
            <div>
              <h3>Get in touch with us</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M38.3944 19.9999C38.3944 30.0952 30.2105 38.2791 20.1151 38.2791C10.0197 38.2791 1.83583 30.0952 1.83583 19.9999C1.83583 9.9045 10.0197 1.72059 20.1151 1.72059C30.2105 1.72059 38.3944 9.9045 38.3944 19.9999ZM39.4099 19.9999C39.4099 30.6561 30.7713 39.2946 20.1151 39.2946C9.45888 39.2946 0.820312 30.6561 0.820312 19.9999C0.820312 9.34365 9.45888 0.705078 20.1151 0.705078C30.7713 0.705078 39.4099 9.34365 39.4099 19.9999ZM9.95995 16.9533L20.1151 28.124L30.2702 16.9533L9.95995 16.9533Z" fill="#BA9CFF"/>
              </svg>
            </div>
          </div>
        </div>
      </GetInTouchWrapper>
      <div className='touchForm'>
        <div className='closeForm' onClick={closeFormClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
            <line x1="1.29289" y1="35.0766" x2="34.9512" y2="1.4183" stroke="white" stroke-width="2"/>
            <line x1="35.2929" y1="35.6407" x2="1.63461" y2="1.98242" stroke="white" stroke-width="2"/>
          </svg>
        </div>
        <div className='footerWrapper'>
          <div className='dFlex spaceBetween alignItemsStart'>
            <div className='talkAI'>
              <h3>
                Talk AI with out Experience Innovation & Engineering team
              </h3>
              <div className='dropdownTouch dFlex flexColumn'>
                <label className='dFlex'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="13" viewBox="0 0 10 13" fill="none">
                    <path d="M4.87578 0.959961C2.55378 0.959961 0.675781 2.83796 0.675781 5.15996C0.675781 8.30996 4.87578 12.96 4.87578 12.96C4.87578 12.96 9.07578 8.30996 9.07578 5.15996C9.07578 2.83796 7.19778 0.959961 4.87578 0.959961ZM4.87578 6.65996C4.04778 6.65996 3.37578 5.98796 3.37578 5.15996C3.37578 4.33196 4.04778 3.65996 4.87578 3.65996C5.70378 3.65996 6.37578 4.33196 6.37578 5.15996C6.37578 5.98796 5.70378 6.65996 4.87578 6.65996Z" fill="white"/>
                  </svg>
                  Lippincott Office:
                </label>
                <select name="location">
                  <option value="opcion1">London, UK</option>
                  <option value="opcion2">Option 2</option>
                  <option value="opcion3">Option 3</option>
                </select>
              </div>
              <div className='dropdownTouch dFlex flexColumn'>
                <label>
                  Get in touch with us about
                </label>
                <select name="location">
                  <option value="opcion1">Partnering with us</option>
                  <option value="opcion2">Option 2</option>
                  <option value="opcion3">Option 3</option>
                </select>
              </div>
            </div>
            <div className='talkAIform'>
              <form className='footerForm contactForm dFlex flexColumn'>
                <div>
                  <label htmlFor="FullName">Full Name *</label>
                  <input type="text" name="FullName" placeholder="Your full name" required />
                </div>
                <div>
                  <label htmlFor="email">Email address *:</label>
                  <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>
                <div>
                  <label htmlFor="company">Company *:</label>
                  <input type="text" id="company" name="company" placeholder="Your Company name" required />
                </div>
                <div>
                  <label htmlFor="mensaje">Mensaje:</label>
                  <textarea id="mensaje" name="mensaje" rows="4" placeholder="Leave us a message" required></textarea>
                </div>
                <button className='gradientButton' type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
