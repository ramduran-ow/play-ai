import React from 'react';
import { styled } from 'styled-components';
import { sizes } from './constants/devices';
import STRINGS from './constants/strings';

const ArticleCardContainer = styled.article`
    background-color: white;
    border-radius: 16px;
    flex: 1;
    min-width: 386px;
    //max-width: 400px;
    /* height: 860px; */
    /* position: relative; */
    min-height: 55em;

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
    border-radius: 16px 16px 0px 0px;
`;

const ArticleContent = styled.div`
    padding: 3.2em;
    display: flex;
    flex-direction: column;
    gap: 1.6em;
    white-space: wrap;
`;

const ArticleInfo = styled.div`
    font-family: "Noto Sans";
    font-size: 1.6rem;
    margin: 0;
    text-align: left;

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 1.4rem;
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

const ArticleCard = ({ headerImg, header, subHeader, articleInfo }) => {
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
        

    }

    return (
        <ArticleCardContainer>
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
};

export default ArticleCard;