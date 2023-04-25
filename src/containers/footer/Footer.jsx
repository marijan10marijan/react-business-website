import React from 'react'

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="container footer-div">
        <p className="footer__text">All rights are reserved Fibonalabs &copy; <span className="foote__year">{new Date().getFullYear()}</span></p>
      </div>
    </section>
  )
}

export default Footer