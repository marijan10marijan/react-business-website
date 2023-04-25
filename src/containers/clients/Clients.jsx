import React from 'react'
import ClientOne from '../../assets/client1.webp'
import ClientTwo from '../../assets/client2.webp'
import ClientThree from '../../assets/client3.webp'
import ClientFour from '../../assets/client4.webp'
import ClientFive from '../../assets/client5.webp'
import ClientSix from '../../assets/client6.webp'
import ClientSeven from '../../assets/client7.webp'
import ClientEight from '../../assets/client8.webp'

const Clients = () => {
  return (
    <section className="clients" id="clients">
      <div className="container clients__div">
        <h1 className="clients__title">Clients</h1>
        <h2 className="clients__subtitle">We Catalyze Innovative Ideas into Reality</h2>
        <div className="clients__text">Design, strategy, and technology are the key assets to simplify, strengthen and transform businesses. So, in our playground, we deploy technology to unveil value-oriented processes and craft innovative solutions for each of our clients. From offering world-class user experience and product development to implementing strategy and technology, we are here to help you gain a sharp competitive edge in the industry.</div>
        <div className="clients__icons">
          <img src={ClientOne} alt="client logo image" />
          <img src={ClientTwo} alt="client logo image" />
          <img src={ClientThree} alt="client logo image" />
          <img src={ClientFour} alt="client logo image" />
          <img src={ClientFive} alt="client logo image" />
          <img src={ClientSix} alt="client logo image" />
          <img src={ClientSeven} alt="client logo image" />
          <img src={ClientEight} alt="client logo image" />
        </div>
      </div>
    </section>
  )
}

export default Clients