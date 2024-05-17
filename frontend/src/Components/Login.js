import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginDetails.email,
          password: loginDetails.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Internal Server Error');
      }

      console.log('Login successful');

      // If login is successful, update isAuthenticated state
      setIsAuthenticated(true);

      // Directly change the window location to the home page or any other authenticated route
      window.location.href = '/Home';
    } catch (error) {
      console.error('Error logging in:', error.message);
      setIsAuthenticated(false);
      setErrorMessage('Invalid email or password');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
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
            <li><Link to="/Reg">Register</Link></li>
         </ul>
      </nav>

      <br /><br />
      <h3 className='su2'>Sign In</h3> <br />
      <p className="hr-line"></p>

      <div className='contain1 su1' style={{ margin: '100px 20px 300px 150px' }}>
        <div className='content1'>
          <div className="right-side1">
            <form onSubmit={handleLogin}>
              <div className="input-box1" style={{ height: "33px", width: "420px" }}>
                <i className="fa-solid fa-envelope" style={{ color: "#492f6f" }}></i>
                <input type="text" placeholder="Enter email" name="email" value={loginDetails.email} onChange={handleInputChange} />
              </div>
              <div className="input-box1" style={{ height: "33px", width: "420px" }}>
                <i className="fa-solid fa-lock" style={{ color: "#492f6f" }}></i>
                <input type="password" placeholder="Enter password" name="password" value={loginDetails.password} onChange={handleInputChange} />
              </div>
              <div className="button1">
                <input type="submit" value="Sign in" />
              </div><br /><br /><br />
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
          </div>
        </div>
        <p style={{ padding: "10px 10px 10px 70px" }}>If you don't have an account <a href='/Reg'>Register</a></p>
      </div>


      <br></br><br></br>
      <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img id="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxyYhbvhyZib3VTut_RouDnPy7AfNxa7xWVGX3GF40ZMtZimLXQPqVM-zjXC1c-noBoc&usqp=CAU" alt="User Icon" />
        </div>
        <form className="formm" onSubmit={handleLogin}>
          <div className="input-container">
            <i className="icon"><FaEnvelope /></i>
            <input type="email" required placeholder="Enter email" name="email" value={loginDetails.email} onChange={handleInputChange} />
          </div>
          <div className="input-container">
            <i className="icon"><FaLock /></i>
            <input type="password" required placeholder="Enter password" name="password" value={loginDetails.password} onChange={handleInputChange} />
          </div>
          <input type="submit" className="fadeIn fourth" />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
    </>

  );
}
