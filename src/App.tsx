import ReactLenis from "lenis/react";
import About from "./About";
import Hero from "./Hero";
import Footer from "./Footer";

export default function App() {
  return (
    <ReactLenis root>
      <div>
        <Hero />
        <About />
        <Footer />
      </div>
    </ReactLenis>
  );
}
