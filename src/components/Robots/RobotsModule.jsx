import React from 'react';
import styled from 'styled-components';
import './Robots.css';
import TextStrings from './textStrings';

const RobotOne = styled.img.attrs({
  src: process.env.PUBLIC_URL + '/images/robots/robotott-1.webp',
  className: 'robotOne'
})``;

const RobotTwo = styled.img.attrs({
  src: process.env.PUBLIC_URL + '/images/robots/robotott-2.webp',
  className: 'robotTwo'
})``;

const RobotThree = styled.img.attrs({
  src: process.env.PUBLIC_URL + '/images/robots/robotott-3.webp',
  className: 'robotThree'
})``;

const RobotBeach = styled.img.attrs({
  src: process.env.PUBLIC_URL + '/images/robots/robotbeach.webp',
  className: 'robotBeach'
})``;

const RobotsModule = () => {
  return (
    <section className='robotsSection'>
      <div className='robotsWrapper'>

        <div className='robotBlockOne'>
          <h2 className='robotHeading'>{TextStrings.BlockOne.HeadOne}</h2>
          <h2 className='robotHeading'>{TextStrings.BlockOne.HeadTwo}</h2>
          <h2 className='robotHeading'>{TextStrings.BlockOne.HeadThree}</h2>
          <RobotOne />
        </div>

        <div className='robotBlockTwo grayHeadings'>
          <div className='robotTextWrapper'>
            <p>{TextStrings.BlockTwo.TextOne}</p>
            <p>{TextStrings.BlockTwo.TextTwo}</p>
          </div>
          <h2 className='robotHeading'>{TextStrings.BlockTwo.HeadOne}</h2>
          <h2 className='robotHeading'>{TextStrings.BlockTwo.HeadTwo}</h2>
          <h2 className='robotHeading'>{TextStrings.BlockTwo.HeadThree}</h2>
          <div className='robotTextWrapper'>
            <p>{TextStrings.BlockTwo.TextThree}</p>
          </div>
          <RobotTwo />
        </div>

        <div className='robotBlockThree grayHeadings'>
          <h2 className='robotHeading'>{TextStrings.BlockThree.HeadOne}</h2>
          <h2 className='robotHeading'>{TextStrings.BlockThree.HeadTwo}</h2>
          <h2 className='robotHeading'>{TextStrings.BlockThree.HeadThree}</h2>
          <div className='robotTextWrapper'>
            <ul>
              {TextStrings.BlockThree.ListOne.split('\n').map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
          </div>
          <h2 className='robotHeading'>{TextStrings.BlockThree.HeadFour}</h2>
          <h2 className='robotHeading'>{TextStrings.BlockThree.HeadTwo}</h2>
          <h2 className='robotHeading'>{TextStrings.BlockThree.HeadThree}</h2>
          <RobotThree />
        </div>

        <div className='robotBlockFour'>
          <div className='robotTextWrapper'>
            <p>{TextStrings.BlockFour.TextOne}</p>
            <p>{TextStrings.BlockFour.TextTwo}</p>
          </div>
          <RobotBeach />
        </div>

      </div>
    </section>
  );
};

export default RobotsModule;
