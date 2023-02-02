import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Footer = () => {
  return (
    <div>
        <footer>
          <a href="#" className='footer__logo'>Shalom Peace</a>

          <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" > <BsLinkedin /></a>
        <a href="https://twitter.com" target="_blank" rel='noreferrer'><BsTwitter /></a>
        <a href="https://github.com" target="_blank"  rel='noreferrer'><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Shalom Peace. All right reserved </small>
      </div>
        </footer>
    </div>
  )
}

export default Footer