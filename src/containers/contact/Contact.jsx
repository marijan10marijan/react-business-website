import React from 'react'
import ContactLogo from '../../assets/contactLogo.webp'
import Twitter from '../../assets/twitter.webp'
import Facebook  from '../../assets/facebook.webp'
import Instagram from '../../assets/instagram.webp'
import LinkedIn from '../../assets/linkedIn.webp'
import Youtube from '../../assets/youtube.webp'

const Contact = () => {
  return (
    <section aria-label='contact section' className="contact" id="company">
      <div className="container contact__div">
        <div className="contact__left">
          <img src={ContactLogo} alt="our logo in contact section" />
          <p>We are a UX design-led development company that believes in transforming client's ideas into live digital products.</p>
        </div>
        <div className="contact__right">
          <div className="contact__right-content">
            <p>User Experience Design</p>
            <p>Digital product Development</p>
            <p>Cloud Engineering</p>
            <p>Industries</p>
          </div>
          <div className="contact__right-icons">
            <a href="https://twitter.com" target='_blank'>
              <img src={Twitter} alt="twitter icon" />
            </a>
            <a href="https://facebook.com" target='_blank'>
              <img src={Facebook} alt="facebook icon" />
            </a>
            <a href="https://instagram.com" target='_blank'>
              <img src={Instagram} alt="instagram icon" />
            </a>
            <a href="https://linkedin.com" target='_blank'>
              <img src={LinkedIn} alt="linkedIn icon" />
            </a>
            <a href="https://youtube.com" target='_blank'>
              <img src={Youtube} alt="youtube icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 

export default Contact