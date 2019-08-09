import React from 'react';
import Navmenu from './NavMenu.js';
import './Service.css';
import "./bootstrap.min.css";
const figureStyle={
    marginTop:'-40px',
};



function Figure(props) {
   
  return (
    props.selection!==""?<figure style={figureStyle}>
    <img src={props.link}/>
</figure>
:<figure>
    <img src={super.props.link}/>
</figure>
  );
}


export default Figure;
