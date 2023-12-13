import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion"
import PBlockMenu from './PBlockMenu';

export const RegeneratingBlock = ({ 
    scrollInfo, 
    baseOpacity, 
    content1, 
    content2,
    selectedPlayer,
    handlePlayerChange,
    handleSubHeaderChange,
    handleBackgroundChange
}) => {
    let scrollReference = [scrollInfo[0], halfWay(scrollInfo[0], scrollInfo[1]), scrollInfo[1], scrollInfo[2], halfWay(scrollInfo[2], scrollInfo[3]), scrollInfo[3]];
    let opacityTransform = [baseOpacity, baseOpacity, 1, 1, baseOpacity, baseOpacity];

    const visibleInfo = [0, scrollInfo[0], scrollInfo[scrollInfo.length - 1], 1];
    const { scrollYProgress } = useScroll();

    //Calculate Transforms
    const opacity = useTransform(scrollYProgress, scrollReference, opacityTransform)
    const visible = useTransform(scrollYProgress, visibleInfo, ['none', 'none', 'inline', 'none'])
    

    return (
        <motion.div key={baseOpacity} style={{ opacity: opacity, display: visible}}>
            <PBlockMenu 
                selectedPlayer={selectedPlayer} 
                handlePlayerChange={handlePlayerChange}
                handleSubHeaderChange={handleSubHeaderChange}
                handleBackgroundChange={handleBackgroundChange}
            />
        </motion.div>
    )
}

function halfWay(a, b, ratio = 0.5) {
    return (b - a) * ratio + a
}
