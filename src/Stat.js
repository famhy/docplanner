import React from 'react';
import './Stat.css';
import "./bootstrap.min.css";
import { tsPropertySignature } from '@babel/types';


function Stat(props) {
   
  return (
    <div className="col">
    <img src={props.link}/>
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </div>
  );
}


export default Stat;
