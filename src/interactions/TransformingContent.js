import PropTypes from "prop-types"
import { sizes } from "../components/constants/devices"
import MediaQuery from "react-responsive"
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion"
import React from 'react';

export { TransformingContent, ImgBox, BackgroundImgBox, ScalingImgBox, RotatingImgBox, TransformingTextBox }

function TransformingContent({ child, positions, scrollInfo, alignment }) {

    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]
    const { scrollYProgress } = useScroll();

    const x = useTransform(scrollYProgress, scrollInfo, positions[0]) //[x1, x2, x3, x4]
    const y = useTransform(scrollYProgress, scrollInfo, positions[1]) //[-34, 29, 29, 126]
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'inline', 'none'])

    const tX = useMotionTemplate`${x}vw`
    const tY = useMotionTemplate`${y}vh`

    if (alignment[0] === 'left' && alignment[1] === 'top') {
        return (
            <motion.div style={{
                position: "fixed",
                top: tY,
                left: tX,
                display: visible
            }}>
                {child}
            </motion.div>
        )
    } else if (alignment[0] === 'left' && alignment[1] === 'bottom') {
        return (
            <motion.div style={{
                position: "fixed",
                bottom: tY,
                left: tX,
                display: visible
            }}>
                {child}
            </motion.div>
        )
    } else if (alignment[0] === 'center' && alignment[1] === 'center') {
        return (
            <motion.div style={{
                position: "fixed",
                width: "100vw",
                bottom: tY,
                left: tX,
                margin: "auto",
                display: visible
            }}>
                {child}
            </motion.div>
        )
    } else if (alignment[0] === 'right' && alignment[1] === 'top') {
        return (
            <motion.div style={{
                position: "fixed",
                top: tY,
                right: tX,
                left: 'auto',
                display: visible
            }}>
                {child}
            </motion.div>
        )
    } else {
        return (
            <motion.div style={{
                position: "fixed",
                bottom: tY,
                right: tX,
                left: 'auto',
                display: visible
            }}>
                {child}
            </motion.div>
        )
    }
}

TransformingContent.propTypes = {
    child: PropTypes.any,
    positions: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    scrollInfo: PropTypes.arrayOf(PropTypes.number).isRequired,
    alignment: PropTypes.arrayOf(PropTypes.string).isRequired, // Top-Left = tl,
}

function TransformingTextBox({ child, positions, scrollInfo, alignment }) {
    const { scrollYProgress } = useScroll();
    const pointersInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]
    const pointers = useTransform(scrollYProgress, pointersInfo, ['none', 'none', 'auto', 'none'])
    const y = useTransform(scrollYProgress, scrollInfo, positions) //[-34, 29, 29, 126]
    const tY = useMotionTemplate`${y}vh`

    if (alignment === 'top') {
        return (
            <motion.div style={{
                position: "fixed",
                top: tY,
                width: "100%",
                pointerEvents: pointers
            }}>
                <div style={{ position: "relative", textAlign: "center" }}>
                    {child}
                </div>
            </motion.div>
        )
    } else if (alignment === 'bottom') {
        return (
            <motion.div style={{
                position: "fixed",
                width: "100%",
                bottom: tY,
                pointerEvents: pointers
            }}>
                <div style={{ position: "relative", textAlign: "center" }}>
                    {child}
                </div>
            </motion.div>
        )
    } else if (alignment === 'center') {
        return (
            <motion.div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: pointers
            }}>
                <div style={{ position: "relative", textAlign: "center" }}>
                    {child}
                </div>
            </motion.div>
        )
    }
}

function ImgBox({ url, displayDimensions, rotate, fixWidth, fixHeight }) {
    if (fixWidth) {
        return (
            <img src={url} alt={url}
                style={{
                    userDrag: "none",
                    WebkitUserDrag: "none",
                    userSelect: "none",
                    MozUserSelect: "none",
                    WebkitUserSelect: "none",
                    msUserSelect: "none",

                    transform: "rotate(" + rotate + "deg)",
                    width: displayDimensions[0] + "vw",
                    height: "auto",
                }
                } />
        )
    } else if (fixHeight) {
        return (
            <img src={url} alt={url}
                style={{
                    userDrag: "none",
                    WebkitUserDrag: "none",
                    userSelect: "none",
                    MozUserSelect: "none",
                    WebkitUserSelect: "none",
                    msUserSelect: "none",

                    transform: "rotate(" + rotate + "deg)",
                    height: displayDimensions[1] + "vh",
                    width: "auto",
                }} />
        )
    } else {
        return (
            <>
                <MediaQuery minWidth={'1441px'}>
                    <img src={url} alt={url}
                        style={{
                            userDrag: "none",
                            WebkitUserDrag: "none",
                            userSelect: "none",
                            MozUserSelect: "none",
                            WebkitUserSelect: "none",
                            msUserSelect: "none",

                            transform: "rotate(" + rotate + "deg)",
                            height: displayDimensions[1] + "vh",
                            width: "auto",
                        }} />
                </MediaQuery>
                <MediaQuery maxWidth={sizes.laptopL}>
                    <img src={url} alt={url}
                        style={{
                            userDrag: "none",
                            WebkitUserDrag: "none",
                            userSelect: "none",
                            MozUserSelect: "none",
                            WebkitUserSelect: "none",
                            msUserSelect: "none",

                            transform: "rotate(" + rotate + "deg)",
                            width: displayDimensions[0] + "vw",
                            height: "auto",
                        }} />
                </MediaQuery>
                <MediaQuery maxWidth={sizes.mobileL}>
                    <img src={url} alt={url}
                        style={{
                            userDrag: "none",
                            WebkitUserDrag: "none",
                            userSelect: "none",
                            MozUserSelect: "none",
                            WebkitUserSelect: "none",
                            msUserSelect: "none",

                            transform: "rotate(" + rotate + "deg)",
                            height: displayDimensions[1] + "vh",
                            width: "auto",
                        }} />
                </MediaQuery>
            </>
        )
    }
}

ImgBox.defaultProps = {
    rotate: 0,
    fixWidth: false,
    fixHeight: false,
}

ImgBox.propTypes = {
    url: PropTypes.string,
    displayDimensions: PropTypes.arrayOf(PropTypes.number).isRequired,
    rotate: PropTypes.number,
    fixWidth: PropTypes.bool,
    fixHeight: PropTypes.bool,
}

function BackgroundImgBox({ url, displayDimensions, rotate }) {
    const wider = useMotionValue(window.innerWidth / window.innerHeight > 1)

    return (
        <>
            {wider ?
                <img src={url} alt={url}
                    style={{
                        userDrag: "none",
                        WebkitUserDrag: "none",
                        userSelect: "none",
                        MozUserSelect: "none",
                        WebkitUserSelect: "none",
                        msUserSelect: "none",

                        transform: "rotate(" + rotate + "deg)",
                        width: displayDimensions[0] + "vw",
                        height: "auto",
                        opacity: "0.15",
                        zIndex: "1",
                    }} /> :
                <img src={url} alt={url}
                    style={{
                        userDrag: "none",
                        WebkitUserDrag: "none",
                        userSelect: "none",
                        MozUserSelect: "none",
                        WebkitUserSelect: "none",
                        msUserSelect: "none",

                        transform: "rotate(" + rotate + "deg)",
                        height: displayDimensions[1] + "vh",
                        width: "auto",
                        opacity: "0.15",
                        zIndex: "1",
                    }} />}
        </>
    )
}

function ScalingImgBox({ url, displayDimensions, scrollInfo }) {
    const { scrollYProgress } = useScroll();

    const scale = useTransform(scrollYProgress, scrollInfo, displayDimensions); //[x1, x2, x3, x4]
    const tScale = useMotionTemplate`${scale}rem`;

    return (
        <>
            {/* <MediaQuery minWidth={sizes.tablet}> */}
            <motion.img src={url} alt={url}
                style={{
                    width: tScale,
                    height: "auto",

                }} />
            {/* </MediaQuery> */}
        </>
    )

}

function RotatingImgBox({ url, displayDimensions, rotateDimensions, scrollInfo }) {
    const { scrollYProgress } = useScroll();

    const rotate = useTransform(scrollYProgress, scrollInfo, rotateDimensions); //[x1, x2, x3, x4]
    const tRotate = useMotionTemplate`rotate(${rotate}deg)`;
    // transform: "rotate(" + rotate + "deg)",

    return (
        <>
            {/* <MediaQuery minWidth={sizes.tablet}> */}
            <motion.img src={url} alt={url}
                style={{
                    transform: tRotate,
                    width: displayDimensions[0] + "vw",
                    height: "auto",

                }} />
            {/* </MediaQuery> */}
        </>
    )

}