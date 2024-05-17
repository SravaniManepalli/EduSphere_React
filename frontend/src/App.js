import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';

import Marks from './Components/Marks';
import Home from './Components/Home'
import About from './Components/About';
import Stumarks from './Components/Stumarks';
import Reg from './Components/Reg';
import Login from './Components/Login';
import Gallery from './Components/Gallery';
import './Components/sty.css';
import { BrowserRouter  as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <>
        <Routes>
        <Route  path='/Home' element={<Home />} />
        <Route  path='/About' element={<About />} />
        <Route  path='/Marks' element={<Marks />} />
        <Route  path='/Stumarks' element={<Stumarks />} />
        <Route  path='/Login' element={<Login/>}/>
        <Route  path='/Gallery' element={<Gallery/>}/>
        <Route  path='/' element={<Login/>}/>
        <Route  path='/Reg' element={<Reg/>}/>
        <Route path="/Navbar/*" element={<Navbar />} />

      </Routes>
     
    </>
  );
}

export default App;
