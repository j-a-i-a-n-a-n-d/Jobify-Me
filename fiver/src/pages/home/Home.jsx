import React from 'react';
import {
  Carousel,
  Component8,
  Featured,
  FiverBusiness,
  Layer,
  WhyFiverr,
  Carousel2,
} from '../../components';
import { cards, projects } from '../dummyData';
import './home.scss';

const Home = () => {
  //cards data
  let rows1 = 1;
  let slidesToShow1 = 4;

  //projects data
  let rows2 = 1;
  let slidesToShow2 = 3;
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
      <div className='container2'>
        <h1>Get inspired with projects made by our freelancers</h1>
      </div>
      <Carousel2
        rows={rows2}
        slidesToShow={slidesToShow2}
        projects={projects}
      />
    </div>
  );
};

export default Home;
