import React, {useState, useEffect} from 'react';
import { styled } from 'styled-components';
import { sizes } from './constants/devices';
import { NavLink } from 'react-router-dom';

const NavContainer = styled.nav`
    position: fixed;
    top: ${props => props.$top};
    transition: top 0.4s ease-out;
    background-color: transparent;
    width: 100%;
    height: 100px; 
    z-index: 99999;
    display: flex;
    justify-content: center;
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

const Nav = () => {
    //const [position, setPosition] = useState(window.scrollY);
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        // let moving = window.scrollY;
        // setVisible(position < moving);
        // setPosition(moving);
        setVisible(window.scrollY > 0);
    };

    useEffect(()=> {
        window.addEventListener("scroll", handleScroll);

        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

    const top = visible ? '-100px' : '0';

    return (
        <NavContainer $top={top}>
            <NavContentWrapper>
                <ImageWrapper>
                    <NavLink to={'/'}>
                        <Logo src="images/lip-logo-black.png"/>
                    </NavLink>
                </ImageWrapper>
            </NavContentWrapper>
        </NavContainer>
    );
};

export default Nav;