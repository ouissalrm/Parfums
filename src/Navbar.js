import React from 'react'
import './App.css';

import { Route, BrowserRouter as Router ,Link, Routes} from 'react-router-dom';




export default function Navbar() {
    function myFunction(){
        var element = document.body;
   element.classList.toggle("dark-mode");
    }
  return (
    <div>
       <nav className='navbar'>
      <div className='logoo'>
        <h2>Parfuméa</h2>
      </div>
    
    <div className='navbar1'>
       <Link to="/Home" className='nav-link'>Home</Link>
        <Link to="/Products" className='nav-link'>Products</Link>
           <Link to="/About" className='nav-link'>About</Link>
             
                 <Link to="/Shop" className='nav-link'>Shop</Link>
                    <Link to="/Login" className='nav-link'>Login</Link>
    </div>
    <button onClick={myFunction}>Dark mode</button>
    </nav>
    </div>
  )
}
