import PropTypes from "prop-types"
import { sizes } from "../components/constants/devices"
// import MediaQuery from "react-responsive"
import { motion, useScroll, useTransform } from "framer-motion"
import React, { useState } from 'react';
// import { useEffect } from "react";
// import { useInView } from 'react-intersection-observer';
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
    plays-inline: true;

    ref: ${props => props.$ref};
    autoPlay: ${props => props.$autoPlay};
    controls: ${props => props.$controls};
    onLoadedData: ${props => props.$onLoadedData};
`

const Thumbnail = styled.img`
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
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

function VideoBox({ url, child, scrollInfo, autoPlay, thumb }) {

    let videoSource = chooseVideoSource(url)

    const videoInfo = [scrollInfo[0], scrollInfo[0], scrollInfo[2], scrollInfo[2]]
    const buttonInfo = [scrollInfo[0], scrollInfo[0], scrollInfo[1], scrollInfo[1]]
    const { scrollYProgress } = useScroll()
    const videoOpacity = useTransform(scrollYProgress, videoInfo, [0, 1, 1, 0])
    const buttonOpacity = useTransform(scrollYProgress, buttonInfo, [0, 1, 1, 0])

    // const [ref, inView] = useInView({ triggerOnce: true })
    // const [hasPlayed, setHasPlayed] = useState(false)
    const [isPlaying, setIsPlaying] = useState(autoPlay)
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)

    // useEffect(() => {
    //     if (inView && !hasPlayed) {
    //         setHasPlayed(true);
    //     };
    // }, [inView, hasPlayed]);

    const onLoadedData = () => {
        setIsVideoLoaded(true);
    };

    return (
        <OuterContainer>
            <VideoContainer>
                <Video autoPlay={autoPlay} controls
                    src={videoSource}
                    onLoadedData={onLoadedData}
                    onClick={() => { setIsPlaying(!isPlaying) }}
                    style={{ opacity: videoOpacity }}
                />
                <Thumbnail
                    src={thumb}
                    alt="thumb"
                    style={{ opacity: isVideoLoaded ? 0 : 1 }}
                />
                {!isPlaying && <Button src={playButton} style={{ opacity: buttonOpacity }} />}
                {child}
            </VideoContainer>
        </OuterContainer>
    );
}

Video.defaultProps = {
    autoPlay: false
}

VideoBox.propTypes = {
    url: PropTypes.arrayOf(PropTypes.string),
    prioritizeHeight: PropTypes.bool,
    scrollInfo: PropTypes.arrayOf(PropTypes.number),
    autoPlay: PropTypes.bool,
    thumb: PropTypes.string,
};

function chooseVideoSource(urls) {
    const screenWidth = window.innerWidth + 'px'
    if (screenWidth > sizes.laptop) { return urls[0] }
    if (screenWidth > sizes.tablet) { return urls[1] }
    return urls[2]
}