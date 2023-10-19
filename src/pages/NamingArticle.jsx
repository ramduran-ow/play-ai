import React, {useState} from 'react';
import { styled } from 'styled-components';
import ArticleHeader from '../components/ArticleHeader';
import { useScroll, scrollYProgress, scrollInfo, useMotionValueEvent } from 'framer-motion';
import ParagraphBlock from '../components/ParagraphBlock';
import AnimatedTextBlock from '../components/AnimatedTextBlock';
import STRINGS from '../components/constants/strings';

const Container = styled.div`
    // min-height: 300vh;
    // background-color: black;
    // padding: 10rem;
`;

const NamingArticle = ({ options }) => {
    const [currentContent, setCurrentContent] = useState([]);

    const testContent = [
        'Lippincott has been creating standout brand names for 80 years. In those early days, a physical thesaurus was the most valuable naming tool. From those well-worn pages, household names such as Sprite and Wisk emerged, and words were paired together in novel ways to invent the likes of Duracell, Citgo, and Verizon.',
        'Those analog days of name development are a distant memory in today’s landscape. In a world with 64.4 million active trademarks, and an average adult vocabulary of 30,000 words, finding a strong, available name is harder than ever – and that tattered thesaurus no longer “sufficiently suffonsifies.”',
        'As a result, naming might just be one of the ripest territories for AI enhancement in the world of branding, and we’ve only scratched the surface.',
        'As a result, naming might just be one of the ripest territories for AI enhancement in the world of branding, and we’ve only scratched the surface.'
    ];

    //let currentContent = ['', testContent[0], testContent[1], testContent[2]];

    const {scrollY, scrollYProgress } = useScroll();

    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     console.log('latest', latest);
    //     if(latest < 0.25 ) {
    //         currentContent = ['', testContent[0], testContent[1], testContent[2]];
    //     }

    //     if(latest > 0.25 && latest < 0.5) {
    //         currentContent = testContent;
    //     }

    //     if(latest > 0.5 && latest < 0.75) {
    //         currentContent = [testContent[1], testContent[2], testContent[3], ''];
    //     }

    //     if(latest > 0.75) {
    //         currentContent = [ testContent[2], testContent[3], '', ''];
    //     }
    // })

    return (
        <Container>
            <ArticleHeader headerBackground={'/images/article-header-gradient-manifesto.png'} />
            <AnimatedTextBlock contentString={STRINGS.P_BLOCK} />
        </Container>
    );
};

export default NamingArticle;