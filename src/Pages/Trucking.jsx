import React from "react";
import HeroWithImage from "../Component/HeroWithImage";
import trucking1 from "../assets/trucking1.png";
import trucking3 from "../assets/trucking3.jpg";
import trucking4 from "../assets/trucking4.jpg";
import trucking5 from "../assets/trucking5.jpg";
import Container from "../Component/Container";
import Engagement from "../Component/Engagement";
import TruckingCard from "../Component/TruckingCard";
import TruckingAbout from "../Component/TruckingAbout";
import TruckingPricing from "../Component/TruckingPricing";
import SectionHeader from "../Component/SectionHeader";

const models = [
  {
    id: "01/06",
    title: "For New MCs (0–30 Days)",
    description:
      "TQI, CH Robinson, Redwood Multimodal, ST Freight LLC, Hub Group Inc, DSV Road Inc, USA Truck, ATS Logistics / Sureway, Blue Marlin Logistics, Fitzmark, Roar Logistics, RTT Carriers, BM2 Freight, D&L Transport, First Call Logistics, A Plus Warehousing and Logistics",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "02/06",
    title: "Net 30 Brokers",
    description:
      "Coyote Logistics, Capital Freight, Moto, Arcbest Logistics, Boess Logistics",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "03/06",
    title: "Net 60 Brokers",
    description:
      "BNSF Logistics, Werner Logistics, Ryder Integrated, SPI Logistics, Watco Logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "04/06",
    title: "Net 90 Brokers",
    description: "Spot Freight Inc, Magellan Logistics...",
    image: trucking3,
  },
  {
    id: "05/06",
    title: "6-Months Brokers",
    description:
      "Allen Lund, Globaltranz, ITS Logistics, Evans Delivery, Becker Logistics, Lipsey Logistics, Smarter Logistics, Nolan Transportation, KOPF Logistics Corp",
    image: trucking4,
  },
  {
    id: "06/06",
    title: "1-Year Brokers",
    description:
      "KAG Logistics, Mode Transportation, KOCH Logistics, Covenant Logistics, Pepsi Logistics, Arrive Logistics, Ascent Global, Echo Global Logistics, Best Bay Logistics, Axle Logistics, Penske Logistics, Logistics Plus, Landstar, 5K Logistics",
    image: trucking5,
  },
];

const Trucking = () => {
  return (
    <>
      <Container className="mb-20">
        <HeroWithImage
          title={
            <>
              Reliable Truck Dispatching <br /> For Owner-Operators and <br />{" "}
              <span className="text-brand-blue">Small Fleets</span>
            </>
          }
          description="Focus on driving-we'll handle the loads, brokers, and paperwork. Techvore helps carriers maximize profits and stay loaded every single week"
          imageSrc={trucking1}
          buttonText="Let's Build Together"
          buttonLink="/contact"
        />
        <TruckingCard />
        <TruckingAbout />
        <SectionHeader
          subtitle="Solutions & Services"
          titleMain="Broker Setup Assi"
          titleHighlight="stance"
        />
        <Engagement models={models} />
        <TruckingPricing />
      </Container>
    </>
  );
};

export default Trucking;
