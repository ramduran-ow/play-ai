import React from 'react';
import { styled } from 'styled-components';
import STRINGS from './constants/strings';
import ArticleCard from './ArticleCard';
import { sizes } from './constants/devices';

const ArticleBlockContainer = styled.section`
    background-color: var(--black);
    display: flex;
    flex-direction: column;
    position: relative;
`;

const ArticleBlockHeader = styled.h3`
    font-size: 5rem;
    font-family: 'Noe Display';
    font-weight: 500;
    color: white;
    margin: 0;
    position: absolute;
    left: 6rem;
    top: 10rem;

    @media only screen and (min-width: 1560px) {
        left: calc((100vw - 1440px) / 2);
    }

    @media only screen and (max-width: ${sizes.tablet}) {
        position: relative;
        font-size: 4rem;
        margin-top: 6rem;
        top: auto;
        // top: 6rem;
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        width: 400px; /* Need a specific value to work */
    }

    @media only screen and (max-width: ${sizes.mobileL}) {
        font-size: 3.2rem;
        width: 300px; /* Need a specific value to work */
    }
`;

const CardContainerWrapper = styled.div``;

const CardContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    padding: 18.7rem 6rem 10rem 6rem;
    max-width: 1440px;
    margin: auto;
    white-space: nowrap;
    display: flex;
    gap: 3.2em;

    @media only screen and (max-width: ${sizes.tablet}) {
        padding: 4rem 3.2rem 6rem 3.2rem;
    }
`;

// const SeeAllLinkWrapper = styled.div`
//     @media only screen and (max-width: ${sizes.tablet}) {
//         position: relative;
//         margin-bottom: 6rem;
//     }
// `;

// const SeeAllLink = styled.a`
//     font: 'Noto Sans';
//     font-size: 2rem;
//     font-weight: 500;
//     padding: .4rem;
//     color: white;
//     border-bottom: 1px solid white;
//     position: absolute;
//     right: 6rem;
//     bottom: 10rem;

//     @media only screen and (min-width: 1560px) {
//         right: calc((100vw - 1440px) / 2);
//     }

//     @media only screen and (max-width: ${sizes.tablet}) {
//         position: relative;
//         margin-bottom: 6rem;
//         bottom: auto;
//         left: 0; 
//         right: 0; 
//         margin-left: auto; 
//         margin-right: auto; 
//         width: 172px; /* Need a specific value to work */
//     }
// `;

const ArticleBlock = () => {
    return (
        <ArticleBlockContainer>
            <ArticleBlockHeader>
                {STRINGS.ARTICLE_BLOCK_HEADER}
            </ArticleBlockHeader>
            <CardContainerWrapper>
                <CardContainer>
                    {/* <ArticleCard 
                        headerImg='images/article-img-1.webp'
                        header={STRINGS.ARTICLE_HEADER_1}
                        subHeader={STRINGS.ARTICLE_SUBHEADER_1}
                        articleInfo={'manifesto'}
                        link={'https://scrollingmodules--meek-kataifi-4c3a70.netlify.app/'}
                    /> */}
                    <ArticleCard 
                        headerImg='images/article-img-2.webp'
                        header={STRINGS.ARTICLE_HEADER_2}
                        subHeader={STRINGS.ARTICLE_SUBHEADER_2}
                        articleInfo={'naming-intro'}
                        link={''}
                    />
                    <ArticleCard 
                        headerImg='images/article-img-3.webp'
                        header={STRINGS.ARTICLE_HEADER_3}
                        subHeader={STRINGS.ARTICLE_SUBHEADER_4}
                        articleInfo={'naming-experiment'}
                        link={'/naming-experiment'}
                    />
                    <ArticleCard 
                        isGhost
                        header={STRINGS.ARTICLE_HEADER_4}
                        subHeader={STRINGS.ARTICLE_SUBHEADER_3}
                        articleInfo={'customer-research-ghost'}
                    />
                </CardContainer>
            </CardContainerWrapper>
            {/* <SeeAllLinkWrapper>
                <SeeAllLink>
                    SEE ALL ARTICLES
                </SeeAllLink>
            </SeeAllLinkWrapper> */}
        </ArticleBlockContainer>
    );
};

export default ArticleBlock;