import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop";
import Navbar from "./Component/NavBar";
import Hero from "./Component/Hero";
import AboutUsSection from "./Component/AboutUs";
import ServicesSection from "./Component/OurServices";
import ClientsSection from "./Component/Clients";
import SupportForm from "./Component/Form";
// import SupportForm from "../frontend/SupportForm";
import TestFooter from "./Component/TestFooter";
import ContactUs from "./Pages/ContactUs";
import About from "./Pages/About";
import Container from "../src/Component/Container";
import Services from "./Pages/Services";

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
      </Routes>
      <TestFooter />
    </>
  );
}

export default App;
