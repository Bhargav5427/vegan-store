import { Route, Router, Routes } from "react-router-dom";
import AboutStore from "./components/AboutStore";
import Footer from "./components/Footer";
import Landingpage from "./components/Landingpage";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/about" element={<AboutStore />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
