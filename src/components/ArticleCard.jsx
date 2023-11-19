import React from 'react';
import { styled } from 'styled-components';
import { sizes } from './constants/devices';

const ArticleCardContainer = styled.a`
    background-color: white;
    ${props => props.$isGhost && 'background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.00) 100%);'}
    color: ${props => props.$isGhost ? 'white' : 'black'};
    border-radius: 16px;
    flex: 1;
    min-width: 386px;
    min-height: 55em;
    transition: transform .3s ease-out;
    ${props => props.$isGhost && 'border: 1px solid white;'}

    ${props => props.$isGhost ?
        `&:hover {
            color: white;
            cursor: not-allowed;
        }`
        :
        `&:hover {
            cursor: pointer;
            color: black;
            mix-blend-mode: screen;
        }`
    }


    @media only screen and (max-width: ${sizes.tablet}) {
        max-height: 42.5em;
    }

    @media only screen and (max-width: ${sizes.mobileL}) {
        min-width: 280px;
        min-height: 42.5em;
    }
`;

const ArticleImg = styled.img`
    width: 100%;
    height: 354px;
    border-radius: 16px 16px 0px 0px;

    @media only screen and (max-width: ${sizes.tablet}) {
        max-height: 275px;
    }
    @media only screen and (max-width: ${sizes.mobileL}) {
        max-height: 235px;
    }
`;

const GhostImg = styled.div`
    width: 100%;
    height: 354px;
    border-radius: 16px 16px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-bottom: 1px solid white;
    font-family: 'Noe Display';
    font-size: 3.2rem;

    @media only screen and (max-width: ${sizes.tablet}) {
        max-height: 275px;
    }
    @media only screen and (max-width: ${sizes.mobileL}) {
        max-height: 235px;
    }
`;

const ArticleContent = styled.div`
    padding: 3.2em;
    display: flex;
    flex-direction: column;
    gap: 1.6em;
    white-space: wrap;

    @media only screen and (max-width: ${sizes.mobileL}) {
        padding: 1.6rem;
        gap: 0.8em;
    }
`;

const ArticleInfo = styled.div`
    font-family: "Noto Sans";
    font-size: 1.6rem;
    margin: 0;
    text-align: left;
    ${props => props.$isGhost && 'color: white'}


    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 1.2rem;
    }
`;

const ArticleHeader = styled.h3`
    font-family: 'Noe Display';
    font-weight: 500;
    font-size: 3.2rem;
    margin: 0;
    width: 90%;
    text-align: left;

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 2rem;
    }
`;

const ArticleSubheader = styled.p`
    font-family: "Noto Sans";
    font-weight: 400;
    font-size: 1.6rem;
    margin: 0;
    text-align: left;
    margin-bottom: 2.4rem;

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 1.4rem;
    }
`;

const ArticleCard = ({ headerImg, header, subHeader, articleInfo, link, isGhost }) => {
    let infoString;
    switch(articleInfo){
        case('manifesto'):
            infoString = (
                <mark style={{backgroundColor: '#E5FFD1' }}>
                    &nbsp;MANIFESTO&nbsp;
                </mark>
            );
            break;
        case('naming-intro'):
            infoString = (
                <mark>
                    &nbsp;NAMING&nbsp;&nbsp;+&nbsp;&nbsp;AI&nbsp;&nbsp;&gt;&nbsp;&nbsp;SERIES INTRO&nbsp;
                </mark>
            );
            break;
        case('naming-experiment'):
            infoString = (
                <mark>
                    &nbsp;NAMING&nbsp;&nbsp;+&nbsp;&nbsp;AI&nbsp;&nbsp;&gt;&nbsp;&nbsp;EXPERIMENT&nbsp;
                </mark>
            );
            break;
        case('customer-research-ghost'):
            infoString = (
                <mark style={{backgroundColor: '#6B6B6B', color: 'white'}}>
                    &nbsp;CONSUMER RESEARCH&nbsp;&nbsp;+&nbsp;&nbsp;AI&nbsp;&nbsp;&gt;&nbsp;&nbsp;INTRO&nbsp;
                </mark>
            );
            break;
        default:
            infoString = (
                <mark style={{backgroundColor: '#E5FFD1' }}>
                    &nbsp;ARTICLE INFO&nbsp;
                </mark>
            );
    }

    const GhostCard = (
        <ArticleCardContainer $isGhost>
            <div>
                <GhostImg>
                    Coming Soon!
                </GhostImg>
                <ArticleContent>
                    <ArticleInfo>
                        {infoString}
                    </ArticleInfo>
                    <ArticleHeader>
                        {header}
                    </ArticleHeader>
                    <ArticleSubheader>
                        {subHeader}
                    </ArticleSubheader>
                </ArticleContent>
            </div>
        </ArticleCardContainer>
    );

    const NormalCard = (
        <ArticleCardContainer href={link}>
            <div>
                <ArticleImg src={headerImg} />
                <ArticleContent>
                    <ArticleInfo>
                        {infoString}
                    </ArticleInfo>
                    <ArticleHeader>
                        {header}
                    </ArticleHeader>
                    <ArticleSubheader>
                        {subHeader}
                    </ArticleSubheader>
                </ArticleContent>
            </div>
        </ArticleCardContainer>
    );

    return (
        isGhost ? GhostCard : NormalCard
    );
};

export default ArticleCard;