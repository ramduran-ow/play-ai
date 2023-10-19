import React, {useState, useEffect} from 'react';
import { styled } from 'styled-components';
import { sizes } from './constants/devices';

const NavContainer = styled.nav`
    position: fixed;
    top: ${props => props.$top};
    transition: top 0.4s ease-out;
    background-color: white;
    border-bottom: 1px solid black;
    width: 100%;
    height: 100px; 
    z-index: 99999;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: ${sizes.tablet}) {
        height: 70px;
    }
    @media only screen and (max-width: ${sizes.mobileL}) {
        height: 50px;
    }
`;

const NavContentWrapper = styled.div`
    max-width: 1440px;
    margin: auto;
`;

const Logo = styled.img`
    max-width: 273px;

    // @media only screen and (max-width: ${sizes.tablet}) {
    //     max-width: 20px;
    // }
    // @media only screen and (max-width: ${sizes.mobileL}) {
    //     height: 50px;
    // }
`;

const Nav = ({ options }) => {
    const [position, setPosition] = useState(window.scrollY);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        let moving = window.scrollY;
        setVisible(position < moving);
        setPosition(moving);
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
                <Logo src="images/lip-logo-black.png"/>
            </NavContentWrapper>
        </NavContainer>
    );
};

export default Nav;