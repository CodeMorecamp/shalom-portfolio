import './App.css';
import React from 'react'
import NavBar from './sections/navbar/NavBar';
import Header from './sections/header/Header';
import Footer from './sections/footer/Footer';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';
import Experience from './sections/experience/Experience'
import Service from './sections/services/Service'
import FAQS from './sections/faqs/FAQS';
import Contact from './sections/contact/Contact'
import FloatingNav from './sections/floating-nav/FloatingNav';



function App() {
  return (
    <main>
      <NavBar />
      <Header />
      <About />
      <Service />
      <Portfolio />
      <Experience />
      <FAQS />
      <Contact />
      <FloatingNav />
      <Footer />
    </main>
  );
}

export default App;
