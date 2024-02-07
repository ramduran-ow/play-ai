import React, { useState } from 'react';
import styled from 'styled-components';
import './MainMenu.css';

const LippLogo = styled.img.attrs({
  src: process.env.PUBLIC_URL + '/images/menu-images/lippincott-logo.png',
  className: 'lippLogo'
})``;

const ArticleMenu = styled.a.attrs({
    className: 'featuredImage',
    href: '#'
  })`
    background-image: url('../../images/footer/articleCard.jpg');
  `;

const MainMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(prevState => {
      const newState = !prevState;
      if (newState) {
        document.body.classList.add('openNav');
      } else {
        document.body.classList.remove('openNav');
      }
      return newState;
    });
  };

  return (
    <div>
        <section className='navContainer'>
            <div className='navWrapper dFlex alignItemsCenter'>
                <div className="navigationMenu">
                    <ul>
                        <li><a href="#" className='current'>AI Experiments</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Work</a></li>
                    </ul>
                    <p>At Lippincott, we're committed to pioneering the future of creative work. This is why we created PLAY—a space where generative technology meets creative consulting, fueling innovation for our clients and ourselves. We challenge the expected, embrace the impossibly-real, and celebrate both breakthroughs and inspiring flops. Join us in this journey of continuous discovery and excitement in shaping what's next.</p>
                </div>
                <div className='menuArticle'>
                    <ArticleMenu />
                    <a href="#" className='articleLink'>Applying the Power of AI to Naming</a>
                </div> 
            </div>
        </section>
        <nav className='mainNav'>
            <div className='navWrapper dFlex spaceBetween alignItemsCenter'>
                <a href="#">
                    <LippLogo />
                </a>
                <ul className='menuBtn' onClick={toggleNav}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </nav>
    </div>
  );
};

export default MainMenu;
