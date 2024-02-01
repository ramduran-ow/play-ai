import React from 'react';
import styled from 'styled-components';
import './VariablesAndStructure.css';
import KeepExploring from './FooterModuleKeepExploring';
import MainCTA from './FooterModuleMainCTA';
import GetInTouch from './FooterModuleGetInTouch';
import Newsletter from './FooterModuleNewsletter';
import Copyright from './FooterModuleCopyright';

const FooterContainerWrapper = styled.footer`
  background-color: var(--light-gray);
  position: sticky;
`;

const Footer = () => {
  return (
    <FooterContainerWrapper>
      <KeepExploring/>
      <MainCTA/>
      <GetInTouch/>
      <Newsletter/>
      <Copyright/>
    </FooterContainerWrapper>
  );
};

export default Footer;

