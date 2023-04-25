import React, { useState } from 'react'
import Logo from '../../assets/logo.webp'
import Link from '../../components/link/Link'
import { MenuIcon , XIcon} from '@heroicons/react/outline';
 
const Header = () => { 

  const [nav, setNav] = useState(false)
  const handleClick = ()=>{
    return setNav(!nav)
  }

  return (
    <header className='header' >
        <nav className="container nav">
            <a href="/"><img className='nav__img' src={Logo} alt="Image of our logo in navbar section" /></a>
            <div className="nav__links">
              <Link title='Solutions'/>
              <Link title='Clients'/>
              <Link title='Case Studies'/>
              <Link title='Insights'/>
              <Link title='Company'/>
            </div>
            <a className='nav__buttons-link nav__buttons-link1' href="#contact">Contact Us</a>     
            <div className='nav__hamburger' onClick={handleClick}>
              {!nav ? <MenuIcon /> : <XIcon />}
            </div>
            <div className={!nav ? 'hidden' : 'activeNav'}>
              <a href="#solutions" onClick={handleClick}>Solutions</a>
              <a href="#clients" onClick={handleClick}>Clients</a>
              <a href="#case studies" onClick={handleClick}>Case Studies</a>
              <a href="#insights" onClick={handleClick}>Insights</a>
              <a href="#company" onClick={handleClick}>Company</a>
              <a className='nav__buttons-link nav__buttons-link1 activeNav-btn' href="#contact" onClick={handleClick}>Contact Us</a> 
            </div>

        </nav>
    </header>
  )
}

export default Header