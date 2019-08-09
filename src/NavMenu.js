import React from 'react';
import Navitem  from './NavItem.js';
import './NavMenu.css';
import "./bootstrap.min.css";

function item(name,link,nestList=""){
    this.name=name;
    this.link=link;
    nestList!=="" ? this.nestList=<ul>{nestList}</ul>:this.nestList="";
  
}

let marketing=new item("Marketing & PR","#")
let customer=new item("Customer Success & Sales","#")
let product=new item("IT , Product , Design & UX","#")
let finance=new item("Finance & Administration","#")
let hr=new item("HR & more","#")

let secondList=[marketing,customer,product,finance,hr]
let droplist=listItem(secondList)

let about=new item("About us","#")
let career=new item("Career","#")
let department=new item("Departments","#",droplist)

let mainList=[about,career,department]

function listItem(list){
   return(
       list.map(el =>
        <Navitem name={el.name} link={el.link} newlist={el.nestList}/>
        )
   )
}
let navlist=listItem(mainList)

function Navmenu() {
  return (
      <nav className="">
            <ul className="mainmenu">
                {navlist}
            </ul>
      </nav>
    
  );
}

export default Navmenu;
