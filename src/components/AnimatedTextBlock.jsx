import React from 'react';
import { styled } from 'styled-components';
import STRINGS from './constants/strings';
import { motion, useScroll, useTransform, cubicBezier } from 'framer-motion';
import { sizes } from './constants/devices';

const AnimatedTextBlockContainer = styled.section`
    background-color: black;
    min-height: 250vh;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    z-index: 1;
`;

const AnimatedTextBlockBackground = styled.div`
    background-image: url(${props => props.$backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
    max-height: 120vh;
    /* height: 100%; */
    width: 100%;
`;

const AnimatedTextBlockOverlay = styled(motion.div)`
    min-height: 100vh;
    width: 100%;
    background-color: black;
    position: absolute;
`;

const AnimatedTextBlockContentWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AnimatedTextBlockContent = styled(motion.h2)`
    font-family: 'Noe Display';
    font-weight: 500;
    font-size: 4rem;
    text-align: center;
    max-width: 55%;
    color: white;

    @media only screen and (max-width: ${sizes.tablet}) {
        font-size: 3.2rem;
    }
`;

const AnimatedTextBlock = ({ contentString }) => {
    const { scrollYProgress } = useScroll();

    return (
        <AnimatedTextBlockContainer>
            <AnimatedTextBlockBackground />
            <AnimatedTextBlockOverlay 
                style={{ opacity: scrollYProgress }}
            />
            <AnimatedTextBlockContentWrapper>
                <AnimatedTextBlockContent
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
                    {contentString}
                </AnimatedTextBlockContent>
            </AnimatedTextBlockContentWrapper>
        </AnimatedTextBlockContainer>
    );
};

export default AnimatedTextBlock;