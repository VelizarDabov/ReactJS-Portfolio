import React from "react";
import {Link} from 'react-scroll'
import './introduction.css';
import profilePic from '../../assets/profilePic.png'
import btnImg from '../../assets/hireme.png'
const Introduction = () => {
    return (
     <section id='introduction'>
<div className="introContent">
<span className="hello">Hello,</span>
<span className="introText">I'm <span className="introName">Velizar</span> <br/>Front-End Developer</span>
<p className="introPara">I am a Junior Front-End Developer</p>
<Link><button className="btn"><img src={btnImg} alt='Hire me' className="btnImg"/>Hire me</button></Link>
</div>
<img src={profilePic} alt='profile' className="profilePic"/>
     </section>
    )
}
export default Introduction;