import React from "react";
import worksPic from '../../assets/javascript.png'
import './Works.css'
const Works = () => {
return (
    <section id='works'>
      <h2 className="worksTitle"> My portfolio projects</h2>
      <div className="worksImgs">
        <img src={worksPic} alt="" className="worksImg" />
        <img src={worksPic} alt="" className="worksImg" />
        <img src={worksPic} alt="" className="worksImg" />
        <img src={worksPic} alt="" className="worksImg" />
        <img src={worksPic} alt="" className="worksImg" />
        <img src={worksPic} alt="" className="worksImg" />
      </div>
    </section>
)

}
export default Works;