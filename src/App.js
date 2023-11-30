import './App.css';
import React, { useState } from 'react';
import STRINGS from './components/constants/strings';
import DefaultLanding from './pages/DefaultLanding';
import Nav from './components/Nav';
// import Hero from './components/Hero/Hero';
// import { ManifestoSection } from './components/Manifesto/ManifestoSection';
import NAMING_STRINGS from './components/constants/textContent';
import { NamingSection } from './pages/NamingSection';
import { useImageLoader } from './components/constants/manifestoImgContent';
import { Route, Routes } from 'react-router-dom';
import { NamingExperimentSection } from './pages/NamingExperimentSection';

function App() {
  const players = [
    {
      pBlock: {
        backgroundImage: 'images/p-block-1.webp',
        glitchImage: 'images/glitch-1.webp',
        contentString: STRINGS.P_BLOCK,
        subHeaderString: STRINGS.P_BLOCK_SUB
      },
      textImageBlock: {
        gradient: 'images/gradient-1.webp',
        image: 'images/glitch-1.webp',
        header: STRINGS.TEXT_IMG_BLOCK_HEADER_1,
        content: STRINGS.TEXT_IMG_BLOCK_CONTENT_1
      },
    },
    {
      pBlock: {
        backgroundImage: 'images/p-block-2.webp',
        glitchImage: 'images/glitch-2.webp',
        contentString: STRINGS.P_BLOCK_2,
        subHeaderString: STRINGS.P_BLOCK_2_SUB
      },
      textImageBlock: {
        gradient: 'images/gradient-2.webp',
        image: 'images/glitch-1.webp',
        header: STRINGS.TEXT_IMG_BLOCK_HEADER_2,
        content: STRINGS.TEXT_IMG_BLOCK_CONTENT_2
      },
    },
    {
      pBlock: {
        backgroundImage: 'images/p-block-4.webp',
        glitchImage: 'images/glitch-3.webp',
        contentString: STRINGS.P_BLOCK_4,
        subHeaderString: STRINGS.P_BLOCK_4_SUB
      },
      textImageBlock: {
        gradient: 'images/gradient-4.webp',
        image: 'images/text-img-block-4.webp',
        header: STRINGS.TEXT_IMG_BLOCK_HEADER_4,
        content: STRINGS.TEXT_IMG_BLOCK_CONTENT_4
      },
    },
    {
      pBlock: {
        backgroundImage: 'images/p-block-6.webp',
        glitchImage: 'images/glitch-4.webp',
        contentString: STRINGS.P_BLOCK_6,
        subHeaderString: STRINGS.P_BLOCK_6_SUB
      },
      textImageBlock: {
        gradient: 'images/gradient-6.webp',
        image: 'images/glitch-1.webp',
        header: STRINGS.TEXT_IMG_BLOCK_HEADER_6,
        content: STRINGS.TEXT_IMG_BLOCK_CONTENT_6
      },
    },
    {
      pBlock: {
        backgroundImage: 'images/p-block-3.webp',
        glitchImage: 'images/glitch-5.webp',
        contentString: STRINGS.P_BLOCK_3,
        subHeaderString: STRINGS.P_BLOCK_3_SUB
      },
      textImageBlock: {
        gradient: 'images/gradient-3.webp',
        image: 'images/text-img-block-3.webp',
        header: STRINGS.TEXT_IMG_BLOCK_HEADER_3,
        content: STRINGS.TEXT_IMG_BLOCK_CONTENT_3
      },
    },
    // Consultant archetype
    // {
    //   pBlock: {
    //     backgroundImage: 'images/p-block-5.webp',
    //     contentString: STRINGS.P_BLOCK_5,
    //   },
    //   textImageBlock: {
    //     gradient: 'images/gradient-5.webp',
    //     image: 'images/text-img-block-5.webp',
    //     header: STRINGS.TEXT_IMG_BLOCK_HEADER_5,
    //     content: STRINGS.TEXT_IMG_BLOCK_CONTENT_5
    //   },
    // },
  ];

  const [archetype, setArchetype] = useState(0);

  const handlePlayerChange = (newPlayer) => {
    console.log('handle player change called')
    setArchetype(newPlayer);
  }

  const MANIFESTO_IMAGES = useImageLoader();

  const LandingPage = (
      <DefaultLanding 
        options={players[archetype]} 
        manifestoImages={MANIFESTO_IMAGES}
        handlePlayerChange={handlePlayerChange}
        player={archetype}
      />
  );

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={LandingPage} />
        <Route path="/naming-experiments" element={<NamingExperimentSection/>} />
        <Route path="/naming" element={<NamingSection text={NAMING_STRINGS} />} />
      </Routes>
    </div>
  );
}

export default App;
