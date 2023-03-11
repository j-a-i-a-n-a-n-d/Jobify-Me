import React from 'react';
import './layer.scss';

const Layer = () => {
  return (
    <div className='layer'>
      <div className='container'>
        <span className='trustedBy'>
          <i>Trusted By : </i>
        </span>
        <span>
          <img src='./Layersvgs/google.png' />
        </span>
        <span>
          <img src='./Layersvgs/meta.png' />
        </span>
        <span>
          <img src='./Layersvgs/p&g.png' />
        </span>
        <span>
          <img src='./Layersvgs/paypal.png' />
        </span>
        <span>
          <img src='./Layersvgs/netflix.png' />
        </span>
      </div>
    </div>
  );
};
export default Layer;
