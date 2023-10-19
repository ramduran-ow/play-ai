import React from 'react';
import { styled } from 'styled-components';
import STRINGS from '../constants/strings';
import { sizes } from '../constants/devices';

const FooterModuleTopContainer = styled.div`
    max-height: 300px;
    display: flex;
    flex-direction: column;
    gap: 6rem;
    color: white;
    margin-bottom: 6rem;
`;

const TextImage = styled.div`

`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
`;

const MainHeader = styled.h2`
    font-family: 'Noe Display';
    font-weight: 500;
    font-size: 5rem;
    margin: 0;

    @media only screen and (max-width: ${sizes.tablet}) {
        font-size: 3.2rem;
    }
`;

const SubHeader = styled.p`
    font-family: 'Noto Sans';
    font-size: 2rem;
    margin: 0;

    @media only screen and (max-width: ${sizes.tablet}) {
        font-size: 1.6rem;
    }
`;

const ButtonWrapper = styled.div``;

const Button = styled.button`
    font-family: "Noto Sans";
    font-weight: 500;
    padding: 1.6rem 3.2rem;
    font-size: 2rem;
    background: transparent;
    border-style: none;
    border: 1px solid white;
    cursor: pointer;
    border-radius: 8px;
    color: white; 

    @media only screen and (max-width: ${sizes.tablet}) {
        font-size: 1.6rem;
    }

`;

const FooterModuleTop = () => {
    return (
        <FooterModuleTopContainer>
            <HeaderContainer>
                <MainHeader>
                    {STRINGS.FOOTER_MODULE_TOP.HEADER}
                </MainHeader>
                <SubHeader>
                    {STRINGS.FOOTER_MODULE_TOP.SUBHEADER}
                </SubHeader>
            </HeaderContainer>
            <ButtonWrapper>
                <Button>LET'S TALK</Button>
            </ButtonWrapper>
        </FooterModuleTopContainer>
    );
};

export default FooterModuleTop;