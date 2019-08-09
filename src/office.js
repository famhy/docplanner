import React from "react";

import "./office.css";
import "./bootstrap.min.css";
import { tsPropertySignature } from "@babel/types";

function Office(props) {
  return (
    
 <a className="office-link" href="#">
 <figure class="offices-img">
   <img src={props.img}/>
 </figure>
 <div>
   <span>{props.lieu}</span>
   <button>SEE OPPENING</button>
 </div>
</a>
  );
}

export default Office;







