import React from 'react'

const Subscribe = () => {
  return (
    <section aria-label='subscribe section' className="subscribe" id="contact">
      <div className="container subscribe__div">
        <h1 className='subscribe__title'>Subscribe To Our Newsletter</h1> 
        <p className='subscribe__text'>Stay updated with our latest content related to UX Design and Technology. We send out fortnightly issues!</p>
        <form onSubmit={e => {e.preventDefault()}} className="subscribe__form">
          <div className="subscribe__form-name">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder='Enter Your Name'/>
          </div>
          <div className="subscribe__form-city">
            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder='Enter Your City'/>
          </div>
          <div className="subscribe__form-email">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder='Enter Your Email'/>
          </div>
          <button className='subscribe__form-btn'>SUBMIT</button>
        </form>
      </div>
    </section>
  )
}

export default Subscribe 