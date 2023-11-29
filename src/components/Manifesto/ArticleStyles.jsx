import React from 'react';
import { styled } from 'styled-components';
// import STRINGS from './constants/strings';
import { sizes } from '../constants/devices';

const ArticleHeader = styled.div`
    position: fixed;
    font-family: 'Noe Display Medium';
    font-weight: 500;
    font-size: 5rem;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;

    padding-left: clamp(6rem, calc((100vw - 1220px)/2), calc((100vw - 1220px)/2));
    padding-right: clamp(6rem, calc((100vw - 1220px)/2), calc((100vw - 1220px)/2));
    transform: translateY(-50%);
    top: 50%;

    @media only screen and (max-width: ${sizes.tablet}) {
        font-size: 4rem;
        gap: 4rem;
    }

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 3.2rem;
        padding-left: 3.2rem;
        padding-right: 3.2rem;
    }
`;

const ArticleBody = styled.p`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    text-align: left;
    padding-left: 3.2rem;
    padding-right: 3.2rem;

    max-width: 750px;
    margin: 2rem auto 2rem auto;

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 1.6rem;
        padding-left: 3.2rem;
        padding-right: 3.2rem;
    }
`;

const ArticleList = styled.li`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    text-align: left;
    padding-left: 3.2rem;
    padding-right: 3.2rem;

    max-width: 750px;
    margin: 0 auto 0 auto;

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 1.6rem;
        padding-left: 3.2rem;
        padding-right: 3.2rem;
    }
`;

const ArticleSubHeading = styled.h2`
    font-family: 'Noe Display Medium';
    font-weight: 500;
    font-size: 5rem;
    text-align: left;
    padding-left: 3.2rem;
    padding-right: 3.2rem;

    max-width: 750px;
    margin: 10rem auto 2rem auto;

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 3.2rem;
        padding-left: 3.2rem;
        padding-right: 3.2rem;
    }
`

const ArticleHeaderBlock = ({ contentString }) => {
    return (
        <ArticleHeader>
            {contentString}
        </ArticleHeader>
    )
}

const ArticleBodyBlock = ({ contentString }) => {
    return (
        <ArticleBody>
            {contentString}
        </ArticleBody>
    )
}

const ArticleBodyParagraghsBlock = ({ contentStrings, scrollTimings }) => {
    return (
        contentStrings.map(strings =>
            <ArticleBodyBlock contentStrings={strings} scrollInfo={scrollTimings[0]} />
            // <ArticleBodyBlock contentStrings={strings} />
        )
    )
}

export { ArticleHeaderBlock, ArticleBodyBlock, ArticleBodyParagraghsBlock, ArticleBody, ArticleSubHeading, ArticleHeader, ArticleList };