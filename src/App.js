import './App.css';
import React, { useState } from 'react';
import STRINGS from './components/constants/strings';
import DefaultLanding from './pages/DefaultLanding';
import Nav from './components/Nav';
// import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero/Hero';

function App() {

  const players = [
    {
      pBlock: {
        backgroundImage: 'images/p-block-1.webp',
        contentString: STRINGS.P_BLOCK,
      },
      textImageBlock: {
        gradient: 'images/gradient-1.webp',
        image: 'images/text-img-block-1.webp',
        header: STRINGS.TEXT_IMG_BLOCK_HEADER_1,
        content: STRINGS.TEXT_IMG_BLOCK_CONTENT_1
      },
    },
    {
      pBlock: {
        backgroundImage: 'images/p-block-2.webp',
        contentString: STRINGS.P_BLOCK_2,
      },
      textImageBlock: {
        gradient: 'images/gradient-2.webp',
        image: 'images/text-img-block-2.webp',
        header: STRINGS.TEXT_IMG_BLOCK_HEADER_2,
        content: STRINGS.TEXT_IMG_BLOCK_CONTENT_2
      },
    },
    {
      pBlock: {
        backgroundImage: 'images/p-block-3.webp',
        contentString: STRINGS.P_BLOCK_2,
      },
      textImageBlock: {
        gradient: 'images/gradient-3.webp',
        image: 'images/text-img-block-3.webp',
        header: STRINGS.TEXT_IMG_BLOCK_HEADER_3,
        content: STRINGS.TEXT_IMG_BLOCK_CONTENT_3
      },
    },
    {
      pBlock: {
        backgroundImage: 'images/p-block-4.webp',
        contentString: STRINGS.P_BLOCK_2,
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
        backgroundImage: 'images/p-block-5.webp',
        contentString: STRINGS.P_BLOCK_2,
      },
      textImageBlock: {
        gradient: 'images/gradient-5.webp',
        image: 'images/text-img-block-5.webp',
        header: STRINGS.TEXT_IMG_BLOCK_HEADER_5,
        content: STRINGS.TEXT_IMG_BLOCK_CONTENT_5
      },
    },
    {
      pBlock: {
        backgroundImage: 'images/p-block-6.webp',
        contentString: STRINGS.P_BLOCK_2,
      },
      textImageBlock: {
        gradient: 'images/gradient-6.webp',
        image: 'images/text-img-block-6.webp',
        header: STRINGS.TEXT_IMG_BLOCK_HEADER_6,
        content: STRINGS.TEXT_IMG_BLOCK_CONTENT_6
      },
    }
  ];
  // const defaultArchetype = {
  //   pBlock: {
  //     backgroundImage: 'images/p-block-1.webp',
  //     contentString: STRINGS.P_BLOCK,
  //   },
  //   textImageBlock: {
  //     gradient: 'images/gradient-1.webp',
  //     image: 'images/text-img-block-1.webp',
  //     header: STRINGS.TEXT_IMG_BLOCK_HEADER_1,
  //     content: STRINGS.TEXT_IMG_BLOCK_CONTENT_1
  //   },
  // };

  // const dogArchetype = {
  //   pBlock: {
  //     backgroundImage: 'images/p-block-2.webp',
  //     contentString: STRINGS.P_BLOCK_2,
  //   },
  //   textImageBlock: {
  //     gradient: 'images/gradient-2.webp',
  //     image: 'images/text-img-block-2.webp',
  //     header: STRINGS.TEXT_IMG_BLOCK_HEADER_2,
  //     content: STRINGS.TEXT_IMG_BLOCK_CONTENT_2
  //   },
  // };

  // const genZArchetype = {
  //   pBlock: {
  //     backgroundImage: 'images/p-block-3.webp',
  //     contentString: STRINGS.P_BLOCK_2,
  //   },
  //   textImageBlock: {
  //     gradient: 'images/gradient-3.webp',
  //     image: 'images/text-img-block-3.webp',
  //     header: STRINGS.TEXT_IMG_BLOCK_HEADER_3,
  //     content: STRINGS.TEXT_IMG_BLOCK_CONTENT_3
  //   },
  // };

  // const shakespeareArchetype = {
  //   pBlock: {
  //     backgroundImage: 'images/p-block-4.webp',
  //     contentString: STRINGS.P_BLOCK_2,
  //   },
  //   textImageBlock: {
  //     gradient: 'images/gradient-4.webp',
  //     image: 'images/text-img-block-4.webp',
  //     header: STRINGS.TEXT_IMG_BLOCK_HEADER_4,
  //     content: STRINGS.TEXT_IMG_BLOCK_CONTENT_4
  //   },
  // };

  // const consultantArchetype = {
  //   pBlock: {
  //     backgroundImage: 'images/p-block-5.webp',
  //     contentString: STRINGS.P_BLOCK_2,
  //   },
  //   textImageBlock: {
  //     gradient: 'images/gradient-5.webp',
  //     image: 'images/text-img-block-5.webp',
  //     header: STRINGS.TEXT_IMG_BLOCK_HEADER_5,
  //     content: STRINGS.TEXT_IMG_BLOCK_CONTENT_5
  //   },
  // };

  // const metalArchetype = {
  //   pBlock: {
  //     backgroundImage: 'images/p-block-6.webp',
  //     contentString: STRINGS.P_BLOCK_2,
  //   },
  //   textImageBlock: {
  //     gradient: 'images/gradient-6.webp',
  //     image: 'images/text-img-block-6.webp',
  //     header: STRINGS.TEXT_IMG_BLOCK_HEADER_6,
  //     content: STRINGS.TEXT_IMG_BLOCK_CONTENT_6
  //   },
  // };

  const [archetype, setArchetype] = useState(players[0]);

  const handlePlayerChange = (newPlayer) => {
    setArchetype(players[newPlayer]);
  }

  return (
    <div className="App">
      {/* <button onClick={() => setArchetype(defaultArchetype)}>default</button>
      <button onClick={() => setArchetype(dogArchetype)}>dog</button>
      <button onClick={() => setArchetype(genZArchetype)}>gen-z</button>
      <button onClick={() => setArchetype(shakespeareArchetype)}>shakespeare</button>
      <button onClick={() => setArchetype(consultantArchetype)}>consultant</button>
      <button onClick={() => setArchetype(metalArchetype)}>metal</button> */}
      <Hero handlePlayerChange={handlePlayerChange} />
      <Nav />
      <DefaultLanding options={archetype}/>
    </div>
  );
}

export default App;
