import React  from "react";
import Navbar from "./compoents/Navbar.jsx";
import './compoents/Navbar.js';
import Hero from "./compoents/Hero.jsx";
import Cards from "./compoents/Cards.jsx";
import Footer from "./compoents/Footer.jsx";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <Cards />
    <Footer />
    </div>
  );
}

export default App;
