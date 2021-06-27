import React, { useEffect, useRef, useState } from "react"
import "../App.css"
import {FaBars} from 'react-icons/fa'
import { links,social } from "../Component/Data.js"
import logo from "../logo.svg"
 const NavBar =()=>{
     const [showlinks,setShowlinks]=useState(false);
     const linksContainerref=useRef(null);
     const linkref =useRef(null);
const togglelinks=()=>{
    setShowlinks(!showlinks);
}
useEffect(()=>{
    const linksheight=linkref.current.getBoundingClientRect().height;
    console.log(linksheight);
    if(showlinks)
    {
        linksContainerref.current.style.height=`${linksheight}px`;
    }
    else
    {
    linksContainerref.current.style.height="0px";
    }
},[showlinks])
     return(
         <nav>
             <div className="nav-center">
            <div className="nav-header">
                <img src={logo} alt="logo"></img>
                <button className="nav-toggle" onClick={togglelinks}>
<FaBars/>
                </button>
            </div>
            <div className="links-container" ref={linksContainerref}>
              <ul className="links" ref={linkref}>
               {links.map((link)=>{
                   return(
                   <li key={link.id}>
                       <a href={link.url}>{link.text}</a>
                   </li>
                   )
               })}
              </ul>
            </div>
            <ul className="social-icons">
            {social.map((Icons)=>{
                const {id,url,icon}=Icons;
                return(
                    <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                )
            })}
            </ul>
            </div>
         </nav>
     )
 }
 export default NavBar