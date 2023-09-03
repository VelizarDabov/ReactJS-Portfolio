import React from "react";
import worksPic from '../../assets/javascript.png'
import calendar from '../../assets/reactCalendar.png'
import calculator from '../../assets/reactCalculato.png'
import shoesApp from '../../assets/shoesApp.png'
import todoApp from '../../assets/todoApp.png'
import weatherApp from '../../assets/weatherApp.png'
import './Works.css'
const Works = () => {
return (
    <section id='works'>
      <h2 className="worksTitle"> My portfolio projects</h2>
      <div className="worksImgs">
        <a href="https://github.com/VelizarDabov/React-Google-Calendar/tree/main/Desktop/google-calendar/google-calendar">
        <img src={calendar} alt="calendar" className="worksImg"/>
        </a>
       <a href="https://github.com/VelizarDabov/react-calculator">
       <img src={calculator} alt="calculator" className="worksImg" />
       </a>
      <a href="https://github.com/VelizarDabov/shoes-store-app/tree/master">
      <img src={shoesApp} alt="" className="worksImg" />
      </a>
        <a href="https://github.com/VelizarDabov/Todo-App">
        <img src={todoApp} alt="" className="worksImg" />
        </a>
      <a href="https://github.com/VelizarDabov/React-Weather-App">
      <img src={weatherApp} alt="" className="worksImg" />
      </a>
       
        <img src={worksPic} alt="" className="worksImg" />
      </div>
    </section>
)

}
export default Works;