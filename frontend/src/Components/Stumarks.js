import React, { useState } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './sty.css';
import { Routes, Route, Link } from 'react-router-dom';

const formatDate = (dateString) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default function Stumarks() {
  const [allMarks, setAllMarks] = useState([]);
  const [isTableVisible, setTableVisibility] = useState(false);

  const [studentId, setStudentId] = useState('');
  const [markById, setMarkById] = useState(null);
  const [newMark, setNewMark] = useState({
    student_id: '',
    telugu: '',
    english: '',
    science: '',
    maths: '',
    social: '',
    exam_date: '',
  });
  const [updateMarkData, setUpdateMarkData] = useState({
    student_id: '',
    telugu: '',
    english: '',
    science: '',
    maths: '',
    social: '',
    exam_date: '',
  });

  const [showNoDataMessage, setShowNoDataMessage] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [isMarksDisplayed, setMarksDisplayed] = useState(false);

  // fetchall---------------------------------------------------
  const fetchallMarks = () => {
    axios.get('http://localhost:3001/marks')
      .then(response => {
        setAllMarks(response.data);
        setTableVisibility(true);
      })
      .catch(error => {
        console.error('Error fetching marks:', error);
      });
  };

  // fetchbyid------------------------------------------------
  const getMarkById = () => {
    axios.get(`http://localhost:3001/marks/${studentId}`)
      .then(response => {
        const fetchedMark = response.data;
        setMarkById(fetchedMark);
        setUpdateMarkData({
          student_id: fetchedMark[0],
          telugu: fetchedMark[1],
          english: fetchedMark[2],
          science: fetchedMark[3],
          maths: fetchedMark[4],
          social: fetchedMark[5],
          exam_date: fetchedMark[6],
        });
        setShowNoDataMessage(false);
      })
      .catch(error => {
        console.error('Error fetching donor:', error);
        setMarkById(null);
        setShowNoDataMessage(true);
      });
  };

  // inserting marks--------------------------------
  const addNewMark = () => {
    axios.post('http://localhost:3001/marks', newMark)
      .then(response => {
        setNewMark({ student_id: '', telugu: '', english: '', science: '', maths: '', social: '', exam_date: '' });
        setMarkById(null); // Clear the markById state
        toast.success('Mark added successfully!',
          {
            style: {
              backgroundColor: 'white',
              color: 'black',
            },
          });
      })
      .catch(error => {
        console.error('Error adding donor:', error);
        toast.error('Error adding mark');
      });
  };

  // update mark--------------------------------------
  const updateMark = async () => {
    try {
      await axios.put(`http://localhost:3001/marks/${updateMarkData.student_id}`, updateMarkData);
      toast.success('Mark updated successfully!',
        {
          style: {
            backgroundColor: 'white',
            color: 'black',
          },
          onClose: () => {
            // Set isUpdateMode to false when the toast is closed
            setIsUpdateMode(false);
          },
        });
    } catch (error) {
      console.error('Error updating mark:', error);
      toast.error('Error updating mark');
    }
  };

  // delete mark---------------------------------------
  const deleteMark = async () => {
    try {
      await axios.delete(`http://localhost:3001/marks/${studentId}`);
      fetchallMarks(); // Refresh the marks list after successful deletion
      toast.success('Mark deleted successfully!',
        {
          style: {
            backgroundColor: 'white',
            color: 'black',
          },
        });
    } catch (error) {
      console.error('Error deleting mark:', error);
      toast.error('Error deleting mark');
    }
  };

  // delete confirmation----------------
  const handleDeleteConfirmation = (studentId) => {
    setStudentId(studentId);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    deleteMark(studentId);
    setShowDeleteConfirmation(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  // Function to close displayed marks
  const closeDisplayedMarks = () => {
    setMarksDisplayed(false);
    setMarkById(null); // Clear markById state when closing
  };
  const handleCloseTable = () => {
    setTableVisibility(false);
  };

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









      <ToastContainer autoClose={3000} />

      <h1 style={{ textAlign: 'center', marginTop: '40px',marginBottom: '30px' }}>Score Card</h1>
      <label htmlFor="studentId">Student ID:</label>
        <input
          type="text"
          id="studentId"
          placeholder='Student ID'
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
      
        <button onClick={() => { getMarkById(); setMarksDisplayed(true); }}>Display Marks</button>

        {isMarksDisplayed && (
          <>
            <button onClick={closeDisplayedMarks}>Close</button>
          </>
        )}
      

      {markById ? (
        <div className="centered-container">
          <div className="fetched-student-data">
            <h3>Fetched Student Data</h3>
            <p>Student ID: {markById[0]}</p>
            <p>Telugu: {markById[1]}</p>
            <p>English: {markById[2]}</p>
            <p>Science: {markById[3]}</p>
            <p>Maths: {markById[4]}</p>
            <p>Social: {markById[5]}</p>
            <p>Exam Date: {formatDate(markById[6])}</p>
          </div>
          
        </div>
      ) : showNoDataMessage ? (
        <p className="no-data-message">No data available for the specified ID</p>
      ) : null}

     



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
