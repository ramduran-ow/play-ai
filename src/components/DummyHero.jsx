import React from 'react';
import { styled } from 'styled-components';

const DummyHeroContainer = styled.section`
    min-height: 100vh;
    background-color: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
`;


const DummyHero = () => {
    return (
        <DummyHeroContainer>
            🤖
        </DummyHeroContainer>
    );
};

export default DummyHero;