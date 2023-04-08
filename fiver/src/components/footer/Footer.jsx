import React from 'react';
import './footer.scss';

const Footer = () => {
  const categories = [
    'Graphics & Design',
    'Digital Marketing',
    'Writing & Translation',
    'Video & Animation',
    'Music & Audio',
    'Programming & Tech',
    'Data',
    'Business',
    'Lifestyle',
    'Photography',
    'Sitemap',
  ];
  const about = [
    'Careers',
    'Press & News',
    'Partnerships',
    'Privacy Policy',
    'Terms of Service',
    'Intellectual Property Claims',
    'Investor Relations',
  ];
  const support = [
    'Help & Support',
    'Trust & Safety',
    'Selling on Fiverr',
    'Buying on Fiverr',
  ];
  const community = [
    'Customer Success Stories',
    'Community Hub',
    'Forum',
    'Events',
    'Blog',
    'Influencers',
    'Affiliates',
    'Podcast',
    'Invite a Friend',
    'Become a Seller',
    'Community Standards',
  ];

  const moreOnFiverr = [
    'Fiverr Business',
    'Fiverr Pro',
    'Fiverr Logo Maker',
    'Fiverr Guides',
    'Get Inspired',
    'Fiverr Select',
    'ClearVoice',
    'Content Marketing',
    'Fiverr Workspace Invoice Software',
    'Learn Online Courses',
    'Working Not Working',
  ];
  const categorieslist = categories.map((item) => <a href='#'>{item}</a>);
  const aboutlist = about.map((item) => <a href='#'>{item}</a>);
  const supportlist = support.map((item) => <a href='#'>{item}</a>);
  const communitylist = community.map((item) => <a href='#'>{item}</a>);
  const moreOnFiverrlist = moreOnFiverr.map((item) => <a href='#'>{item}</a>);
  return (
    <div className='footer'>
      <div className='container'>
        <div className='upper-footer'>
          <div className='footer-cats'>
            <a href='' className='heading-cat'>
              Categories
            </a>
            {categorieslist}
          </div>
          <div className='footer-cats'>
            <a href='' className='heading-cat'>
              About
            </a>
            {aboutlist}
          </div>
          <div className='footer-cats'>
            <a href='' className='heading-cat'>
              Support
            </a>
            {supportlist}
          </div>
          <div className='footer-cats'>
            <a href='' className='heading-cat'>
              Community
            </a>
            {communitylist}
          </div>
          <div className='footer-cats'>
            <a href='' className='heading-cat'>
              More On Fiverr
            </a>
            {moreOnFiverrlist}
          </div>
        </div>
        <div className='lower-footer'>
          <div className='leftside'>
            <span>fiverr </span>
            <span>
              <sup>©</sup>All Rights Reserved 2023
            </span>
          </div>
          <div className='rightside'>
            <img src='../images/twitter.png' />
            <img src='../images/facebook.png' />
            <img src='../images/linkedin.png' />
            <img src='../images/pinterest.png' />
            <img src='../images/instagram.png' />
            <div>
              <img src='../images/language.png' />
              English
            </div>
            <div>
              <img src='../images/coin.png' />
              INR
            </div>

            <img src='../images/accessibility.png' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
