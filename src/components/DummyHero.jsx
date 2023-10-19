import React from 'react';
import { styled } from 'styled-components';

const DummyHeroContainer = styled.section`
min-height: 100vh;
background-color: lightblue;
`;


const DummyHero = () => {
    return (
        <DummyHeroContainer />
    );
};

export default DummyHero;