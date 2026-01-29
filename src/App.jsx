import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop";
import Navbar from "./Component/NavBar";
import Hero from "./Component/Hero";
import AboutUsSection from "./Component/AboutUsSection";
import ServicesSection from "./Component/ServicesSection";
import ClientsSection from "./Component/ClientsSection";
import SupportForm from "./Component/SupportForm";
// import SupportForm from "../frontend/SupportForm";
import Footer from "./Component/Footer";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import Container from "../src/Component/Container";
import Services from "./Pages/Services";
import Trucking from "./Pages/Trucking";

function App() {
  return (
    <>
      <Container className="mt-4">
        <Navbar />
      </Container>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Container>
                <AboutUsSection />
                <ServicesSection />
                <ClientsSection />
                <SupportForm />
              </Container>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/trucking" element={<Trucking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
