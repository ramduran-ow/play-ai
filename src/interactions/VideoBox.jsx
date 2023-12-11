import PropTypes from "prop-types"
// import { sizes } from "../components/constants/devices"
// import MediaQuery from "react-responsive"
import { motion, useScroll, useTransform } from "framer-motion"
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from "styled-components";

import playButton from '../images/naming/playButton.png'

export { VideoBox }

const OuterContainer = styled.div`
    width: 100%;
    text-align: center;
`

const VideoContainer = styled.div`
    border: 2px solid black;
    box-shadow: 0px 0px 0px 2px black inset;
    border-radius: 4rem;
    width: fit-content;
    overflow: hidden;
    display: inline-block;
    position: relative;
    max-width: 122rem;
    max-height: 90vh;
    margin: 0rem 3.2rem;
`

const Video = styled(motion.video)`
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;

    muted;
    loop;
    autoPlay: false;
    plays-inline: true;

    ref: ${props => props.$ref};
    autoPlay: ${props => props.$autoPlay};
    controls: ${props => props.$controls};
    
`

const Button = styled.img`
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14.8rem;
    height: auto;
`

function VideoBox({ url, child, scrollInfo, autoPlay }) {

    const info = [scrollInfo[0], scrollInfo[0], scrollInfo[1], scrollInfo[1]]
    const { scrollYProgress } = useScroll()
    const opacity = useTransform(scrollYProgress, info, [0, 1, 1, 0])

    const [ref, inView] = useInView({ triggerOnce: true })
    const [hasPlayed, setHasPlayed] = useState(false)
    const [isPlaying, setIsPlaying] = useState(autoPlay)

    useEffect(() => {
        if (inView && !hasPlayed) {
            setHasPlayed(true);
        };
    }, [inView, hasPlayed]);

    return (
        <OuterContainer>
            <VideoContainer>
                <Video id={url} opacity={opacity} ref={ref} autoPlay={autoPlay} controls
                    onClick={() => { setIsPlaying(!isPlaying)}}
                    style={{opacity: opacity}}
                >
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                </Video>
                {!isPlaying && <Button src={playButton} style={{opacity: opacity}} />}
                {child}
            </VideoContainer>
        </OuterContainer>
    );
}

Video.defaultProps = {
    autoPlay: false
}

VideoBox.propTypes = {
    url: PropTypes.string,
    prioritizeHeight: PropTypes.bool,
    scrollInfo: PropTypes.arrayOf(PropTypes.number),
    autoPlay: PropTypes.bool
};