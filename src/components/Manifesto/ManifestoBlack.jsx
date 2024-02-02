import "./Manifesto.css";

// MENU //
import ManifestoMenuVertical from "./ManifestoMenuVertical";

// FRAMER MOTION //
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export { ManifestoBlack };

const ManifestoBlack = ({ images, handlePlayerChange, selectedPlayer }) => {
  /// INVIEW ///
  const [p1, inView1, entry1] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const [p2, inView2, entry2] = useInView({
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
  const { scrollYProgress } = useScroll({ target: quotesContainer });
  const hMovement = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const hMovementP = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const hMovementLeftToRight = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const hMovementLeftToRightP = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -150]
  );

  const hOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const avocadoContainer = useRef(null);
  const { scrollYAvocado } = useScroll({ target: avocadoContainer });
  const parallax = useTransform(scrollYAvocado, [0, 1], [-300, 300]);

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

      <div className="manifesto-black_paragraph" >
        <motion.div
          style={{width:'60%', margin:'auto'}}
          animate={inView2 ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1, ease: "easeOut" }}
          ref={p2}
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
        <motion.img 
          src={images.avocado_toast}
          alt={images.avocado_toast}
          style={{
            userDrag: "none",
            WebkitUserDrag: "none",
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            height: "auto",
            parallax
          }}
        />
      </div>
      <motion.div
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
      <motion.div
        className="manifesto-black_paragraph"
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
    </section>
  );
};
