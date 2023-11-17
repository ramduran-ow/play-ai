import React, {useRef} from 'react';
import { styled } from 'styled-components';
import { motion, useScroll } from "framer-motion";

const TextWrapper = styled(motion.div)`
    width: 200px;
    height: 300px;
    border: 2px dotted red;
    position: relative;
`

const ParagraphBlockText = ({ string }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
      });


    return (
        <TextWrapper>
            {string}
        </TextWrapper>
    )
}

export default ParagraphBlockText