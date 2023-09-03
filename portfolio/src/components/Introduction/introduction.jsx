import React from "react";
import './introduction.css';
import profilePic from '../../assets/profilePic.jpg'

const Introduction = () => {
    return (
     <section id='introduction'>
<div className="introContent">
<span className="hello">Hello,</span>
<span className="introText">I'm <span className="introName">Velizar</span> <br/> <span className="introPosition">Junior Front-End Developer</span></span>
<p className="introPara">A motivated junior front-end developer with a passion for creating seamless and visually appealing web experiences.</p>

</div>
<div >
<img src={profilePic} alt='profile' className="profilePic"/>
</div>
     </section>
    )
}
export default Introduction;