import React from "react";
import {Link} from 'react-scroll'
import './introduction.css';
import profilePic from '../../assets/profilePic.png'

const Introduction = () => {
    return (
     <section id='introduction'>
<div className="introContent">
<span className="hello">Hello,</span>
<span className="introText">I'm <span className="introName">Velizar</span> <br/> Junior Front-End Developer</span>
<p className="introPara">A motivated junior front-end developer with a passion for creating seamless and visually appealing web experiences.</p>

</div>
<img src={profilePic} alt='profile' className="profilePic"/>
     </section>
    )
}
export default Introduction;