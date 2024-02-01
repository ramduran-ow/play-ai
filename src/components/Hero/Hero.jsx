import "./Hero.css";
import React from "react";

//const Spline = React.lazy(() => import("@splinetool/react-spline"));
/* SWIPER */
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// FRAMER MOTION //
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Hero({ handlePlayerChange, player }) {
  const [playerSelected, SetPlayerSelected] = useState(0);
  //const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log("playerSelected updated in Hero");
    handlePlayerChange(playerSelected);
  }, [playerSelected]); // eslint-disable-line

  useEffect(() => {
    SetPlayerSelected(player);
    _changeItem(player);
  }, [player]); // eslint-disable-line

  /////////////
  // PLAYERS //
  /////////////
  const headerSlides = [
    {
      player: "https://prod.spline.design/Tzm0Yx5E2rLLcBPr/scene.splinecode",
      playerResetID: "c0f7bdf9-6453-42af-808a-a35519934bc5",
      playerPNG: "images/players/SymbolBase.png",
      icon: "symbol",
      backGradient:
        "linear-gradient(116deg, rgba(164, 179, 255, 0.40) 1.25%, rgba(189, 203, 255, 0.40) 29.79%, rgba(206, 184, 255, 0.40) 71.6%, rgba(204, 167, 255, 0.40) 100%)",
      playerShadow:
        "radial-gradient(ellipse at 50% 50%,rgba(128, 158, 255,.8),transparent,transparent)",
      text: "/Prompt: <b>Futuristic</b>",
    },
    {
      player: "https://prod.spline.design/KyFTr0g3yATY22L1/scene.splinecode",
      playerResetID: "c0f7bdf9-6453-42af-808a-a35519934bc5",
      playerPNG: "images/players/DogBase.png",
      icon: "dog",
      backGradient:
        "linear-gradient(116deg,#ffde9f 1.25%,#fff2d0 29.54%,#ffe3cf 65.02%,#ffb7a0 100%)",
      playerShadow:
        "radial-gradient(ellipse at 50% 50%,rgba(253, 153, 153, .8),transparent,transparent)",
      text: "/Prompt: <b>Dog(e)-Mode</b>",
    },
    {
      player: "https://prod.spline.design/qTXXVPwhqXFHSma5/scene.splinecode",
      playerResetID: "c0f7bdf9-6453-42af-808a-a35519934bc5",
      playerPNG: "images/players/QuillBase.png",
      icon: "quill",
      backGradient:
        "linear-gradient(116deg, #DDD3F1 1.25%, #EEEDFF 31.59%, #FFDBE1 71.71%, #FBB 100%)",
      playerShadow:
        "radial-gradient(ellipse at 50% 50%,rgba(204, 177, 232, .8),transparent,transparent)",
      text: "/Prompt: <b>Shakespearinator</b>",
    },
    {
      player: "https://prod.spline.design/bhPY5q3v66X4rUKi/scene.splinecode",
      playerResetID: "c0f7bdf9-6453-42af-808a-a35519934bc5",
      playerPNG: "images/players/GuitarBase.png",
      icon: "guitar",
      backGradient:
        "linear-gradient(116deg, #FFF2D0 1.25%, #F1FFD4 33.14%, #E1FFE6 65.02%, #D4FFF5 100%)",
      playerShadow:
        "radial-gradient(ellipse at 50% 50%,rgba(123, 149, 217, .8),transparent,transparent)",
      text: "/Prompt: <b>Heavy Metal-ic</b>",
    },
    {
      player: "https://prod.spline.design/FsU-V8XgBeQRJ6pD/scene.splinecode",
      playerResetID: "c0f7bdf9-6453-42af-808a-a35519934bc5",
      playerPNG: "images/players/SphereBase.png",
      icon: "sphere",
      backGradient:
        "linear-gradient(116deg, rgba(129, 218, 202, 0.40) 1.25%, rgba(118, 228, 202, 0.40) 29.02%, rgba(149, 236, 255, 0.40) 67.6%, rgba(149, 147, 255, 0.40) 100%)",
      playerShadow:
        "radial-gradient(ellipse at 50% 50%,rgba(190, 152, 238, .8),transparent,transparent)",
      text: "/Prompt: <b>Gen-Zify</b>",
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

  // FRAMER SCROLL ANIMATIONS //
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["0 0", "0.1 1"],
  });
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacityControlsProgress = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacityControlsArrowProgress = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 0]
  );

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.45]);
  const scaleTopProgress = useTransform(scrollYProgress, [0, 1], [0, 140]);

  const topProgress = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  // SPLINE VIEWER //
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://unpkg.com/@splinetool/viewer@0.9.486/build/spline-viewer.js";
    script.async = true;
    script.type = "module";

    document.body.appendChild(script);
  }, []);

  const _getTop = (i) => {
    if (playersSlidesEl.current[playerSelected]) {
      if (
        playersSlidesEl.current[i].id ===
        playersSlidesEl.current[playerSelected].id
      ) {
        return playerSelected === i ? topProgress : 0;
      }
    }
  };

  return (
    <section className="hero">
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
              background: headerSlides[playerSelected].playerShadow,
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
              disabledClass: "swiper-button-disabled",
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
                    opacity:
                      playerSelected === -1 ? 1 : opacityControlsProgress,
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
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          x
          <motion.div
            className="navigation"
            style={{ opacity: opacityControlsProgress }}
          >
            <p
              className="prompt"
              dangerouslySetInnerHTML={{
                __html: headerSlides[playerSelected].text,
              }}
            ></p>
          </motion.div>
          <motion.div
            className="swiper-button image-swiper-button-next"
            style={{
              opacity: opacityControlsArrowProgress,
            }}
            onClick={() => {
              window.scrollY < 1 && nexto();
            }}
          />
          <motion.div
            className="swiper-button image-swiper-button-prev"
            style={{
              opacity: opacityControlsArrowProgress,
            }}
            onClick={() => {
              window.scrollY < 1 && prevto();
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
