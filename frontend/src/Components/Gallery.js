import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Gallery(){

 
  
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






          <div id="main_gall">
          <div class="gallery">
  <img src="https://www.sufiapublicschool.in/images/Transportation.jpg"/>
  <img src="https://content.jdmagicbox.com/comp/basti/j4/9999p5542.5542.170929153314.r1j4/catalogue/little-planet-school-basti-schools-exj5y.jpg" alt="a waterfall and many rocks"/>
  <img src="https://cdn.pixabay.com/photo/2015/08/12/13/30/food-for-hungry-children-885871_960_720.jpg" alt="a house on a mountain"/>
  <img src="https://assets.telegraphindia.com/telegraph/2022/Apr/1650477688_school.jpg"/>
  <img src="https://media.istockphoto.com/id/1401611683/photo/kids-learning-to-play-chess-together.jpg?s=612x612&w=0&k=20&c=CH51KBqnqXEqALibvik8TnnWyweA0-IvUrce4tZha9I=" alt="big rocks with some trees"/>
  <img src="https://kmrschool.com/wp-content/uploads/2019/12/SmartBoard-Classroom-1024x680.jpg" alt="a waterfall, a lot of tree and a great view from the sky"/>
  <img src="https://m.media-amazon.com/images/I/81X3PMNNA4L._AC_UF1000,1000_QL80_.jpg"/>
  <img src="https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/sites/10/2019/05/29084021/7.jpg"/>
  <img src="https://naipunnya.ac.in/wp-content/uploads/2022/08/Seminar-Hall-1.jpg" alt="a great view of the sea above the mountain"/>
  <img src="https://images.indianexpress.com/2024/01/Schools-NEP-2020.jpg?w=414" alt="a cool landscape"/>
  <img src="https://cache.careers360.mobi/media/presets/860X430/article_images/2020/3/2/Schools-grouping-children-HC.webp" alt="inside a town between two big buildings"/>
  <img src="https://i.pinimg.com/736x/43/80/7e/43807e3b296aba05332e66574ac6dbf6.jpg" alt="a great view of the sea above the mountain"/>
  <img src="https://www.stmarysbudhivihar.in/images/1631874785.jpg" alt="a forest after an apocalypse"/>
  <img src="https://www.vvsw.edu.in/wp-content/uploads/2019/08/VVSW-infrastructure-1.jpg" alt="a waterfall and many rocks"/>
  <img src="https://nalandaschool.org/wp-content/uploads/2021/06/computer-lab-B2.jpg" alt="a house on a mountain"/>

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
  
    };
