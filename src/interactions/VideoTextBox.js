import { useScroll, useTransform, motion } from "framer-motion"
import { TextContainer } from './TransformingTextBox'
import styled from "styled-components"

export { VideoTextBox, VideoTextScroller }

const VideoTextBackground = styled(motion.div)`
    background-color: #202020;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    margin: auto;
    pointer-events: none;
`

const VideoTextContainer = styled(motion.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: all;
`

function VideoTextBox({ child, scrollInfo }) {

    const betweens = inBetweens(scrollInfo.slice(1,3))
    const textScrollInfo = [scrollInfo[1]].concat(betweens).concat([scrollInfo[2]])
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, scrollInfo, [0, 1, 1, 0]) //Background Opacity
    const textOpacity = useTransform(scrollYProgress, textScrollInfo, [0, 1, 1, 0]) //Text Opacity

    return (
        <VideoTextBackground style={{opacity: opacity}}>
            <VideoTextContainer style={{ opacity: textOpacity}}>
                <TextContainer style={{ width: '75rem' }}>{child}</TextContainer>
            </VideoTextContainer>
        </VideoTextBackground>
    )
}

//Lerping Function returns a value 1/3 and 2/3 between two values
function inBetweens(info) {
    const diff = (info[1] - info[0]) / 3
    return [info[0] + diff, info[0] + 2 * diff]
}

//Scrolls Text in Video Box
function VideoTextScroller({ scrollInfo, scrollToFrom, children }) {
    const { scrollYProgress } = useScroll();
    const scrolling = useTransform(scrollYProgress, scrollInfo, scrollToFrom)

    return (
        <motion.div style={{
            translateY: scrolling
        }}>
            {children}
        </motion.div>
    )
}