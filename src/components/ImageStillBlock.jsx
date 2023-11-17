import React, {useRef} from 'react'
import { styled } from 'styled-components';
import { motion, useScroll, useTransform, } from 'framer-motion';

const ImageStillBlockContainer = styled(motion.section)`
    min-height: 250vh;
    top: 0;
    // display: flex;
    // justify-content: center;
    background-image: url(${props => props.$backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    z-index: -1;
    // border: 3px solid yellow;
`;

const Overlay = styled(motion.div)`
    position: sticky;
    min-height: 250vh;
    width: 100%;
    background-color: black;
    position: absolute;
    // background-image: url(${props => props.$backgroundImage});
    // background-size: cover;
    // background-repeat: no-repeat;
    // background-position: center;
    // background-attachment: fixed;
`;

const ImageStillBlock = ({ backgroundImage, scrollYArray, opacityArray, opacityOverride, scrollOffset, sectionHeight }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: scrollOffset
      });
    const opacity = useTransform(scrollYProgress, scrollYArray, opacityArray);

    return (
        <ImageStillBlockContainer 
            ref={ref} 
            $backgroundImage={backgroundImage}
            $sectionHeight={sectionHeight}
        >
            <Overlay style={{ opacity: opacity }}/>
        </ImageStillBlockContainer>
    )
}

export default ImageStillBlock