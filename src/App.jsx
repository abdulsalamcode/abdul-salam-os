import { useState } from "react";
import DesktopProvider from "./components/desktop/DesktopProvider";
import WindowLayer from "./components/desktop/WindowLayer";
import Taskbar from "./components/desktop/Taskbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Workspace from "./components/Workspace";
import TechStack from "./components/TechStack";
import HowIBuild from "./components/HowIBuild";
import AIDeveloper from "./components/AIDeveloper";
import Journey from "./components/Journey";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AuroraBackground from "./components/AuroraBackground";
import IntroScreen from "./components/IntroScreen";
import { shouldPlayIntro } from "./lib/intro";

function App() {
  // The intro plays once per tab session (add ?intro to replay it)
  const [playIntro] = useState(shouldPlayIntro);
  const [showIntro, setShowIntro] = useState(playIntro);
  const [ready, setReady] = useState(!playIntro);

  return (
    <DesktopProvider>
      <AuroraBackground />

      <div
        id="top"
        data-ready={ready}
        className="min-h-screen pb-[var(--taskbar-h)] text-slate-100"
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[130] focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main" tabIndex={-1} className="focus:outline-none">
          <Hero />
          <Projects />
          <Workspace />
          <TechStack />
          <HowIBuild />
          <AIDeveloper />
          <Journey />
          <About />
          <Contact />
        </main>

        <Footer />
      </div>

      <WindowLayer />
      <Taskbar />

      {showIntro && (
        <IntroScreen
          onReveal={() => setReady(true)}
          onDone={() => setShowIntro(false)}
        />
      )}
    </DesktopProvider>
  );
}

export default App;