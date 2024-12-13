import About from "./Pages/About/About";
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
      </main>
    </>
  );
}

export default App;
