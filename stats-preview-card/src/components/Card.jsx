import React from 'react'
import './card.css'
import IMG from './/assets/image-header-desktop.jpg'

function Card() {
  return (
    <div className='container'>
        <div className="card__container">
          <div className="card__left__content">
            <div className="card__header">
              <h1>Get <span class="highlight"> insights</span> that help <br></br>your business grow.</h1>
              <p>Discover the benefits of data analytics and make <br></br>
                better decisions regarding revenue, customer <br></br>
                experience, and overall efficiency.
              </p>
            </div>
            <div className="card__info">
              <div className="card__info-block">
                <h2>10k+</h2>
                <p>Companies</p>
              </div>
              <div className="card__info-block">
                <h2>314</h2>
                <p>Templates</p>
              </div>
              <div className="card__info-block">
                <h2>12M+</h2>
                <p>Queries</p>
              </div>
            </div>
          </div>
            <div className="card__right__content">
              <div className='overlay'>
                
              </div>
            </div>
        </div>
    </div>
  )
}

export default Card