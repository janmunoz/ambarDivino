import React from 'react';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import Products from './components/product.js';
import Footer from './components/footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
