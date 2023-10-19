import "./Hero.css";
import React from "react";
import Spline from "@splinetool/react-spline";
/* SWIPER */
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// FRAMER MOTION //
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import Menu from './Menu';
import ParagraphBlock from "../ParagraphBlock";

function Hero() {
  const [playerSelected, SetPlayerSelected] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  // 3D ASSETS //
  const headerSlides = [
    {
      player: "https://prod.spline.design/PWRQN6MrMbn9CUnS/scene.splinecode",
      icon: 'symbol',
      pBlock: {
        backgroundImage: 'assets/backs/back_symbol.jpg',
        contentString: ""
      },
      textImageBlock: {
        gradient: 'linear-gradient(116deg, rgba(164, 179, 255, 0.40) 1.25%, rgba(189, 203, 255, 0.40) 29.79%, rgba(206, 184, 255, 0.40) 71.6%, rgba(204, 167, 255, 0.40) 100%)',
        image: 'assets/backs/back_symbol.jpg',
        header: "",
        content: ""
      },                  
    },
    {
      player: "https://prod.spline.design/tFZcT93-fk0rHYBE/scene.splinecode",            
      icon: 'dog',
      pBlock: {
        backgroundImage: 'assets/backs/back_dog.jpg',
        contentString: ""
      },
      textImageBlock: {
        gradient: 'linear-gradient(116deg,#ffde9f 1.25%,#fff2d0 29.54%,#ffe3cf 65.02%,#ffb7a0 100%)',
        image: 'assets/backs/back_dog.jpg',
        header: "",
        content: ""
      }
    },
    {
      player: "https://prod.spline.design/egu5G0DjglSMja8p/scene.splinecode",
      icon: 'sphere',
      pBlock: {
        backgroundImage: 'assets/backs/back_sphere.jpeg',
        contentString: ""
      },
      textImageBlock: {
        gradient: 'linear-gradient(116deg, rgba(129, 218, 202, 0.40) 1.25%, rgba(118, 228, 202, 0.40) 29.02%, rgba(149, 236, 255, 0.40) 67.6%, rgba(149, 147, 255, 0.40) 100%)',
        image: 'assets/backs/back_sphere.jpeg',
        header: "",
        content: ""
      },            
    },
    {
      player: "https://prod.spline.design/VQE9YISAlTwDj5Ff/scene.splinecode",
      icon: 'pluma',
      pBlock: {
        backgroundImage: 'assets/backs/back_pluma.jpeg',
        contentString: ""
      },
      textImageBlock: {
        gradient: 'linear-gradient(116deg, #DDD3F1 1.25%, #EEEDFF 31.59%, #FFDBE1 71.71%, #FBB 100%)',
        image: 'assets/backs/back_pluma.jpeg',
        header: "",
        content: ""
      },  

      background:
        "",
      hero: "url() no-repeat center center / cover",
    },
    {
      player: "https://prod.spline.design/jwecqQbTKPfCRagW/scene.splinecode",
      icon: 'portfolio',
      pBlock: {
        backgroundImage: 'assets/backs/back_portfolio.jpeg',
        contentString: ""
      },
      textImageBlock: {
        gradient: 'linear-gradient(116deg, #FFF2D0 1.25%, #F1FFD4 33.14%, #E1FFE6 65.02%, #D4FFF5 100%)',
        image: 'assets/backs/back_portfolio.jpeg',
        header: "",
        content: ""
      }, 
    },
    {
      player: "https://prod.spline.design/WhiKNkYvZUQCSNTZ/scene.splinecode",
      icon: 'guitar',
      pBlock: {
        backgroundImage: 'assets/backs/back_guitar.jpeg',
        contentString: ""
      },
      textImageBlock: {
        gradient: 'linear-gradient(116deg, rgba(134, 79, 255, 0.30) 1.25%, rgba(174, 167, 255, 0.30) 31.59%, rgba(255, 160, 223, 0.30) 71.71%, rgba(255, 60, 60, 0.30) 100%)',
        image: 'assets/backs/back_guitar.jpeg',
        header: "",
        content: ""
      },      
    },
  ];

  // SLIDER //
  const [swiper, setSwiper] = React.useState(null);
  const nexto = () => {
    swiper.slideNext();
  };
  const prevto = () => {
    swiper.slidePrev();
  };

  // FRAMER SCROLL ANIMATIONS //
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["0 0", "0.5 1"],
  });
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacityControlsProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.45]);
  const scaleTopProgress = useTransform(scrollYProgress, [0, 1], [0, 140]);

  const topProgress = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  // SELECT Player //
  const content = useRef(null);
  const selectPlayer = () => {
    content.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sliderRef = useRef();

  const _changeItem = (i) => {     
    sliderRef.current.swiper.slideToLoop(i);    
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
       window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 2000;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;    
    if (winScroll > heightToHideFrom) {       
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className="hero">
      <div className="header-players" ref={ref}>
        <motion.div
          className="players-slider"
          animate={{ background: headerSlides[playerSelected].textImageBlock.gradient }}
          transition={{ duration: 0.5 }}
        >
          <div className="players-slider_texts">
            <motion.div
              className="players-slider_title"
              style={{ scale: scaleProgress, top: scaleTopProgress }}
            >
              Play
            </motion.div>
            <motion.div
              className="players-slider_subtitle"
              style={{ opacity: opacityProgress }}
            >
              An AI Exploration
            </motion.div>
          </div>

          <Swiper
            slidesPerView={1.75}
            spaceBetween={0}
            initialSlide={0}
            loop={true}
            centeredSlides={true}
            onSwiper={(s) => {
              setSwiper(s);              
              SetPlayerSelected(s.realIndex);              
            }}
            onSlideChange={(s) => {              
              SetPlayerSelected(s.realIndex);              
            }}
            keyboard={{
              enabled: true,              
            }}
            modules={[Keyboard]}
            className="hero-swiper"
            ref={sliderRef}
          >
            {headerSlides.map((data, index) => (
              <SwiperSlide key={index} onClick={(event) => {                
                if(!event.currentTarget.classList.contains('swiper-slide-active')){
                  if (event.currentTarget.classList.contains('swiper-slide-next')) {
                    nexto();
                  } else {
                    prevto(); 
                  }
                }
              }}>
                <motion.div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: playerSelected == index ? topProgress : 0,
                    opacity: playerSelected == -1 ? 1 : opacityControlsProgress,
                  }}
                >
                  <Spline scene={data.player} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <motion.div
            className="navigation"
            style={{ opacity: opacityControlsProgress }}
          >
            <div className="navigation_prev" onClick={() => { prevto(); } }></div>
            <motion.div
              className="navigation_select"
              onClick={selectPlayer}
              whileHover={{
                backgroundColor: '#000000',
                color: '#FFFFFF',
              }}
            >
              Select player
            </motion.div>
            <div className="navigation_next" onClick={() => { nexto(); } }></div>            
          </motion.div>
        </motion.div>        
      </div>

      {/* CONTENT */}
      {/* <div className="content" ref={content}>
        <motion.div
          className="section-player_hero"
          animate={{ background: 'url('+headerSlides[playerSelected].textImageBlock.image+') no-repeat center center / cover' }}
        ></motion.div>
      </div> */}
            {/* <ParagraphBlock 
                ref={content}
                // backgroundImage={'images/p-block-1.webp'} 
                animate={{ background: 'url('+headerSlides[playerSelected].textImageBlock.image+') no-repeat center center / cover' }}
                contentString={'hello hello hello'}
            /> */}
      <Menu items={headerSlides} selected={playerSelected} onChange={ (i) => _changeItem(i) } isVisible={isVisible}/>      
    </div>
  );
}

export default Hero;