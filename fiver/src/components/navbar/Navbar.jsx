import React, { useEffect, useState } from 'react';
import './navbar.scss';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const [open, Isopen] = useState(false);
  //console.log(open);

  const activeFunction = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', activeFunction);
    //cleanup function while using useEffect
    () => {
      window.removeEventListener('scroll', activeFunction);
    };
  }, []);

  const userInfo = {
    $id: 69,
    $name: 'Papa',
    $seller: true,
  };

  //useLocation hook
  const location = useLocation();
  console.log(location);
  return (
    <div
      className={
        active || location.pathname !== '/' ? 'navbar active' : 'navbar'
      }
    >
      <div className='container'>
        <Link className='link' to='/'>
          <div className='logo'>
            <span className='text'>fiverr</span>
            <span className='dot'>.</span>
          </div>
        </Link>
        <div className='rightSide'>
          <Link className='link' to='/'>
            Fiverr Business
          </Link>
          <Link className='link' to='/'>
            Explore
          </Link>
          <Link className='link' to='/'>
            English
          </Link>
          <Link className='link' to='/'>
            Sign In
          </Link>
          {!userInfo.$seller && (
            <Link className='link' to='/'>
              Become a Seller
            </Link>
          )}
          {!userInfo && <button>Join</button>}
          {userInfo && (
            <React.Fragment>
              <div className='user' onClick={() => Isopen(!open)}>
                <img src='' />
                <span>{userInfo.$name}</span>
                {open && (
                  <div className='options'>
                    {userInfo.$seller ? (
                      <React.Fragment>
                        <Link className='link' to='/mygigs'>
                          Gigs
                        </Link>
                        <Link className='link' to='/gigs'>
                          Add New Gigs
                        </Link>
                      </React.Fragment>
                    ) : (
                      <React.Fragment></React.Fragment>
                    )}
                    <>
                      <Link className='link' to='/orders'>
                        Orders
                      </Link>
                      <Link className='link' to='/messages'>
                        Messages
                      </Link>
                      <Link className='link' to='/'>
                        logout
                      </Link>
                    </>
                  </div>
                )}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>

      {(active || location.pathname !== '/') && (
        <React.Fragment>
          <hr />
          <div className='menu'>
            <Link className='link' href='/'>
              Test1
            </Link>
            <Link className='link' href='/'>
              Test2
            </Link>
            <Link className='link' href='/'>
              Test3
            </Link>
            <Link className='link' href='/'>
              Test4
            </Link>
            <Link className='link' href='/'>
              Test5
            </Link>
            <Link className='link' href='/'>
              Test6
            </Link>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Navbar;
