import React from 'react';
import { Carousel, Featured, Layer } from '../../components';
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
      <Carousel rows={rows1} slidesToShow={slidesToShow1} cards={cards} />
    </div>
  );
};

export default Home;
