import React from 'react'
import './portfolio.css'
import data from './Data'


const Portfolio = () => {
  return (
    <div>
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>My Portfolio</h2>
            <div className='container portfolio__container'>
              {
                data.map(({id, image, title, github, demo}) => {
                  return (
                    <article key={id} className='portfolio__item'>
                      <div className='portfolio__item-img'>
                        <img src={image} alt= {title} />
                      </div>
                      <h3>{title}</h3>
                      <div className="portfolio__item-cta">
                        <a href={github} className= 'btn'>Github</a>
                        <a href={demo} className='btn btn-primary'>Live Demo</a>
                      </div>
                    </article>
                  )
                })
              }
            </div>
        </section>
    </div>
  )
}

export default Portfolio
