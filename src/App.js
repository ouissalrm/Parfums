
import './App.css';
import Home from './Home';
import Products from './Products';
import { Route, BrowserRouter as Router ,Link, Routes} from 'react-router-dom';
import About from './About';
import Shop from './Shop';
import Login from './Login';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
     
  <div>
     <Router>
    
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
    </nav>
    <Routes>
      <Route path='/Home' element= {<Home/>} />
           <Route path='/Products' element={<Products />} />
       <Route path='/About' element={<About />} />
        <Route path='/Shop' element={<Shop />} />
      
          <Route path='/Login' element={<Login />} /> 
    </Routes>
   </Router>
  </div>
  <div>
    <Footer />
  </div>
    </div>
  );
}

export default App;
