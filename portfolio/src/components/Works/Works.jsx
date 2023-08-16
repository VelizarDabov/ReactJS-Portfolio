import React from "react";
import worksPic from '../../assets/javascript.png'
import './Works.css'
const Works = () => {
return (
    <section id='works'>
      <h2 className="worksTitle"> My portfolio</h2>
      <span className="workDesc">sdfgh</span>
      <div className="worksImgs">
        <img src={worksPic} alt="" className="worksImg" />
        <img src={worksPic} alt="" className="worksImg" />
        <img src={worksPic} alt="" className="worksImg" />
        <img src={worksPic} alt="" className="worksImg" />
        <img src={worksPic} alt="" className="worksImg" />
        <img src={worksPic} alt="" className="worksImg" />
      </div>
      <button className="workBtn">See mode</button>
    </section>
)

}
export default Works;