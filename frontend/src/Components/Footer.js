import React from 'react';


import './sty.css';
import { Routes, Route, Link } from 'react-router-dom';

export default function Footer() {
 

  return (
    <>

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
