import React from 'react';
import './Footer.css';
import { styled } from 'styled-components';
import FooterModuleTop from './FooterModuleTop';

const DummyHeroContainer = styled.section`
min-height: 100vh;
background-color: lightblue;
`;


const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-wrapper">
            <div class="footer__top">
            <FooterModuleTop />

            {/* <ul class="footer__grid">
              <li class="footer__gridItem">
                <h3 class="footer__subtitle">Partner with us</h3>
                <a
                   data-gaclick="Footer Get in touch Link"
                   class="footer__link" href="https://lippincott.com/contact/"
                   >Get in touch</a>
              </li>
              <li class="footer__gridItem">
                <h3 class="footer__subtitle">Join us</h3>
                <a
                   data-gaclick="Footer Find your role Link"
                   class="footer__link" href="https://lippincott.com/careers/" target="_blank"
                  >
                   Find your role
                </a>
              </li>
              <li class="footer__gridItem footer__gridItem--subscribe">
                <h3 class="footer__subtitle">Subscribe</h3>
                <a
                   data-gaclick="Footer Find your role Link"
                   class="footer__link" href="https://lippincott.com/subscribe/" target="_blank"
                  >
                   Enter email address
                </a>
              </li>
              <li class="footer__gridItem footer__gridItem--follow">
                <h3 class="footer__subtitle">Follow</h3>
                <div class="footer__social">
                  <a class="footer__socialLink" data-gaclick="Footer Instagram Link" href="https://www.instagram.com/lippincottbrand/">
                    <svg class="icon--instagram" role="presentation">
                    </svg>
                  </a>
                  <a class="footer__socialLink" data-gaclick="Footer Twitter Link" href="https://twitter.com/lippincottbrand">
                    <svg class="icon--twitter "   role="presentation" >
                    </svg>
                  </a>
                  <a class="footer__socialLink" data-gaclick="Footer LinkedIn Link" href="https://www.linkedin.com/company/lippincott">
                    <svg class="icon--linkedin"   role="presentation" >
                    </svg>
                  </a>          
                </div>
              </li>
            </ul> */}
          </div>
          <div class="footer__bottom">
            {/* <nav class="footer__nav">
              <ul id="menu-footer-menu" class="menu">
                <li class="menu-item">
                  <a href="https://lippincott.com/careers/">Careers</a>
                </li>
                <li class="menu-item">
                  <a href="https://lippincott.com/contact/" data-gaclick="Footer Contact Link">Contact</a>
                </li>
                <li class="menu-item">
                  <a href="/contact/#locations" data-gaclick="Footer Locations Link">Locations</a>
                </li>
                <li class="menu-item">
                  <a href="https://lippincott.com/news/" data-gaclick="Footer News & Awards Link">News & Awards</a>
                </li>
                <li class="menu-item">
                  <a href="/people/" data-gaclick="Footer People Link">People</a>
                </li>
                <li class="menu-item">
                  <a href="https://lippincott.com/pro-bono/" data-gaclick="Footer Pro Bono Link">Pro Bono</a>
                </li>        
              </ul>
            </nav>
            <div class="footer__lang">
              <nav class="footer__nav">
                <ul>
                  <li><a class="footerNav__link" href="https://www.lippincott.com.cn/" data-gaclick="Footer Chinese Link">中文</a></li><li><a class="footerNav__link" href="https://www.lippincott.co.kr/" data-gaclick="Footer Korean Link">한국어</a></li>
                </ul>
              </nav>
            </div> */}
            <div class="footer__logo">
              <img class="icon--logo" role="presentation" src="images/lip-logo.png">
                {/* <use xlink:href="https://lippincott.com/app/themes/sage/dist/images/sprites.svg#logo"></use> */}
              </img>    
            </div>
            <nav class="footer__nav footer__nav--secondary">
              <ul>
                <li>
                  <span>&copy; 2023 Lippincott</span>
                </li>
                {/* <li class="menu-item menu-site-directory"><a href="https://lippincott.com/site-directory/">Site Directory</a></li> */}
                <li class="menu-item menu-terms-of-use"><a href="https://lippincott.com/terms/">Terms of Use</a></li>
                <li class="menu-item menu-privacy-notice"><a href="https://lippincott.com/privacy-policy/">Privacy Notice</a></li>
                <li class="menu-item menu-cookie-notice"><a href="https://lippincott.com/cookie-policy/">Cookie Notice</a></li>
                <li id="teconsent"></li>
              </ul>
            </nav>
          </div>
            
            </div>

        </footer>
    );
};

export default Footer;