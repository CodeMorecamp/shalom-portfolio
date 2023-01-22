import React from 'react'
import woman from '../../asset/woman.jpg'
import cv from '../../asset/icon.jpg'
import {AiOutlineDownload} from 'react-icons/ai'
import data from './data'
import Card from '../../components/Card'
import './about.css'


const about = () => {
  return (
   <section id='about'>
    <div className="container about__container">
      <div className="about__left">
        <div className="about__portrait">
          <img src={woman} alt="portrait" />
        </div>
      </div>
      <div className="about__right">
        <h2>About Me</h2>
        <div className="about__cards">
          {
            data.map(item => (
              <Card key={item.id} className='about__card'>
                <span className='about__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card> 
            ))
          }
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde excepturi sapiente illum magnam facilis, itaque explicabo,
           dolore quia ipsa, rem magni blanditiis officiis maxime animi reiciendis dolores et tempora recusandae.
           </p>
           <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias saepe, eum non quod incidunt
            , facere deserunt architecto ipsam cupiditate deleniti, suscipit officiis nesciunt dicta sapiente natus
             inventore autem odio quae fuga facilis. Delectus, aut explicabo ullam consectetur nihil at fuga!
           </p>
           <a href={cv} download className='btn primary'>Download CV <AiOutlineDownload /></a>
      </div>
    </div>
   </section>
  )
}

export default about