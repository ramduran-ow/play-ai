import React from 'react';
import { styled } from 'styled-components';

const PBlockMenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;
const MenuHeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
// const MenuHeaderBackground = styled.div`
// `;

const MenuHeader = styled.div`
    font-family: "Noto Sans";
    font-weight: 500;
    padding: .8rem;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    opacity: 0.3;

`;

const MenuItemWrapper = styled.div`
    display: flex;
    gap: 5.4rem;
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
`;

const Label = styled.p`
    font-family: "Noto Sans";
    font-size: 1.6rem;
    margin: 0;
    color: white;
`;

const PBlockMenu = ({ handlePlayerChange }) => {
    return (
        <PBlockMenuContainer>
            <MenuHeaderWrapper>
                <MenuHeader>
                    REGENERATE SCENE
                </MenuHeader>
            </MenuHeaderWrapper>
            <MenuItemWrapper>
                <MenuItem onClick={() => handlePlayerChange(0)}>
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
                </MenuItem>

            </MenuItemWrapper>
        </PBlockMenuContainer>
    )
}

export default PBlockMenu