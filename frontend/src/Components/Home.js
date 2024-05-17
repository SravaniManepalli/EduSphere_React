import React, { useState } from 'react';
import axios from 'axios';
import './sty.css';
import { Routes, Route, Link } from 'react-router-dom';

export default function Home(){
  return(
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





      <div className='responsive-container-block.bigContainer'>
      
      <div>
<div class="carouseldon">
  <ul class="slides">
    <input type="radio" name="radio-buttons" id="img-1" checked />
    <li class="slide-container">
      <div class="slide-image">
        <img src="https://www.hurix.com/wp-content/w3-webp/uploads/2022/01/Future-of-higher-education-1200x565.jpgw3.webp"/>

      </div>
      <div class="carousel-controls">
        <label for="img-3" class="prev-slide">
          <span>&lsaquo;</span>
        </label>
        <label for="img-2" class="next-slide">
          <span>&rsaquo;</span>
        </label>
      </div>
    </li>
    <input type="radio" name="radio-buttons" id="img-2" />
    <li class="slide-container">
      <div class="slide-image">
      <img src="https://www.hurix.com/wp-content/w3-webp/uploads/2022/01/Future-of-higher-education-1200x565.jpgw3.webp"/>
      </div>
      <div class="carousel-controls">
        <label for="img-1" class="prev-slide">
          <span>&lsaquo;</span>
        </label>
        <label for="img-3" class="next-slide">
          <span>&rsaquo;</span>
        </label>
      </div>
    </li>
    <input type="radio" name="radio-buttons" id="img-3" />
    <li class="slide-container">
      <div class="slide-image">
        <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg"/>
      </div>
      <div class="carousel-controls">
        <label for="img-2" class="prev-slide">
          <span>&lsaquo;</span>
        </label>
        <label for="img-1" class="next-slide">
          <span>&rsaquo;</span>
        </label>
      </div>
    </li>
    <div class="carousel-dots">
      <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
      <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
      <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
    </div>
  </ul>
</div>
</div>
</div>

<div class="card-list">
        <a href="#" class="card-item">
            <img src="https://www.shutterstock.com/image-vector/happy-children-enjoy-holidays-school-260nw-2393040703.jpg" alt="Card Image"/>
            <span class="developer">Holidays</span>
            

        </a>
        <a href="#" class="card-item">
            <img src="https://img.freepik.com/free-vector/hand-drawn-college-entrance-exam-illustration_23-2150359350.jpg" alt="Card Image"/>
            <span class="designer">Assignments</span>
            
        </a>
        <a href="#" class="card-item">
            <img src="https://img.freepik.com/free-vector/hand-drawn-report-card-illustration_23-2150985083.jpg" alt="Card Image"/>
            <span class="editor">Score card</span>
            

        </a>
    </div>







    <footer class="footer">
  	 <div class="footercontainer">
  	 	<div class="footerrow">
  	 		<div class="footer-col">
  	 			<h4>Institution</h4>
  	 			<ul>
  	 				<li><Link to="/About">About</Link></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Important information</h4>
  	 			<ul>
  	 				<li><a href="#">Our Policies</a></li>
  	 				<li><a href="#">Terms and Conditions</a></li>
  	 				<li><a href="#">Legal Disclaimers</a></li>
  	 				<li><a href="#">Contact Us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Resources</h4>
  	 			<ul>
  	 				<li><a href="#">Blog</a></li>
  	 				<li><a href="#">IT Support</a></li>
  	 				<li><a href="#">Alumni Network</a></li>
  	 				<li><a href="#">Help Center</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
                   
  	 				<a href="#"><i class="fa-brands fa-facebook"></i></a>
  	 				<a href="#"><i class="fa-brands fa-github"></i></a>
  	 				<a href="#"><i class="fa-brands fa-twitter"></i></a>
  	 				<a href="#"><i class="fa-brands fa-linkedin"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  
      </>
  );
  }
