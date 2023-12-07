import React, {useRef, useState} from 'react';
import { styled } from 'styled-components';
import STRINGS from './constants/strings';
import { motion, useScroll, cubicBezier, useTransform } from 'framer-motion';
import { sizes } from './constants/devices';
import TypeIt from "typeit-react";
// import useOnScreen from '../useOnScreenHook';
import PBlockMenu from './PBlockMenu';
import { OpacityHeading } from '../interactions/OpacityContent';
import { TransformingTextBox } from '../interactions/TransformingContent';
// import { TypeAnimation } from 'react-type-animation';
// import SpriteSheet from '../images/spritesheet-test.webp'


const PBlockContainer = styled(motion.section)`
    min-height: ${props => props.$sectionHeight}vh;
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

    @media only screen and (max-width: 957px) {
        gap: 8rem;
    }
    @media only screen and (max-width: ${sizes.tablet}) {
        gap: 6.4rem;
    }
`;

const PBlockContent = styled(motion.h2)`
    font-family: 'Noe Display';
    font-weight: 500;
    font-size: 5rem;
    text-align: center;
    max-width: 1200px;
    // margin: auto;
    padding: 0rem 6rem;
    color: white;
    margin: 0;

    @media only screen and (max-width: ${sizes.laptop}) {
        font-size: 4rem;
    }
    @media only screen and (max-width: 957px) {
        font-size: 3.2rem;
    }
    @media only screen and (max-width: ${sizes.mobileL}) {
        padding-top: 7.4rem;
        max-width: 85%;
    }
`;

const TextWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    gap: ${props => props.$hasMenu ? '2rem' : '6rem'};
    min-height: 432px;

    @media only screen and (max-width: ${sizes.laptop}) {
        min-height: 456px;
    }
    @media only screen and (max-width: 957px) {
        min-height: 305px;
    }
`;

const RegenerateBadge = styled.div`
    font-family: 'B612 Mono', monospace;
    padding: .6rem 1.1rem;
    border-radius: 4px;
    font-size: 3.2rem;
    background: rgba(0, 0, 0, 1);
    color: white;
`;

export const PBlockSubheader = styled(motion.p)`
    margin: 0;
    font-family: 'Noto Sans';
    font-size: 2rem;
    text-align: center;
    color: white;
    max-width: 700px;

    @media only screen and (max-width: ${sizes.tablet}) {
        font-size: 1.6rem;
    }
`;

// const glitchAnimation = keyframes`
//     100% { background-position: -4000px; }
// `;

// const GlitchScreen = styled.div`
//     height: 1000px;
//     width: 1000px;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     background: url(${SpriteSheet}) left center;
//     animation: ${glitchAnimation} 1s steps(3) infinite; 
// `;

const ParagraphBlock = ({ 
    backgroundImage, 
    contentString, 
    subHeaderString,
    scrollYArray, 
    opacityArray, 
    opacityOverride, 
    scrollOffset,
    handlePlayerChange,
    hasMenu,
    scrollInfo,
    selectedPlayer,
    glitchImage,
    sectionHeight
}) => {
    const [subHeaderVisible, setSubHeaderVisible] = useState(false);
    const [glitchVisible, setGlitchVisible] = useState(false);
    const ref = useRef(null);  
    const contentRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: scrollOffset
      });
    const opacity = useTransform(scrollYProgress, scrollYArray, opacityArray);

    const handleSubHeaderChange = (newState) => {
        setSubHeaderVisible(newState);
    }

    const handleBackgroundChange = () => {
        
        setGlitchVisible(true);
        setTimeout(() => {
            setGlitchVisible(false);
            //window.scrollTo() <-- use window.innerheight to calculate beginning of new section
          }, 1500);
    }

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

    const GlitchImage = (
        <PBlockContainer $backgroundImage={glitchImage} style={{zIndex: 2}}>
            <PBlockContentWrapper>
                <RegenerateBadge>
                    ...regenerating content...
                </RegenerateBadge>
            </PBlockContentWrapper>
        </PBlockContainer>
    );

    // const GlitchSpriteSheet = (
    //     <PBlockContainer $backgroundImage={glitchImage}>
    //         <PBlockContentWrapper>
    //             <RegenerateBadge>
    //                 ...regenerating content...
    //             </RegenerateBadge>
    //         </PBlockContentWrapper>
    //     </PBlockContainer>
    // );

    const SubHeader = (
        <PBlockSubheader
            key={subHeaderString}
            // initial="hidden"
            // whileInView="visible"
            // style={{
            //     display: subHeaderVisible ? 'block' : 'none'
            // }}
            // transition={{
            //     duration: 1, 
            //     delay: opacity * 0.5,
            //     ease: cubicBezier(0.3,0,0.1,1)
            // }}
            // variants={{
            //     visible: { opacity: 1, y: 0 },
            //     hidden: { opacity: 0, y: 200 }
            // }}
        >
            <TypeIt
                key={subHeaderString}
                options={{
                    strings: [subHeaderString],
                    speed: 1,
                    waitUntilVisible: true,
                    lifeLike: true,
                }}
            />
        </PBlockSubheader>    
    );

    const NormalContent = (
        <TextWrapper key={contentString} $hasMenu={hasMenu}>
            <PBlockContent
                initial="hidden"
                whileInView="visible"
                transition={{
                    duration: 1.5, 
                    delay: opacity * 0.6,
                    ease: cubicBezier(0.3,0,0.1,1)
                }}
                variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 }
            }}>
                {/* <TypeAnimation
                    key={contentString}
                    sequence={[
                        contentString,
                        1000,
                    ]}
                    speed={90}
                    repeat={1}
                /> */}
                {/* {contentString} */}
                <TypeIt
                    key={contentString}
                    options={{
                        strings: [contentString],
                        speed: 0.6,
                        waitUntilVisible: true,
                        lifeLike: true,
                        afterComplete: () => setSubHeaderVisible(true)
                    }}
                />
            </PBlockContent>
            {subHeaderVisible && SubHeader}
        </TextWrapper>
    );

    const PBlock = (
        <PBlockContainer 
            $backgroundImage={backgroundImage} 
            $sectionHeight={sectionHeight}
            ref={ref}
        >
            {/* <PBlockBackground $backgroundImage={backgroundImage} /> */}
            <PBlockOverlay 
                style={{ opacity: (opacityOverride || opacityOverride === 0) ? opacityOverride : opacity }}
            />
            <PBlockContentWrapper ref={contentRef}>
                {/* {(isVisible && typed) ? typedContent : NormalContent} */}
                {/* {NormalContent} */}
                {hasMenu ? NormalContent :
                    <TransformingTextBox positions={[0, 0, 0, 0]} scrollInfo={scrollInfo} alignment={'center'} child={
                        <OpacityHeading 
                            scrollInfo={scrollInfo} 
                            simpleFade={true} 
                            baseOpacity={0} 
                            text={[contentString]}
                            subHeader={STRINGS.P_BLOCK_DEFAULT_SUB}
                        />
                    } />
                }
                {hasMenu && 
                    <PBlockMenu 
                        selectedPlayer={selectedPlayer} 
                        handlePlayerChange={handlePlayerChange}
                        handleSubHeaderChange={handleSubHeaderChange}
                        handleBackgroundChange={handleBackgroundChange}
                    />
                }
            </PBlockContentWrapper>
        </PBlockContainer>
    );

    return (
        glitchVisible ? GlitchImage : PBlock
    );
};

export default ParagraphBlock;