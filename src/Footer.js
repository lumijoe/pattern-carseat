// Footer.js

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="left-column">
        <div className="two-lines">
          <p>Seat Pattern</p>
          <p>React, Next.js</p>
        </div>
      </div>
      <div className="middle-column">
        <p>©️LK</p>
      </div>
      <div className="right-column">
        <div className="icon-box">
          <a href="https://qiita.com/lumijoe">
            <img src="/favicon_Qiita.png" alt="Qiita" />
          </a>
        </div>
        <div className="icon-box">
          <a href="https://github.com/lumijoe">
            <img src="/github-mark.png" alt="GitHub" />
          </a>
        </div>
        <div className="icon-box">
          <a href="https://vercel.com/lumijoes-projects" className='vercel'>
            Vercel
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
