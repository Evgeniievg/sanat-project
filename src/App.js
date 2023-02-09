import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Content from './pages/Content';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Mayuan from './pages/Mayuan';
import Breigel from './pages/Breigel';
import Assa from './pages/Assa';
import Paintings from './pages/Paintings';
import Cinema from './pages/Cinema';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mayuan" element={<Mayuan />} />
          <Route path="/breigel" element={<Breigel />} />
          <Route path="/assa" element={<Assa />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/cinema" element={<Cinema />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
