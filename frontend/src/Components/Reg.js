import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Reg(){

    const [Signup, setSignup] = useState([]);
    const [newSignup, setNewSignup] = useState({
      id:'',
      name: '',
      role:'',
      email:'',
      password:'',
      confirm_password:'',
    });
  
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    useEffect(() => {
      fetchSignup();
    }, []);
  
    const fetchSignup = () => {
      fetch('http://localhost:3001/regtable')
        .then((response) => response.json())
        .then((data) => {
          console.log('Fetched signup:', data);
          setSignup(data);
        })
        .catch((error) => console.error('Error fetching regtable:', error));
    };
  
    const handleAddSignup = async () => {
      try {
        const response = await fetch('http://localhost:3001/regtable', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newSignup),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Internal Server Error');
        }
  
        console.log('User signup successfully');
        fetchSignup(); // Refresh the signup list
        setNewSignup({
            id:'',
            name: '',
            role:'',
            email:'',
            password:'',
            confirm_password:'',
        });       // Clear the input fields
        setSuccessMessage(`You Registered Successfully ${newSignup.name} !.`); // Set the success message
        setErrorMessage(''); // Reset error message
      } catch (error) {
        console.error('Error adding donor:', error.message);
        setSuccessMessage(''); // Clear any existing success message
        setErrorMessage('Error adding donor: ' + error.message);
      }
    };
  
      return(
          <>
          <br/><br/>
          <h3 className='su2'>Register</h3>  <br/>
          <p className="hr-line"></p>
  
         
          <div className='contain1 su1'>
              <div className='content1'>
                  <div class="right-side1">
                  <form action="#">
                  <div class="input-box1" style={{height: "33px"}}><i class="fa-solid fa-user" style={{color: "#492f6f"}}></i>
                      <input type="text" placeholder="Enter your id"   value={newSignup.id}
                      onChange={(e) => setNewSignup({ ...newSignup, id: e.target.value })}/>
                      </div>
                      <div class="input-box1" style={{height: "33px"}}><i class="fa-solid fa-user" style={{color: "#492f6f"}}></i>
                      <input type="text" placeholder="Enter your name"   value={newSignup.name}
                      onChange={(e) => setNewSignup({ ...newSignup, name: e.target.value })}/>
                      </div>
                      <div class="input-box1" style={{height: "33px"}}><i class="fa-solid fa-phone" style={{color: "#492f6f"}}></i>
                      <input type="text" placeholder="Enter your role"  value={newSignup.role}
                      onChange={(e) => setNewSignup({ ...newSignup, role: e.target.value })}/>
                      </div>
                      <div class="input-box1" style={{height: "33px"}}><i class="fa-solid fa-envelope" style={{color: "#492f6f"}}></i>
                      <input type="text" placeholder="Enter your email" value={newSignup.email}
                      onChange={(e) => setNewSignup({ ...newSignup, email: e.target.value })}/>
                      </div>
                      <div class="input-box1" style={{height: "33px"}}><i class="fa-solid fa-lock" style={{color: "#492f6f"}}></i>
                      <input type="password" placeholder="Enter your password"   value={newSignup.password}
                      onChange={(e) => setNewSignup({ ...newSignup, password: e.target.value })}/>
                      </div>
                      <div class="input-box1" style={{height: "33px"}}><i class="fa-solid fa-lock" style={{color: "#492f6f"}}></i>
                      <input type="password" placeholder="Re-enter your password" value={newSignup.confirm_password}
                      onChange={(e) => setNewSignup({ ...newSignup, confirm_password: e.target.value })}/>
                      </div>
                      <div class="button1">
                      <input type="button" value="Sign Up" onClick={handleAddSignup}/>
                      </div><br/><br/><br/>
                      {successMessage && (
                          <p style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>{successMessage} <i class="fa-solid fa-thumbs-up fa-xl" style={{color:'blue'}}></i></p>
                      )}
                      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                  </form>
                  </div>
               </div>
               <p style={{padding:"10px 10px 10px 70px"}}>If you have an account <Link to='/Login'>SignIn</Link></p>
          </div>
  
          <br/><br/><br/><br/>
  
  </>
      )
  }