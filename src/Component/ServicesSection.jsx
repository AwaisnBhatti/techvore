import { useNavigate } from "react-router-dom";
import BrandButton from "./Button";
import SectionHeader from "./SectionHeader";
import ServicesShowcase from "./ServicesShowcase";

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="pt-12 sm:pt-16 lg:pt-12 pb-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          subtitle="Our Core Services"
          titleMain="Our Core Servi"
          titleHighlight="ces"
          description="Comprehensive digital services engineered for scalability, speed, and strategic growth."
          rightElement={
            <BrandButton text="Contact Us" onClick={() => navigate("/contact")} />
          }
        />
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-8">
        <ServicesShowcase />
      </div>
    </section>
  );
}
