import './App.css';
import Home from './Home';
import Products from './Products';
import { Route, BrowserRouter as Router, Link, Routes } from 'react-router-dom';
import About from './About';
import Shop from './Shop';
import Login from './Login';
import Footer from './Footer';
import { FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <div className="navbar-container">
            {/* Logo */}
            <Link to="/Home" className="logo" onClick={closeMobileMenu}>
              <h2>Parfuméa</h2>
            </Link>

            {/* Desktop Navigation */}
            <div className="navbar-links">
              <Link to="/Home" className="nav-link">Home</Link>
              <Link to="/Products" className="nav-link">Products</Link>
              <Link to="/About" className="nav-link">About</Link>
              <Link to="/Shop" className="nav-link">Shop</Link>
            </div>

            {/* Right Side Actions */}
            <div className="navbar-actions">
              <button className="icon-button cart-button">
                <FiShoppingCart />
                <span className="cart-badge">0</span>
              </button>
              <Link to="/Login" className="login-button">
                <FiUser />
                <span>Login</span>
              </Link>
              
              {/* Mobile Menu Toggle */}
              <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <Link to="/Home" className="mobile-nav-link" onClick={closeMobileMenu}>Home</Link>
            <Link to="/Products" className="mobile-nav-link" onClick={closeMobileMenu}>Products</Link>
            <Link to="/About" className="mobile-nav-link" onClick={closeMobileMenu}>About</Link>
            <Link to="/Shop" className="mobile-nav-link" onClick={closeMobileMenu}>Shop</Link>
            <Link to="/Login" className="mobile-nav-link login" onClick={closeMobileMenu}>
              <FiUser /> Login
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Login" element={<Login />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;