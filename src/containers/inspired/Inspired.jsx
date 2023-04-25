import React from 'react'
import Statue from '../../assets/statue.webp';
import StatueSmall from '../../assets/statue-small.webp';

const Inspired = () => {

  return (
    <section className="inspired">
        <div className="container inspired__div">
            <div className="inspired__left">
                <p>Greatest European Mathematician of <br /> The Middle Ages</p>
                <h2>-LEONARDO FIBONACCI</h2>
            </div>
            <div className="inspired__right">
                <h1>Ya! Inspired from<br />Fibonacci</h1>
                <a href="#life">ABOUT FIBONALABS</a>
            </div>
        </div>
        <img className='inspired__img' src={Statue} alt="statue" />
        <img className='inspired__img2' src={StatueSmall} alt="statue" />
    </section>
  ) 
}

export default Inspired