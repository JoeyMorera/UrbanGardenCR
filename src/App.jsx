import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Nosotros from "./components/Nosotros"
import Servicios from "./components/Servicios"
import Productos from "./components/Productos"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"

import './App.css'


function App() {

  return (
    <Router>
      <Hero />
      <Nosotros />
      <Servicios />
      <Productos />
      <Contacto />
      <Footer />
    </Router>
  )
}

export default App
