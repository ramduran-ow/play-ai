// import { useState, useEffect } from 'react';
import naming_gradient from '../../images/naming/namingGradient.webp'
import naming_01 from '../../images/naming/naming_01.webp'
import naming_02 from '../../images/naming/naming_02.webp'
import naming_03 from '../../images/naming/naming_03.webp'
import verizon from '../../images/naming/verizon.webp'
import sprite from '../../images/naming/sprite.webp'
import dino_day from'../../images/naming/dino_day.webp'
import dino_night from '../../images/naming/dino_night.webp'
import firmi from '../../images/naming/firmi.webp'
import cute_robot_idle from '../../images/naming/cute_robot2.webp'
import cute_robot_think from '../../images/naming/cute_robot.gif'
import duracell from '../../images/experiments/duracell.webp'
import off from '../../images/experiments/off.webp'
import experiment_01 from '../../images/experiments/experiment_01.webp'
import experiment_02 from '../../images/experiments/experiment_02.webp'
import experiment_03 from '../../images/experiments/experiment_03.webp'
import orange_robot1 from '../../images/experiments/orange_robot1.webp'
import tin_robot3 from '../../images/experiments/tin_robot3.webp'
import cute_robot from '../../images/experiments/cute_robot.webp'
import mobile_duracell_off from '../../images/experiments/mobile_duracell_off.webp'
import mobile_sprite_verizon from '../../images/naming/mobileSpriteVerizon.webp'
import toy_pile from '../../images/naming/toyPile.webp'
import hotdog from'../../images/naming/hotdog.webp'
import mask from '../../images/naming/mask.png'
import shadow from '../../images/naming/shadow.webp'
import headerShadeExperiment from '../../images/naming/headerShadeExperiment.webp'
import headerShadeNaming from '../../images/naming/headerShadeNaming.webp'
import experiment1Overlaid from '../../images/experiments/experiment1Overlaid.webp'
import playButton from '../../images/naming/playButton.png'
import abstract_fullscreen_03A_tn from '../../images/naming/abstract_fullscreen_03A_tn.webp'
import abstract_fullscreen_03B_tn from '../../images/naming/abstract_fullscreen_03B_tn.webp'
import abstract_fullscreen_03C_tn from '../../images/naming/abstract_fullscreen_03C_tn.webp'
import baseline_fullscreen_01_tn from '../../images/naming/baseline_fullscreen_01_tn.webp'
import coined_fullscreen_02C_tn from '../../images/naming/coined_fullscreen_02C_tn.webp'
import names_fullscreen_02B_tn from '../../images/naming/names_fullscreen_02B_tn.webp'
import words_fullscreen_02A_tn from '../../images/naming/words_fullscreen_02A_tn.webp'
import NameZap1_tn from '../../images/naming/NameZap1_tn.webp'

export {getImageByKey}

const imagesNaming = {
  naming_gradient,
  naming_01,
  naming_02,
  naming_03,
  verizon,
  sprite,
  dino_day,
  dino_night,
  firmi,
  cute_robot_idle,
  cute_robot_think,
  duracell,
  off,
  experiment_01,
  experiment_02,
  experiment_03,
  orange_robot1,
  tin_robot3,
  cute_robot,
  mobile_duracell_off,
  mobile_sprite_verizon,
  toy_pile,
  hotdog,
  mask,
  shadow,
  headerShadeExperiment,
  headerShadeNaming,
  experiment1Overlaid,
  playButton,
  abstract_fullscreen_03A_tn,
  abstract_fullscreen_03B_tn,
  abstract_fullscreen_03C_tn,
  baseline_fullscreen_01_tn,
  coined_fullscreen_02C_tn,
  names_fullscreen_02B_tn,
  words_fullscreen_02A_tn,
  NameZap1_tn
};

function getImageByKey(key) {
  // console.log(key)
  return imagesNaming[key]
}