import React from 'react';
import ParagraphBlock from '../components/ParagraphBlock';
// import TextImageBlock from '../components/TextImageBlock';
import ArticleBlock from '../components/ArticleBlock';
import Footer from '../components/Footer/Footer';
import { ManifestoSection } from '../components/Manifesto/ManifestoSection';
// import { styled } from 'styled-components';
// import { TransitionBackground } from '../components/Manifesto/interactions/Background';
import ImageStillBlock from '../components/ImageStillBlock';
import Hero from '../components/Hero/Hero';

const DefaultLanding = ({ player, options, manifestoImages, handlePlayerChange }) => {
    return (
        <div>
            <Hero handlePlayerChange={handlePlayerChange} player={player} />
            <ImageStillBlock 
                backgroundImage={options.pBlock.backgroundImage} 
                scrollOffset={["start start", "end end"]}
                scrollYArray={[0, 0.6, 0.6, 1]}
                opacityArray={[0, 0, 0, 0.6]}
                sectionHeight={'250vh'}
            />
            <ParagraphBlock
                backgroundImage={options.pBlock.backgroundImage}
                contentString={options.pBlock.contentString}
                scrollYArray={[0, 1]}
                opacityArray={[0, 0.6]}
                opacityOverride={0.6}
                scrollInfo={[0.22, 0.25, 0.3, 0.32]}
            />
            <ParagraphBlock
                backgroundImage={options.pBlock.backgroundImage}
                contentString={options.pBlock.contentString}
                scrollOffset={["start center", "start start"]}
                scrollYArray={[0, 0.5, 0.5, 1]}
                opacityArray={[0, 0.6, 0.6, 1]}
                opacityOverride={0.6}
                typed
                handlePlayerChange={handlePlayerChange}
                hasMenu
                selectedPlayer={player}
                scrollInfo={[0.3, 0.33, 0.38, 0.4]}
            />
            {/* <TextImageBlock 
                gradient={options.textImageBlock.gradient}
                image={options.textImageBlock.image}
                header={options.textImageBlock.header}
                content={options.textImageBlock.content}
            /> */}
            <ManifestoSection images={manifestoImages} />
            <ArticleBlock />
            <Footer />
        </div>
    );
};

export default DefaultLanding;