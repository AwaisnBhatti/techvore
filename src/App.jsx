import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop";
import AboutUsSection from "./Component/AboutUs";
import Hero from "./Component/Hero";
import Navbar from "./Component/NavBar";
import ServicesSection from "./Component/OurServices";
import ClientsSection from "./Component/Clients";
import SupportForm from "./Component/Form";
import WorkTogetherSection from "./Component/Work";
import Footer from "./Component/Footer";
import TestFooter from "./Component/TestFooter";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              {/* <LogoStrip /> */}
              <AboutUsSection />
              <ServicesSection />
              <ClientsSection />
              <SupportForm />
            </>
          }
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <WorkTogetherSection />
      <Footer />
      <TestFooter />
    </Router>
  );
}

export default App;
