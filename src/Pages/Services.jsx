import React from "react";
import HeroWithImage from "../Component/HeroWithImage";
import services1 from "../assets/services1.png";
import Container from "../Component/Container";
import ServicesCards from "../Component/ServicesCards";
import Engagement from "../Component/Engagement";
import SectionHeader from "../Component/SectionHeader";
import BrandButton from "../Component/BrandButton";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container className="mb-20">
        <HeroWithImage
          title={
            <>
              Let's Design Experiences <br /> Your Users Love
            </>
          }
          description="At Techvore, our mission is to empower visionaries, creators, and changemakers with intelligent systems that scale impact..."
          imageSrc={services1}
        />
        <SectionHeader
          subtitle="Our Core Services"
          titleMain="Our Core Servi"
          titleHighlight="ces"
          description="Comprehensive digital services engineered for scalability, speed, and strategic growth."
          rightElement={
            <BrandButton
              text="Contact Us"
              onClick={() => navigate("/contact")}
            />
          }
        />
        <ServicesCards />
        <SectionHeader
          subtitle="Solutions & Services"
          titleMain="Enable Digital Pr"
          titleHighlight="ogress"
          description="Comprehensive digital services engineered for scalability, speed, and strategic growth."
        />
        <Engagement />
      </Container>
    </>
  );
};

export default Services;
