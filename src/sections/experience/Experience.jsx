import React from 'react'
import './experience.css'
import {FcViewDetails}  from 'react-icons/fc'
const Experience = () => {
  return (
    <div>
        <section id="testimonials">
            <h5>Experince</h5>
            <h2>My Skills</h2>
            <div className="container experience__container" >
              <div className="experince__frontend">
                <h3>Frontend Development</h3>
                <div className="experience__content">
                  <article className="experience__details">
                    <FcViewDetails className="experience__details-icon" />
                    <div>
                      <h4>HTML</h4>
                      <small className='text-light'>Experienced</small>
                    </div>
                  </article>
                  <article className="experience__details">
                    <FcViewDetails className="experience__details-icon" />
                    <div>
                      <h4>CASCADE STYLING</h4>
                      <small className='text-light'>Experienced</small>
                    </div>
                  </article>
                  <article className="experience__details">
                    <FcViewDetails className="experience__details-icon" />
                    <div>
                      <h4>JAVASCRIPT</h4>
                      <small className='text-light'>Experienced</small>
                    </div>
                  </article>
                  <article className="experience__details">
                    <FcViewDetails className="experience__details-icon" />
                    <div>
                      <h4>PHP</h4>
                      <small className='text-light'>Intermediate</small>
                    </div>
                  </article>
                  <article className="experience__details">
                    <FcViewDetails className="experience__details-icon" />
                    <div>
                      <h4>React</h4>
                      <small className='text-light'>Upper Intermediate</small>
                    </div>
                  </article>
                  <article className="experience__details">
                    <FcViewDetails className="experience__details-icon" />
                    <div>
                      <h4>Tailwind</h4>
                      <small className='text-light'>Intermediate</small>
                    </div>
                  </article>
                </div>
              </div>

              {/*End of Frontend*/}

              <div className="experience__backend">
                <h3>Backend Development</h3>
                <div className="experience__content">
                  <article className='experience__details'>
                  <FcViewDetails className="experience__details-icon" />
                  <div>
                    <h4>Node JS</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                  </article>
                  <article className='experience__details'>
                  <FcViewDetails className="experience__details-icon" />
                  <div>
                    <h4>Node JS</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                  </article>
                  <article className='experience__details'>
                  <FcViewDetails className="experience__details-icon" />
                  <div>
                    <h4>Node JS</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                  </article>
                  <article className='experience__details'>
                  <FcViewDetails className="experience__details-icon" />
                  <div>
                    <h4>MonogoDB</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                  </article>
                  <article className='experience__details'>
                  <FcViewDetails className="experience__details-icon" />
                  <div>
                    <h4>PHP</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                  </article>
                  <article className='experience__details'>
                  <FcViewDetails className="experience__details-icon" />
                  <div>
                    <h4>MySQL</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                  </article>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Experience