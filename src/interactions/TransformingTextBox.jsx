import PropTypes from "prop-types"
import styled from "styled-components"
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion"
// import { sizes } from "../constants/devices"
// import MediaQuery from "react-responsive"

export { TransformingTextBox }

export const TextContainer = styled.div`
    position: relative;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    text-align: center;
    margin: auto;
`

const TransformingContainer = styled(motion.div)`
    position: fixed;
    width: 100%
`

const CenterContainer = styled(motion.div)`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`

function TransformingTextBox({ child, positions, scrollInfo, alignment, doubled, specialWidth }) {
    const { scrollYProgress } = useScroll();

    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1]
    const y = useTransform(scrollYProgress, scrollInfo, positions)
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'block', 'none'])
    const tY = useMotionTemplate`${y}vh`
    let usedWidth = '75rem'
    if (doubled) { usedWidth = '100%' }
    if (specialWidth !== '') { usedWidth = specialWidth }

    if (alignment === 'top') {
        return (
            <TransformingContainer style={{ top: tY, display: visible }}>
                <TextContainer style={{ maxWidth: usedWidth }}>
                    {child}
                </TextContainer>
            </TransformingContainer>
        )
    } else if (alignment === 'bottom') {
        return (
            <TransformingContainer style={{ bottom: tY, display: visible }}>
                <TextContainer style={{ maxWidth: usedWidth }}>
                    {child}
                </TextContainer>
            </TransformingContainer>
        )
    } else if (alignment === 'center') {
        return (
            <CenterContainer style={{ display: visible }}>
                <TextContainer style={{ maxWidth: usedWidth }}>
                    {child}
                </TextContainer>
            </CenterContainer>
        )
    }
}

TransformingTextBox.defaultProps = {
    doubled: false,
    specialWidth: '',
}

TransformingTextBox.propTypes = {
    child: PropTypes.any,
    positions: PropTypes.arrayOf(PropTypes.number),
    scrollInfo: PropTypes.arrayOf(PropTypes.number),
    alignment: PropTypes.string,
    doubled: PropTypes.bool,
    specialWidth: PropTypes.string,
}