import About from "./Pages/About/About";
import Certifications from "./Pages/Certifications/Certifications";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Education/Education";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";

function App() {
  return (
    <>
      <main className="bg-gray-900">
        <Home></Home>
        <About></About>
        <Education></Education>
        <Skills></Skills>
        <Projects></Projects>
        <Certifications></Certifications>
        <Contact></Contact>
      </main>
    </>
  );
}

export default App;
