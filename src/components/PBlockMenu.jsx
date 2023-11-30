import React from 'react';
import { styled } from 'styled-components';
import { sizes } from './constants/devices';

const PBlockMenuContainer = styled.nav`
    font-family: "noto-sans-display-semiconden", sans-serif;
    font-weight: 400;
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 0rem 3.2rem;
`;
const MenuHeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
// const MenuHeaderBackground = styled.div`
// `;

const MenuHeader = styled.div`
    padding: .6rem 1.1rem;
    border-radius: 4px;
    font-size: 16px;
    // background-color: white;
    // opacity: 0.3;
    background: rgba(255, 255, 255, 0.3);
    color: white;
`;

const MenuItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5.4rem;

    @media only screen and (max-width: 950px) {
        max-width: 696px;
    }
`;

const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    width: 134px;
`;

const Icon = styled.img`
    max-height: 100px;
    max-width: 100px;
    background-image: url(${props => props.$backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    cursor: pointer;

    @media only screen and (max-width: ${sizes.mobileL}) {
        max-height: 80px;
        max-width: 80px;
    }
`;

const Label = styled.p`
    font-size: 1.6rem;
    margin: 0;
    color: white;
    ${props => props.$isActive && 'border-bottom: 1px solid white'};
`;

const PBlockMenu = ({ selectedPlayer, handlePlayerChange, handleSubHeaderChange, handleBackgroundChange }) => {
    let options=[
        {
            label: 'FUTURISTIC',
            icon:  'images/menu-images/symbol.png'
        },
        {
            label: 'DOG(E) MODE',
            icon:  'images/menu-images/dog.png'
        },
        {
            label: 'SHAKESPEARINATOR',
            icon:  'images/menu-images/quill.png'
        },
        {
            label: 'HEAVY METAL-IC',
            icon:  'images/menu-images/guitar.png'
        },
        {
            label: 'GEN-Z-IFY',
            icon:  'images/menu-images/sphere.png'
        },
    ]

    const menuItems = options.map((option, index) => {
            return (
                <MenuItem 
                    onClick={() => {
                        if(selectedPlayer !== index) {
                            handleBackgroundChange()
                            handlePlayerChange(index)
                            handleSubHeaderChange(false)
                            
                        }
                    }
                }>
                    <Icon src={option.icon}/>
                    <Label $isActive={selectedPlayer === index}>
                        {option.label}
                    </Label>
                </MenuItem>
            );
        }
    );

    return (
        <PBlockMenuContainer>
            <MenuHeaderWrapper>
                <MenuHeader>
                    REGENERATE SCENE
                </MenuHeader>
            </MenuHeaderWrapper>
            <MenuItemWrapper>
            {menuItems}
                {/* <MenuItem onClick={() => handlePlayerChange(0)}>
                    <Icon src={'images/menu-images/symbol.png'}/>
                    <Label>
                        FUTURISTIC
                    </Label>
                </MenuItem>
                <MenuItem onClick={() => handlePlayerChange(1)}>
                    <Icon src={'images/menu-images/dog.png'}/>
                    <Label>
                        DO(G)E MODE
                    </Label>
                </MenuItem>
                <MenuItem onClick={() => handlePlayerChange(2)}>
                    <Icon src={'images/menu-images/quill.png'}/>
                    <Label>
                        SHAKESPEARINATOR
                    </Label>
                </MenuItem>
                <MenuItem onClick={() => handlePlayerChange(3)}>
                    <Icon src={'images/menu-images/guitar.png'}/>
                    <Label>
                        HEAVY METAL-IC
                    </Label>
                </MenuItem>
                <MenuItem onClick={() => handlePlayerChange(4)}>
                    <Icon src={'images/menu-images/sphere.png'}/>
                    <Label>
                        GEN-Z-IFY
                    </Label>
                </MenuItem> */}
            </MenuItemWrapper>
        </PBlockMenuContainer>
    )
}

export default PBlockMenu