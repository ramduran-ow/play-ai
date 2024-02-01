import React from 'react';
import styled from 'styled-components';
import './KeepExploring.css';

const ExploringCard = styled.a.attrs({
  className: 'exploringCard',
  href: '#'
})`
  background-image: url('../../images/footer/articleCard.jpg');
`;

const KeepExploring = () => {
  return (
      <div className='keepExploring'>
        <div className='footerWrapper'>
          <div className='dFlex flexColumn'>
            <h3 className='noe50px'>Keep exploring</h3>
            <ExploringCard>
              <h4 className='noe60px'>Applying the power of AI to naming</h4>
            </ExploringCard>
          </div>
        </div>
      </div>
  );
};

export default KeepExploring;