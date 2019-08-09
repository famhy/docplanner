import React from 'react';
import Header from './header.js';
import Main from './Main.js';

import './Footer.css';

function Footer() {
  return (
    <footer>
    <div>
      <p>We are leaders in 10 countries: 
          <a href="#">Poland</a>, 
          <a href="#">Turkey</a>, 
          <a href="#">Spain</a>,
          <a href="#">Italy, </a>
          <a href="#">Czech Republic</a>,
          <a href="#"> Mexico</a>, 
          <a href="#">Colombia</a>, 
          <a href="#">Brazil</a>, 
          <a href="#">Argentina</a> and <a href="#">Chile</a>
        
        </p>
        <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
      <p>www.docplanner.com © 2019</p>
    </div>
  </footer>
    
  );
}

export default Footer;