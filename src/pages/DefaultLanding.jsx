import React from 'react';
import DummyHero from '../components/DummyHero';
import ParagraphBlock from '../components/ParagraphBlock';
import TextImageBlock from '../components/TextImageBlock';
import ArticleBlock from '../components/ArticleBlock';
import TeamBlock from '../components/TeamBlock';
import Footer from '../components/Footer/Footer';

const DefaultLanding = ({ options }) => {
    return (
        <div>
            {/* <DummyHero /> */}
            <ParagraphBlock 
                backgroundImage={options.pBlock.backgroundImage} 
                contentString={options.pBlock.contentString}
            />
            <TextImageBlock 
                gradient={options.textImageBlock.gradient}
                image={options.textImageBlock.image}
                header={options.textImageBlock.header}
                content={options.textImageBlock.content}
            />
            <ArticleBlock />
            {/* <TeamBlock /> */}
            <Footer />
        </div>
    );
};

export default DefaultLanding;