import React from 'react';
import {
  Carousel,
  Component8,
  Featured,
  FiverBusiness,
  Layer,
  WhyFiverr,
} from '../../components';
import { cards, projects } from '../dummyData';
import './home.scss';

const Home = () => {
  let rows1 = 1;
  let slidesToShow1 = 4;
  //console.log(cards);
  return (
    <div>
      <Featured />
      <Layer />
      <br />
      <br />
      <br />
      <div className='PPS'>
        <div className='container'>Popular professional services</div>
      </div>
      <br />
      <Carousel rows={rows1} slidesToShow={slidesToShow1} cards={cards} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <WhyFiverr />
      <div className='container2'>
        <h1>Explore The MarketPlace</h1>
      </div>
      <Component8 />
      <FiverBusiness />
    </div>
  );
};

export default Home;
