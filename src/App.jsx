import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Work from "./Components/Work";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
