import React, {useState, useEffect} from 'react';
import { styled } from 'styled-components';
import { sizes } from './constants/devices';
import { NavLink } from 'react-router-dom';

const NavContainer = styled.div`
    position: fixed;
    top: ${props => props.$top};
    transition: top 0.4s ease-out;
    // background-color: transparent;
    background-color: ${props => props.$background};
    border-bottom: ${props => props.$background === 'white' ? '1px solid black' : 'none'};
    width: 100%;
    height: 64px; 
    z-index: 99;
    display: flex;
    justify-content: center;
`;
const BackArrowLinkWrapper = styled(NavLink)`
    position: absolute;
    left: 60px;
    top: 26%;
    cursor: pointer;
`;

const BackArrow = styled.img`
`;

const NavContentWrapper = styled.div`
    max-width: 1440px;
    margin: auto;
`;

const ImageWrapper = styled.div`
    max-width: 273px;

    @media only screen and (max-width: ${sizes.tablet}) {
            max-width: 220px;
        }
        @media only screen and (max-width: ${sizes.mobileL}) {
            max-width: 175px;
        }
`;

const Logo = styled.img`
    width: 100%;
`;

const Nav = ({ isLandingPage }) => {
    const [position, setPosition] = useState(window.scrollY);
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        if(isLandingPage) {
            setVisible(window.scrollY > 0);
        } else {
            let moving = window.scrollY;
            setVisible(position < moving || position === moving + 1);
            setPosition(moving);
        }
    };

    const scrollTop = () => window.scrollTo({ top: 0 });

    useEffect(()=> {
        window.addEventListener("scroll", handleScroll);
        return(() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    const top = visible ? '-74px' : '74px';

    const background = window.scrollY < 100 ? 'transparent' : 'white';

    return (
        <NavContainer key={background} $top={top} $background={background}>
            {!isLandingPage && 
                <BackArrowLinkWrapper to={'/'} onClick={scrollTop}>
                    <BackArrow src={'images/back-arrow.svg'}/>
                </BackArrowLinkWrapper>
            }
            <NavContentWrapper>
                <ImageWrapper>
                    <NavLink to={'/'} onClick={scrollTop}>
                        <Logo src="images/lip-logo-black.png"/>
                    </NavLink>
                </ImageWrapper>
            </NavContentWrapper>
        </NavContainer>
    );
};

export default Nav;