import React from 'react'
import Truck from '../../assets/truck.webp'
import Dentist from '../../assets/dentist.webp'

const Studies = () => {
  return (
    <section className="studies" id='case studies'>
      <div className="studies__div">
        <p className='studies__text'>Case Studies</p>
        <h1 className="studies__title">We empower clients with unique
          design & development services</h1>
        <div className="studies__flex-items">
          <div className="studies__flex-left">
            <img src={Truck} alt="truck driver image" />
            <h2 className="studies__item-title">BLACKBUCK</h2>
            <p className="studies__item-text">Fibonalabs helped Blackbuck, Indias first market place for trucks, to streamline and track their logistics system with our innovative digital solutions.</p>
          </div>
          <div className="studies__flex-right">
            <img src={Dentist} alt="denstist image" />
            <h2 className="studies__item-title">SMILE GENIUS</h2>
            <p className="studies__item-text">Fibonalabs helped a Dental Health Care Startup to build a digital healthcare platform for clear aligned business needs.</p>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default Studies