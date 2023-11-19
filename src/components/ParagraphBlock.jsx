import React, {useRef} from 'react';
import { styled } from 'styled-components';
// import STRINGS from './constants/strings';
import { motion, useScroll, cubicBezier, useTransform } from 'framer-motion';
import { sizes } from './constants/devices';
//import TypeIt from "typeit-react";
// import useOnScreen from '../useOnScreenHook';
import PBlockMenu from './PBlockMenu';
import { OpacityHeading } from './Manifesto/interactions/OpacityContent';
import { TransformingTextBox } from './Manifesto/interactions/TransformingContent';


const PBlockContainer = styled(motion.section)`
    min-height: 200vh;
    position: sticky;
    top: 0;
    // display: flex;
    // justify-content: center;
    background-image: url(${props => props.$backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    z-index: 0;
    // border: 3px solid red;

    @media screen and (min-height: 900px) {
        min-height: 200vh;
    }
`;

// const PBlockBackground = styled.div`
//     background-image: url(${props => props.$backgroundImage});
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//     background-attachment: fixed;
//     margin: 0;
//     padding: 0;
//     max-height: 100vh;
//     /* height: 100%; */
//     width: 100%;
// `;

const PBlockOverlay = styled(motion.div)`
    //position: sticky;
    min-height: 100vh;
    width: 100%;
    background-color: black;
    position: absolute;
    // background-image: url(${props => props.$backgroundImage});
    // background-size: cover;
    // background-repeat: no-repeat;
    // background-position: center;
    // background-attachment: fixed;
    z-index: -2;
`;

const PBlockContentWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10rem;
`;

const PBlockContent = styled(motion.h2)`
    font-family: 'Noe Display';
    font-weight: 500;
    font-size: 4rem;
    text-align: center;
    max-width: 1100px;
    // margin: auto;
    padding: 0rem 6rem;
    color: white;

    @media only screen and (max-width: ${sizes.tablet}) {
        font-size: 3.2rem;
        padding: 0rem 3.2rem;
    }
    @media only screen and (max-width: ${sizes.mobileL}) {
        max-width: 85%;
    }
`;

const ParagraphBlock = ({ 
    backgroundImage, 
    contentString, 
    scrollYArray, 
    opacityArray, 
    opacityOverride, 
    scrollOffset,
    typed,
    handlePlayerChange,
    hasMenu,
    scrollInfo,
    selectedPlayer
}) => {
    const ref = useRef(null);
    const contentRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: scrollOffset
      });
    const opacity = useTransform(scrollYProgress, scrollYArray, opacityArray);

    // const isVisible = useOnScreen(contentRef);
    // const typedContent = (
    //     <PBlockContent>
    //         <TypeIt
    //             options={{
    //                 strings: [contentString],
    //                 speed: 4,
    //                 waitUntilVisible: true,
    //                 lifeLike: true,
    //             }}
    //         />
    //     </PBlockContent>
    // );

    const normalContent = (
        <PBlockContent
            // className='p-block-content'
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            transition={{
                duration: 1, 
                delay: opacity * 0.6,
                ease: cubicBezier(0.3,0,0.1,1)
            }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 200 }
            }}
        >
            {contentString}
        </PBlockContent>
    );

    return (
        <PBlockContainer $backgroundImage={backgroundImage} ref={ref}>
            {/* <PBlockBackground $backgroundImage={backgroundImage} /> */}
            <PBlockOverlay 
                style={{ opacity: (opacityOverride || opacityOverride === 0) ? opacityOverride : opacity }}
                $backgroundImage={backgroundImage}
            />
            <PBlockContentWrapper ref={contentRef}>
                {/* {(isVisible && typed) ? typedContent : normalContent} */}
                {/* {normalContent} */}
                {hasMenu ? normalContent :
                    <TransformingTextBox positions={[0, 0, 0, 0]} scrollInfo={scrollInfo} alignment={'center'} child={
                        <OpacityHeading scrollInfo={scrollInfo} simpleFade={true} baseOpacity={0} text={
                            [contentString]
                        } />
                    } />
                }
                {hasMenu && <PBlockMenu selectedPlayer={selectedPlayer} handlePlayerChange={handlePlayerChange}/>}
            </PBlockContentWrapper>
        </PBlockContainer>
    );
};

export default ParagraphBlock;