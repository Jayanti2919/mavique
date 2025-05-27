import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <div id="mavique" className="md:pt-20 pt-0">
        <Hero />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="services">
        <Services />
      </div>
      {/* <Testimonials /> */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
