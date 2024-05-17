import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';


export default function About(){
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














        <div class="responsive-container-block bigContainer">
    <div class="responsive-container-block Container">
      <img class="mainImg" src="https://thumbs.dreamstime.com/z/education-icons-tree-related-objects-69587646.jpg"/>
      <div class="allText aboveText">
        <p class="text-blk headingText">
          Our Mission
        </p>
        <p class="text-blk subHeadingText">
        Shaping Futures, Nurturing Excellence      </p>
        <p class="text-blk description">

        The mission of our school is rooted in a commitment to educational excellence and the holistic development of every student. We strive to provide a high-quality learning environment that nurtures academic achievement, critical thinking, and a passion for lifelong learning. Central to our mission is the cultivation of strong character, ethical behavior, and good citizenship. We embrace diversity, fostering an inclusive community that values and respects the unique backgrounds, perspectives, and abilities of all individuals. Engaging parents, guardians.</p>
        <button class="explore">
          Explore
          
        </button>
      </div>
    </div>
    <div class="responsive-container-block Container bottomContainer">
      <img class="mainImg" src="https://img.freepik.com/free-vector/preparing-test-together-learning-studying-with-friends-effective-revision-revision-timetables-planning-how-revise-exams-concept_335657-825.jpg"/>
      <div class="allText bottomText">
        <p class="text-blk headingText">
          Our Vision
        </p>
        <p class="text-blk subHeadingText">
        Empowering Minds, Inspiring Futures    </p>
        <p class="text-blk description">
        In our vision, we strive to create an educational institution that empowers students to unlock their full potential. We envision a dynamic learning environment that fosters creativity, critical thinking, and a passion for lifelong learning. By embracing innovation and adapting to evolving educational landscapes, we aim to be a beacon of excellence, preparing students not only for academic success but also for the challenges and opportunities of the future.
        </p>
        <button class="explore">
          Explore
        </button>
      </div>
    </div>
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
    )
}