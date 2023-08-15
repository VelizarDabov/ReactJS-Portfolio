import React from "react";
import './skills.css'
import javascriptPic from '../../assets/javascript.png';
import reactPic from '../../assets/react.png'
import htmlcssPic from '../../assets/htmlcss.png'
const Skills = () => {
return (
    <section id='skills'>
<snap className="skillTitle">What i do</snap>
<span className="skillDescription">erftgyhuio</span>
<div className="skillBars">
    <div className="skillBar">
        <img src={javascriptPic} alt="JavaScript" className="skillBarImg" />
        <div className="skillBarText">
            <h2>JavaScript</h2>
            <p>DemoText</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={reactPic} alt="ReactJS" className="skillBarImg" />
        <div className="skillBarText">
            <h2>ReactJS</h2>
            <p>DemoText</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={htmlcssPic} alt="htmlcss" className="skillBarImg" />
        <div className="skillBarText">
            <h2>HTML and CSS</h2>
            <p>DemoText</p>
        </div>
    </div>
</div>
    </section>
)
}
export default Skills;