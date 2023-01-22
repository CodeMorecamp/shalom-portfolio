import React from 'react'
import HeaderImage from '../../asset/woman.jpg'
import './header.css'
import data from './data'
const Header = () => {
  return (
        <section id="header">
            <div className="container header__container">
              <div className="header__profile">
                <img src= {HeaderImage} alt='Header-img' />
              </div>
              <h3>I am Shalom</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nobis aperiam voluptas consectetur, ullam amet veniam, iste qui accusamus molestias fugit 
                ratione voluptatum possimus a! Dicta consequuntur iure autem perspiciatis?
              </p>
              <div className="header__cta">
                <a href="#contact" className='btn primary'>Reach Out</a>
                <a href="#portfolio" className='btn primary'>My Works</a>
              </div>

            <div className="header__socials">
              {
                data.map(item => <a key={item.id} href={item.link} target="_blank" rel= "noopener noreferrer">{item.icon}</a>)              }
            </div>
            </div>
        </section>
  )
}

export default Header