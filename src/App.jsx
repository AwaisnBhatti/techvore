import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsSection from "./Component/AboutUsSection";
import ClientsSection from "./Component/ClientsSection";
import Container from "./Component/Container";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Navbar from "./Component/NavBar";
import ScrollToTop from "./Component/ScrollToTop";
import ServicesSection from "./Component/ServicesSection";
import SupportForm from "./Component/SupportForm";

// Secondary pages load on demand so the home bundle stays small.
const About = lazy(() => import("./Pages/About"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Services = lazy(() => import("./Pages/Services"));
const Trucking = lazy(() => import("./Pages/Trucking"));

function Home() {
  return (
    <>
      <Hero />
      <Container>
        <AboutUsSection />
        <ServicesSection />
        <ClientsSection />
        <SupportForm />
      </Container>
    </>
  );
}

export default function App() {
  return (
    <>
      <Container className="sticky top-0 z-[100] pt-4">
        <Navbar />
      </Container>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/trucking" element={<Trucking />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
