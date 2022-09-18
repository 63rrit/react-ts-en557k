import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";


import SocialMediaList2 from "../components/Shared/SocialMediaList";

import DATA from "../DATA.js";

import './Navbar.css'

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  const sectionList = DATA.navBarList;  // 'Home' is out of the page.
  const iconList = DATA.socialLinks;

  const clickNavItem = (str) => {
    // const s = str ? str : 'home';
    str = str || 'home';

    props.onPageHandler(str);
    setNavbarOpen(false);
  }

  const onHomeClick = (e) => {
    e.preventDefault();
    setNavbarOpen(false);
  }


  return (
    <nav className= { "nav" } >
      <div className="nav-div"
      >
      {/* TODO: Home button logo */}
        <div className="nav-div-div">
          <div onClick={ (e) =>  onHomeClick(e) }>
            <NavLink to={ "/home" }     
              style={ { color: "white", top: "-94px", zIndex: "500" } }
              className={ "nav-div-div-a" } 
              // activeClassName={ "nav-item-a" } 
            >  
              Home 
            </NavLink>
          </div>
          <button
            className="nav-div-div-btn"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
            >         
              <FaBars style={ {color: 'white'} } />
          </button>
        </div>
        
        <div
          className={ "nav-div-2div" + 
            (navbarOpen ? " " : " nav-div-2div-02") }
        > 
          <div className="nav-center">
            <NavbarList sectionList={sectionList} onPage={ clickNavItem }/>
          </div>
          <div className="nav-right">
            <SocialMediaList2 iconList={iconList} />
            <NavbarBtn label='Register Now' link= 'https://tickets.tuvens.com/e/15/forro-sailing-week-2023' />
          </div>
      </div>
    </div>
  </nav>
  );
}

function NavbarBtn(props) {
  return (
    <button
      className={ "nav-btn-btn" }
      type="button"
      style={{ transition: "all .15s ease" }}

      onClick={(e) => {
        e.preventDefault();
        // window.location.href= "link";
        window.open(props.link, "_blank");
      }}   
    >
      { props.label }
    </button> 
    );
}


export function NavbarList(props) {
  return (
      <ul className="nav-list">
        { 
          props.sectionList.map( (item, index) => (
            <li className="nav-item-li" key = {index}>
              <NavLink to={ item.toLowerCase() } // activeClassName={ "nav-item-a" }
              > 
                {item} 
              </NavLink>
            </li>))
        }
      </ul>
    );
};