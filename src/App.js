import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import About from './About';
import Shop from './Shop';
import Login from './Login';
import Footer from './Footer';
import PageNotFound from './PageNotFound';
import Navbar from './Navbar'; 
import { useState } from 'react';
function App() {
  const [panier, setPanier] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path='/Home' element={
          <>
            <Navbar panier={panier}/>
            <Home panier={panier} setPanier={setPanier} />
            <Footer />
          </>
        } />
        <Route path='/Products' element={
          <>
            <Navbar />
            <Products panier={panier} setPanier={setPanier}  />
            <Footer />
          </>
        } />
        <Route path='/About' element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        } />
        <Route path='/Shop' element={
          <>
            <Navbar />
            <Shop panier={panier} setPanier={setPanier} />
            <Footer />
          </>
        } />
        <Route path='/Login' element={
          <>
            <Navbar />
            <Login />
            <Footer />
          </>
        } />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
