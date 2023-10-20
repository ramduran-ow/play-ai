import React, {useRef} from 'react';
import { styled } from 'styled-components';
import { sizes } from './constants/devices';
import { motion, useScroll, scrollYProgress, cubicBezier, useMotionValueEvent } from 'framer-motion';

const Block = styled.div`
    min-height: 300vh;
    // background-color: black;
    // padding: 10rem;
`;

const HeaderContainer = styled.section`
    min-height: 100vh;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    z-index: -1;
`;

const ArticleHeaderBackground = styled.div`
    background-image: url(${props => props.$backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
    max-height: 100vh;
    /* height: 100%; */
    width: 100%;
`;

const ArticleHeaderOverlay = styled(motion.div)`
    min-height: 100vh;
    width: 100%;
    background-color: black;
    position: absolute;
`;

const ContentWrapper = styled(motion.div)`
    min-height: 100vh;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContentHeader = styled.h1`
    font-family: 'Noe Display';
    font-weight: 500;
    font-size: 10rem;
    text-align: center;
    // max-width: 55%;
    margin: 0;
    color: black;

    @media only screen and (max-width: ${sizes.tablet}) {
        font-size: 3.2rem;
    }
`;

const ContentSubheader1 = styled.p`
font-family: 'Noto Sans';
    font-size: 2rem;
`;

const ContentSubheader2 = styled.p`
    font-size: 2rem;
`;

const ArticleHeader = ({ headerBackground }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 0", "0.5 0.5"] // try ending somewhere in the middle or 3/4
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest);
    });

    return (
        <Block>
        <HeaderContainer>
            <ArticleHeaderBackground $backgroundImage={headerBackground} />
            <ArticleHeaderOverlay 

                style={{ opacity: scrollYProgress }}
            />
            <ContentWrapper
                initial="hidden"
                whileInView="visible"
                transition={{
                    duration: 1, 
                    delay: scrollYProgress * 0.6,
                    ease: cubicBezier(0.3,0,0.1,1)
                }}
                variants={{
                    visible: { opacity: 1, marginBottom: 0 },
                    hidden: { opacity: 0, marginBottom: '-200px' }
                }}
            >
                <ContentSubheader1>
                        &nbsp;NAMING&nbsp;&nbsp;+&nbsp;&nbsp;AI&nbsp;&nbsp;&gt;&nbsp;&nbsp;SERIES INTRO&nbsp;
                </ContentSubheader1>
                <ContentHeader>We need<br/>to talk about AI</ContentHeader>
                <ContentSubheader2>
                    By Tom Ajello | [Month] 2023
                </ContentSubheader2>
            </ContentWrapper>
        </HeaderContainer>
        </Block>

    );
};

export default ArticleHeader;