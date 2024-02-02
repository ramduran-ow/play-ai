import "./Manifesto.css";

// MENU //
import ManifestoMenuVertical from "./ManifestoMenuVertical";

// FRAMER MOTION //
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export { ManifestoBlack };
const ManifestoBlack = ({ images, handlePlayerChange, selectedPlayer }) => {
  const HereIsWhat = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    const avocadoToast = useTransform(scrollYProgress, [0, 1], [-100, 200]);

    const variants = {
      visible: { opacity: 1 },
      hidden: {
        opacity: 0,
      },
    };
    const [paragraphContainer, inView] = useInView({
      threshold: 0.5,
      triggerOnce: false,
    });

    return (
      <div className="manifesto-black_paragraph">
        <div ref={ref} style={{ zIndex: "1" }}>
          <motion.div
            style={{ width: "70%", margin: "auto", zIndex: "1" }}
            /*animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1, ease: "easeOut" }}
            ref={paragraphContainer}*/
          >
            <div className="manifesto-black_paragraph-title">
              Here’s what we believe:
            </div>
            <p>
              Exercising caution with any new technology is necessary. But
              choosing to be cautiously optimistic will open up a world of
              possibilities for our industry. The only way to understand the
              potential of new tech is to dive head first and learn.
            </p>
          </motion.div>
        </div>
        <motion.img
          src={images.avocado_toast}
          alt={images.avocado_toast}
          style={{
            position: "absolute",
            width: "80%",
            right: "0",
            opacity: ".2",
            zIndex: "0",
            userDrag: "none",
            WebkitUserDrag: "none",
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            height: "auto",
            y: avocadoToast
          }}
        />
        <motion.img
          src={images.avocado_3}
          alt={images.avocado_3}
          style={{
            position: "absolute",
            width: "auto",
            maxWidth: "350px",
            left: "0rem",
            zIndex: "0",
            userDrag: "none",
            WebkitUserDrag: "none",
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            height: "auto",
            y: y,
          }}
        />
      </div>
    );
  };

  /// INVIEW ///
  const [p1, inView1, entry1] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const [p3, inView3, entry3] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const [p4, inView4, entry4] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  /// VARIANTS ///

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
    },
  };

  /// QUOTES ANIMATION ///
  const quotesContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: quotesContainer,
    offset: ["0 0", "0.1 1"],
  });

  const hMovement = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const hMovementP = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const hMovementLeftToRight = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const hMovementLeftToRightP = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -150]
  );

  const hOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section className="manifesto-black">
      <ManifestoMenuVertical
        selectedPlayer={selectedPlayer}
        handlePlayerChange={handlePlayerChange}
        //handleSubHeaderChange={handleSubHeaderChange}
        //handleBackgroundChange={handleBackgroundChange}
      />

      {/*// QUOTES //*/}
      <div className="manifesto-black_quotes">
        <div ref={quotesContainer}>
          <motion.div
            className="manifesto-black_quote-1"
            style={{ x: hMovementP, opacity: hOpacity }}
          >
            “IT WILL TAKE
          </motion.div>
          <motion.div
            className="manifesto-black_quote-2"
            style={{ x: hMovementLeftToRightP, opacity: hOpacity }}
          >
            OUR JOBS”
          </motion.div>
        </div>
        <div>
          <motion.div
            className="manifesto-black_quote-3"
            style={{ x: hMovement, opacity: hOpacity }}
          >
            “IT’S THE
          </motion.div>
          <motion.div
            className="manifesto-black_quote-4"
            style={{ x: hMovementLeftToRight, opacity: hOpacity }}
          >
            AI APOCALYPSE”
          </motion.div>
        </div>
      </div>
      {/*// PARAGRAPHS //*/}
      <motion.div
        style={{ width: "60%", margin: "auto" }}
        className="manifesto-black_paragraph"
        animate={inView1 ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1, ease: "easeOut" }}
        ref={p1}
      >
        <p>
          While we’re all for tossing predictions around like avocado toast
          recipes on Instagram, what if the truth is somewhere between the
          fantasy and the fear mongering?
        </p>
      </motion.div>

      <HereIsWhat />
      <motion.div
        style={{ width: "60%", margin: "auto" }}
        className="manifesto-black_paragraph"
        animate={inView3 ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1, ease: "easeOut" }}
        ref={p3}
      >
        <div className="manifesto-black_paragraph-big">
          And to learn,<br></br>we must PLAY.
        </div>
      </motion.div>

      <div className="manifesto-black_paragraph">
        <motion.div
          style={{ width: "44%", margin: "auto" }}
          animate={inView4 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1, ease: "easeOut" }}
          ref={p4}
        >
          <p>
            There are plenty of things about AI we don’t know, but one thing do:
          </p>
          <p>
            AI is not going to take your next job, but a person who knows how to
            use it just might.
          </p>
        </motion.div>
        <motion.img
          src={images.avocado_1}
          alt={images.avocado_1}
          style={{
            position: "absolute",
            width: "auto",
            maxWidth: "200px",
            right: "14rem",
            zIndex: "0",
            userDrag: "none",
            WebkitUserDrag: "none",
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            height: "auto",
            rotate: "33deg",
            //transform: isInView ? "translatey(200px)" : "translatey(-200px)",
            //transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        />
      </div>
    </section>
  );
};
