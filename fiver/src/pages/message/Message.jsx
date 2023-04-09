import React from 'react';
import { Link } from 'react-router-dom';
import './message.scss';

const SingleText1 = () => {
  return (
    <div className='item'>
      <img
        src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
        alt=''
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
        mollitia perspiciatis officiis voluptate? Sequi quae officia possimus,
        iusto labore alias mollitia eveniet nemo placeat laboriosam nisi animi!
        Error, tenetur!
      </p>
    </div>
  );
};

const SingleText2 = () => {
  return (
    <div className='item owner'>
      <img
        src='https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600'
        alt=''
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
        mollitia perspiciatis officiis voluptate? Sequi quae officia possimus,
        iusto labore alias mollitia eveniet nemo placeat laboriosam nisi animi!
        Error, tenetur!
      </p>
    </div>
  );
};
const Message = () => {
  return (
    <div className='message'>
      <div className='container'>
        <span className='breadcrumbs'>
          <Link to='/messages' className='link'>
            Messages
          </Link>{' '}
          &gt; John Doe &gt;
        </span>
        <div className='messages'>
          <SingleText1 />
          <SingleText2 />
          <SingleText1 />
          <SingleText2 />
          <SingleText1 />
          <SingleText2 />
          <SingleText1 />
          <SingleText2 />
          <SingleText1 />
          <SingleText2 />
        </div>
        <hr />
        <div className='write'>
          <textarea type='text' placeholder='write a message' />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
