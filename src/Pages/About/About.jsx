import '../About/About.css';
import React, { useContext } from 'react';
import img from './img/Logo.svg';
import { Context } from '../../Content/Context';

function About() {
const {mode} = useContext(Context)
console.log(mode);
  return (
    <div className="home_pizza">
    <div className="home_navbar">
        <div className="logo">
           <img src={img} alt="" />
           
        </div>
        <div className="home_links">
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">Specials & Coupons</a>
            <a href="#">Contact Us</a>
        </div>
    </div>
    </div>
  )
}

export default About