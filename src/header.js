import React from 'react';
import Navmenu from './NavMenu.js';
import './header.css';
import "./bootstrap.min.css";

function Header() {
  return (
    <div>
        <header className="container">

<div className="row d-flex justify-content-between">
<img className="header-logo " alt="docplanner-logo"src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" />   
<Navmenu className="col-sm-6"/>

</div>

</header>

    </div>
    
       
  );
}

export default Header;
