import Header from "./components/Header";
import Hero from "./components/Hero";
import Workspace from "./components/Workspace";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import HowIBuild from "./components/HowIBuild";
import AIDeveloper from "./components/AIDeveloper";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#0b1120] text-slate-100">
      <Header />
      <Hero />
      <Workspace />
      <Projects />
      <TechStack />
      <HowIBuild />
      <AIDeveloper />
      <Journey />
      <Contact />
      <About />
      <Footer />
    </main>
  );
}

export default App;