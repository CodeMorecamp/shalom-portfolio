import './App.css';
import React from 'react'
import NavBar from './sections/navbar/NavBar';
import Header from './sections/header/Header';
import Footer from './sections/footer/Footer';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials'
import Service from './sections/services/Service'
import FAQS from './sections/faqs/FAQS';
import Contact from './sections/contact/Contact'
import FloatingNav from './sections/floating-nav/FloatingNav';



function App() {
    function handleClick () {
      let randomNumber =  Math.floor(Math.random() *3) + 1;
      console.log(randomNumber)
      let userInput = prompt ('type a number');
      alert(`Computer Number: ${randomNumber}, Your guess: ${userInput}` )
    }
  return (
    <main>
      <NavBar />
      <Header />
      <About />
      <Service />
      <Portfolio />
      <Testimonials />
      <FAQS />
      <Contact />
      <Footer />
      <FloatingNav />


      <div>
        <h1>Add a button and handle a click event</h1>
        <button onClick={handleClick}>Guess between the number 1 and 3</button>
      </div>
    </main>
  );
}

export default App;
