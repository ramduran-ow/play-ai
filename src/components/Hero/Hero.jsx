import "./Hero.css";
import React from "react";

//const Spline = React.lazy(() => import("@splinetool/react-spline"));
/* SWIPER */
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// FRAMER MOTION //
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

//import Menu from "./Menu";

function Hero({ handlePlayerChange, player }) {
  const [playerSelected, SetPlayerSelected] = useState(0);
  //const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("playerSelected updated in Hero")
    handlePlayerChange(playerSelected);
  }, [playerSelected]); // eslint-disable-line

  useEffect(() => {

    SetPlayerSelected(player);
    _changeItem(player)
  }, [player]); // eslint-disable-line
  /////////////
  // PLAYERS //
  /////////////
  const headerSlides = [
    {
      player: "https://prod.spline.design/BXGaHUH6bgnmdYQD/scene.splinecode",
      playerResetID: "c0f7bdf9-6453-42af-808a-a35519934bc5",
      playerPNG: "images/players/SymbolBase.png",
      icon: "symbol",
      backGradient:
        "linear-gradient(116deg, rgba(164, 179, 255, 0.40) 1.25%, rgba(189, 203, 255, 0.40) 29.79%, rgba(206, 184, 255, 0.40) 71.6%, rgba(204, 167, 255, 0.40) 100%)",
      playerShadow: "url('images/shadows/symbol_shadow.png') no-repeat center bottom",
      text:'/Prompt: <b>Futuristic</b>'
    },
    {
      player: "https://prod.spline.design/tFZcT93-fk0rHYBE/scene.splinecode",
      playerResetID: "c0f7bdf9-6453-42af-808a-a35519934bc5",
      playerPNG: "images/players/DogBase.png",
      icon: "dog",
      backGradient:
        "linear-gradient(116deg,#ffde9f 1.25%,#fff2d0 29.54%,#ffe3cf 65.02%,#ffb7a0 100%)",
      playerShadow: "url(images/shadows/dog_shadow.png) no-repeat center bottom",
      text: '/Prompt: <b>Dog(e)-Mode</b>'
    },
    {
      player: "https://prod.spline.design/VQE9YISAlTwDj5Ff/scene.splinecode",
      playerResetID: "c0f7bdf9-6453-42af-808a-a35519934bc5",
      playerPNG: "images/players/QuillBase.png",
      icon: "quill",
      backGradient:
        "linear-gradient(116deg, #DDD3F1 1.25%, #EEEDFF 31.59%, #FFDBE1 71.71%, #FBB 100%)",
      playerShadow: "url(images/shadows/quill_shadow.png) no-repeat center bottom",
      text: '/Prompt: <b>Shakespearinator</b>'
    },
    {
      player: "https://prod.spline.design/jtAWEZhNQYMpZVNw/scene.splinecode",
      playerResetID: "c0f7bdf9-6453-42af-808a-a35519934bc5",
      playerPNG: "images/players/GuitarBase.png",
      icon: "guitar",
      backGradient:
        "linear-gradient(116deg, #FFF2D0 1.25%, #F1FFD4 33.14%, #E1FFE6 65.02%, #D4FFF5 100%)",      playerShadow: "url('images/shadows/guitar_shadow.png') no-repeat center bottom",
      text: '/Prompt: <b>Heavy Metal-ic</b>'
    },
    {
      player: "https://prod.spline.design/RnD9t6cTp-QAsGEQ/scene.splinecode",
      playerResetID: "c0f7bdf9-6453-42af-808a-a35519934bc5",
      playerPNG: "images/players/SphereBase.png",
      icon: "sphere",
      backGradient:
        "linear-gradient(116deg, rgba(129, 218, 202, 0.40) 1.25%, rgba(118, 228, 202, 0.40) 29.02%, rgba(149, 236, 255, 0.40) 67.6%, rgba(149, 147, 255, 0.40) 100%)",
      playerShadow: "url(images/shadows/sphere_shadow.png) no-repeat center bottom",
      text:'/Prompt: <b>Gen-Zify</b>'
    },
  ];
  ///////////////////
  /// PLAYERS REF ///
  ///////////////////
  const playersEl = useRef([]);
  const playersSlidesEl = useRef([]);

  ////////////
  // SLIDER //
  ////////////
  const [swiper, setSwiper] = useState(null);
  const sliderRef = useRef();
  const nexto = () => {
    swiper.slideNext();
  };
  const prevto = () => {
    swiper.slidePrev();
  };
  const _changeItem = (i) => {
    sliderRef.current.swiper.slideToLoop(i);
  };

  // SELECT Player //
  // const content = useRef(null);
  // const selectPlayer = () => {
  //   window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" })
  // };

  // const selectPlayerScroll = () => {
  //   let pageHeight = window.innerHeight;
  //   window.scrollBy({
  //     top: pageHeight * 2,
  //     behavior: "smooth",
  //   });
  // };

  // FRAMER SCROLL ANIMATIONS //
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["0 0", "0.1 1"],
  });
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacityControlsProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.45]);
  const scaleTopProgress = useTransform(scrollYProgress, [0, 1], [0, 140]);

  const topProgress = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  // useEffect(() => {
  //   window.addEventListener("scroll", listenToScroll);
  //   return () => window.removeEventListener("scroll", listenToScroll);
  // }, []);

  // const listenToScroll = () => {
  //   let heightToHideFrom = 2000;
  //   const winScroll =
  //     document.body.scrollTop || document.documentElement.scrollTop;
  //   if (winScroll > heightToHideFrom) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };

  // SPLINE VIEWER //
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://unpkg.com/@splinetool/viewer@0.9.486/build/spline-viewer.js";
    script.async = true;
    script.type = "module";

    document.body.appendChild(script);
  }, []);
  ////////////////////
  /// PLAYERS VIEW ///
  ////////////////////
  const preparePlayersViewers = () => {
    headerSlides.forEach((data, index) => {
      playersEl.current[index]._spline.stop();
      ///
      playersEl.current[index].addEventListener(
        "viewport-intersection",
        (e) => {
          //console.log(e.detail.intersection);
          if (e.detail.intersection) {
            e.target._spline.play();
            const resetObj = e.target._spline.findObjectById(
              "c0f7bdf9-6453-42af-808a-a35519934bc5"
            );
            resetObj.emitEventReverse("mouseUp");
          } else {
            e.target._spline.stop();
          }
        }
      );
      playersEl.current[index].addEventListener("load-complete", (e) => {
        SetPlayerSelected(0);
        e.target._spline.stop();
      });
    });
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      preparePlayersViewers();
    }, 1000);
    return () => clearTimeout(timer);
  }, []); // eslint-disable-line

  const _getTop = (i) => {    
    if (playersSlidesEl.current[playerSelected]) {
      if (
        playersSlidesEl.current[i].id ===
        playersSlidesEl.current[playerSelected].id
      ) {
        return playerSelected === i ? topProgress : 0;
      }
    }
  }

  return (
    <div className="hero">
      <div className="header-players" ref={ref}>
        <motion.div
          className="players-slider"
          animate={{
            background: headerSlides[playerSelected].backGradient,
          }}
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
          <motion.div
            className="player-shadow"
            style={{ opacity: opacityControlsProgress }}
            animate={{
              background: headerSlides[playerSelected].playerShadow
            }}
            transition={{ duration: 0.5 }}
          ></motion.div>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            initialSlide={0}
            loop={true}
            centeredSlides={true}
            onSwiper={(s) => {
              setSwiper(s);
              SetPlayerSelected(s.realIndex);
            }}
            onTransitionEnd={(s) => {
              SetPlayerSelected(s.realIndex);
            }}
            onRealIndexChange={(s) => {}}
            keyboard={{
              enabled: true,
            }}
            modules={[Keyboard]}            
            className="hero-swiper"
            ref={sliderRef}
            navigation={{
              nextEl: "image-swiper-button-next",
              prevEl: "image-swiper-button-prev",
              disabledClass: "swiper-button-disabled"
            }}
          >   
            {headerSlides.map((data, index) => (
              <SwiperSlide
                key={index}
                onClick={(event) => {
                  if (
                    !event.currentTarget.classList.contains(
                      "swiper-slide-active"
                    )
                  ) {
                    if (
                      event.currentTarget.classList.contains(
                        "swiper-slide-next"
                      )
                    ) {
                      nexto();
                    } else {
                      prevto();
                    }
                  }
                }}
                className={playerSelected === index ? data.icon : ""}
              >
                <motion.div
                  id={data.icon}
                  ref={(element) => playersSlidesEl.current.push(element)}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: _getTop(index),
                    opacity: playerSelected === -1 ? 1 : opacityControlsProgress,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",                      
                    }}
                  >
                    <spline-viewer
                      url={data.player}
                      loading-anim={true}
                      loading={"eager"}
                      ref={(element) => playersEl.current.push(element)}
                    ></spline-viewer>
                    {/* <Spline scene={data.player} onLoad={onLoad} /> */}
                  </div>
{/* 
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      display: playerSelected !== index ? "block" : "none",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background:
                          "url(" + data.playerPNG + ") no-repeat center center",
                      }}
                    ></div>
                  </div> */}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          x
          <motion.div
            className="navigation"
            style={{ opacity: opacityControlsProgress }}
          >
            {/* <div
              className="navigation_prev"
              onClick={() => {
                prevto();
              }}
            ></div>
            <motion.div
              className="navigation_select"
              whileHover={{
                backgroundColor: "#000000",
                color: "#FFFFFF",
              }}
              onClick={selectPlayerScroll}
            >
              Select player
            </motion.div>
            <div
              className="navigation_next"
              onClick={() => {
                nexto();
              }}
            ></div> */}
            <p className="prompt" dangerouslySetInnerHTML={{ __html: headerSlides[playerSelected].text }}></p>
          </motion.div>
          <motion.div className="swiper-button image-swiper-button-next" style={{ opacity: opacityControlsProgress }}  onClick={() => { nexto(); }}>            
          </motion.div>
          <motion.div className="swiper-button image-swiper-button-prev" style={{ opacity: opacityControlsProgress }} onClick={() => { prevto(); }}>          
          </motion.div>
        </motion.div>
      </div>
      {/* <Menu
        items={headerSlides}
        selected={playerSelected}
        onChange={(i) => _changeItem(i)}
        isVisible={isVisible}
      /> */}
    </div>
  );
}

export default Hero;