import './carousel2.scss';
import React from 'react';
import Slider from 'infinite-react-carousel';
import Card2 from '../card2/Card2';
const Carousel2 = ({ rows, slidesToShow, projects }) => {
  let projectList = projects.map((project) => (
    <Card2
      key={project.id}
      username={project.username}
      cat={project.cat}
      img={project.img}
      pp={project.pp}
    />
  ));
  console.log(projectList);
  return (
    <div className='carousel2'>
      <div className='container'>
        <Slider
          rows={rows}
          slidesToShow={slidesToShow}
          autoplay='true'
          autoplaySpeed='1000'
        >
          {projectList}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel2;
