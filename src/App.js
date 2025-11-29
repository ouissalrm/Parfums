import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import About from './About';
import Shop from './Shop';
import Login from './Login';
import Footer from './Footer';
import PageNotFound from './PageNotFound';
import Navbar from './Navbar'; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Home' element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        } />
        <Route path='/Products' element={
          <>
            <Navbar />
            <Products />
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
            <Shop />
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
