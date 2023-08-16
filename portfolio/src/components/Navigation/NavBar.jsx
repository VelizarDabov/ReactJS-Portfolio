import React from "react";
import {Link} from 'react-scroll'
import logo from './logo.png'
import contactImg from '../../assets/contact.png'
import './NavBar.css'

const NavBar = () => {
    return (
       <nav className='navbar'>
        <img src={logo} alt='logo' className="logo"/>
        <div className="desktopMenu">
<Link activeClass="active" to='introduction' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
<Link activeClass="active" to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
<Link activeClass="active" to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</Link>
<Link activeClass="active" to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Clients</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }}>
            <img src={contactImg} alt='' className="desktopMenuImg"/> Contact Me
        </button>
       </nav>
    )
}
export default NavBar;