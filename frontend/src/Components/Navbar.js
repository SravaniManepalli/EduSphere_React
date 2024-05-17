import React from 'react';
import Marks from './Marks';
import Home from './Home'
import About from './About';
import Stumarks from './Stumarks';
import Reg from './Reg';
import Login from './Login';
import Gallery from './Gallery';
import './sty.css';

import { Routes, Route, Link } from 'react-router-dom';

export default function Navbar() {
 

  return (
    <>
      

      

      <nav>
         <div class="logo">
            Edu Sphere
         </div>
         <input type="checkbox" id="click"/>
         <label for="click" class="menu-btn">
         <i class="fas fa-bars"></i>
         </label>
         <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Marks">Marks</Link></li>
            <li><Link to="/Stumarks">My Marks</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>

            <li><a href="#">Feedback</a></li>
         </ul>
      </nav>

      
      <Routes>
      <Route exact path='/Home' element={<Home />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/Marks' element={<Marks />} />
        <Route exact path='/Stumarks' element={<Stumarks />} />
        <Route exact path='/Reg' element={<Reg/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Gallery' element={<Gallery/>}/>


      </Routes>
    </>
  );
}
