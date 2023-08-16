import NavBar from "./components/Navigation/NavBar";
import Introduction from "./components/Introduction/introduction";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Introduction/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
