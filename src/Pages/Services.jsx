import React from "react";
import HeroWithImage from "../Component/HeroWithImage";
import services1 from "../assets/services1.png";
import Container from "../Component/Container";
import ServicesCards from "../Component/ServicesCards";
import Engagement from "../Component/Engagement";
import SectionHeader from "../Component/SectionHeader";
import BrandButton from "../Component/Button";
import { useNavigate } from "react-router-dom";
import ourStrength from "../assets/ourStrength.jpg";

const models = [
  {
    id: "01/06",
    title: "Our Strength",
    description:
      "We are a full spectrum IT solutions team delivering secure, scalable digital systems. Our engineers and specialists collaborate across web, data, automation, and emerging technologies to turn business requirements into reliable, high impact solutions.",
    image: ourStrength,
  },
  {
    id: "04/06",
    title: "Product Consultation",
    description:
      "We help founders and leadership teams turn ideas clear or still forming into scalable digital products. By validating concepts, defining roadmaps, and selecting the right technology, we bring early stage clarity that reduces risk, accelerates delivery, and sets products up for long term growth.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "05/06",
    title: "Support & Maintenance",
    description:
      "We ensure your digital products remain secure, scalable, and high performing. From updates and fixes to performance optimization, we provide reliable ongoing support whether we built the product or are taking over an existing one so your technology continues to deliver value.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
  },
];

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
        <Engagement models={models} />
      </Container>
    </>
  );
};

export default Services;
