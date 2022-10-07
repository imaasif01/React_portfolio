import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLink from "./components/SocialLink";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLink />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
