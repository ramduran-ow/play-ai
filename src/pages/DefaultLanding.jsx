import React from 'react';
import Hero from '../components/Hero/Hero';
import ParagraphBlock from '../components/ParagraphBlock';
import RobotsModule from '../components/Robots/RobotsModule';
import Footer from '../components/Footer/FooterV2';
import STRINGS from '../components/constants/strings';
import Nav from '../components/Nav';

const DefaultLanding = ({ player, options, manifestoImages, handlePlayerChange }) => {
    return (
        <div>
            <Nav isLandingPage />
            {/* <Hero handlePlayerChange={handlePlayerChange} player={player} /> */}
            {/* <ImageStillBlock 
                backgroundImage={options.pBlock.backgroundImage} 
                scrollOffset={["start start", "end end"]}
                scrollYArray={[0, 0.6, 0.6, 1]}
                opacityArray={[0, 0, 0, 0.6]}
                sectionHeight={'250vh'}
            /> */}
            <ParagraphBlock
                backgroundImage={options.pBlock.backgroundImage}
                contentString={STRINGS.P_BLOCK_DEFAULT}
                subHeaderString={STRINGS.P_BLOCK_DEFAULT_SUB}
                scrollOffset={["start center", "start start"]}
                scrollYArray={[0, 1]}
                opacityArray={[0, 0.7]}
                // opacityOverride={0.6}
                scrollInfo={[0.14, 0.16, 0.18, 0.20]}
                sectionHeight={150}
            />
            <ParagraphBlock
                //backgroundImage={options.pBlock.backgroundImage}
                glitchImage={options.pBlock.glitchImage}
                contentString={options.pBlock.contentString}
                subHeaderString={options.pBlock.subHeaderString}
                scrollOffset={["start center", "start start"]}
                scrollYArray={[0, 0.5, 0.5, 1]}
                opacityArray={[0, 0.7, 0.7, 1]}
                opacityOverride={0}
                typed
                handlePlayerChange={handlePlayerChange}
                hasMenu
                selectedPlayer={player}
                scrollInfo={[0.3, 0.33, 0.38, 0.4]}
                sectionHeight={350}
            />
            {/* <TextImageBlock 
                gradient={options.textImageBlock.gradient}
                image={options.textImageBlock.image}
                header={options.textImageBlock.header}
                content={options.textImageBlock.content}
            /> */}
            <RobotsModule />
            <Footer />
        </div>
    );
};

export default DefaultLanding;