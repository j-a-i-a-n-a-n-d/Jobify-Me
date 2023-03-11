import React from 'react';
import './errorpage.css'; // Import your custom CSS file

const ErrorPage = () => {
  return (
    <div className='error-container'>
      <span className='sad-emoji' role='img' aria-label='Sad Emoji'>
        :(
      </span>
      <p className='error-message'>
        We're sorry, but the page you are looking for cannot be found.
        <br />
        <br />
        Error code: 404 - Page not found
        <br />
        <br />
        If you need to contact technical support, please provide the above error
        code.
      </p>
    </div>
  );
};

export default ErrorPage;
