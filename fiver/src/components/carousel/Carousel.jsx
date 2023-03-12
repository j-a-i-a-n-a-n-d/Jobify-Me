import './carousel.scss';
import React from 'react';
import Slider from 'infinite-react-carousel';
import Card from '../card/card';
const Carousel = ({ rows, slidesToShow, cards }) => {
  let cardList = cards.map((card) => (
    <Card key={card.id} title={card.title} desc={card.desc} img={card.img} />
  ));
  console.log(cardList);
  return (
    <div className='carousel'>
      <div className='container'>
        <Slider rows={rows} slidesToShow={slidesToShow}>
          {cardList}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
