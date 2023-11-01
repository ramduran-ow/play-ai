import React from 'react';
import ParagraphBlock from '../components/ParagraphBlock';
import TextImageBlock from '../components/TextImageBlock';
import ArticleBlock from '../components/ArticleBlock';
import Footer from '../components/Footer/Footer';
import { ManifestoSection } from '../components/Manifesto/ManifestoSection';
import { styled } from 'styled-components';

const ManifestoWrapper = styled.div`
    min-height: 1400vh;
`;

const DefaultLanding = ({ options, manifestoImages }) => {
    return (
        <div>
            <ParagraphBlock
                backgroundImage={options.pBlock.backgroundImage}
                contentString={options.pBlock.contentString}
            />
            {/* <TextImageBlock 
                gradient={options.textImageBlock.gradient}
                image={options.textImageBlock.image}
                header={options.textImageBlock.header}
                content={options.textImageBlock.content}
            /> */}
            <ManifestoSection images={manifestoImages} />
            <ArticleBlock />
            {/* <TeamBlock /> */}
            <Footer />
        </div>
    );
};

export default DefaultLanding;