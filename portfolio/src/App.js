import NavBar from "./components/Navigation/NavBar";
import Introduction from "./components/Introduction/introduction";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import './App.css'
function App() {

  return (
    <div className="background">
      
      <NavBar/>
      <Introduction/>
      <Skills/>
      <Works/>
      <Contact/>
      
      
    </div>
  );
}

export default App;
