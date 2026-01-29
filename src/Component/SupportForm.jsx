import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import faqArrow from "../assets/faqArrow.png";

export default function SupportForm() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer:
        "While we provide end-to-end IT solutions for various sectors, we have deep expertise in Logistics (Truck Dispatch), Fintech, and Healthcare, providing highly specialized, industry-specific systems.",
    },
    {
      question: "How does your Automation Service help my business?",
      answer:
        "We identify repetitive tasks and bottlenecks in your operations and deploy custom automation scripts and software to enhance operational speed and reduce human error.",
    },
    {
      question: "Do you handle legacy data migration?",
      answer:
        "Yes. Our Specialized Database Development team handles complex data management, ensuring your legacy data is securely migrated, optimized, and structured for modern analytics.",
    },
    {
      question: ` What does your "end-to-end" development cycle look like`,
      answer:
        "We manage the entire lifecycle of your product. From initial requirement analysis and solution architecture to bespoke design, development, quality assurance, and final deployment, we ensure a seamless process that aligns technology with your business goals.",
    },
    {
      question: `Do you provide post-launch support and maintenance`,
      answer:
        "Yes. We believe in long-term partnerships. Whether it is a custom software platform or a specialized database system, we offer ongoing maintenance, updates, and optimization services to ensure your technology evolves alongside your business.",
    },
    {
      question: `Can your Truck Dispatch Services be integrated with our existing fleet software`,
      answer:
        "Absolutely. Our expertise in specialized database development allows us to integrate our dispatching solutions with your existing ERP or fleet management tools, ensuring centralized data flow and operational efficiency without disrupting your current workflow.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 flex flex-col lg:flex-row gap-14">
      {/* Left Form */}
      <div className="bg-black text-white px-8 lg:p-8 xl:p-10 py-8 w-full lg:w-[300px] h-auto lg:h-[530px] xl:h-[550px] xl:w-[320px] flex flex-col">
        {/* Header Section */}
        <div>
          <h2 className="text-2xl font-semibold">Don't find your answer!</h2>
          <p className="mt-2 text-sm opacity-80">
            Don’t worry, write your question here and our support team will help
            you.
          </p>
        </div>

        {/* Form Section */}
        <form className="flex flex-col justify-between flex-1 mt-6">
          <div className="space-y-6 overflow-y-auto pr-2">
            {/* SUBJECT FIELD */}
            <div className="relative mt-4">
              <label className="absolute -top-3 left-4 bg-black px-2 text-sm text-white">
                Subject
              </label>
              <input
                type="text"
                className="w-full p-3 bg-transparent border border-white text-white outline-none"
              />
            </div>

            {/* DESCRIPTION FIELD */}
            <div className="relative mt-6">
              <label className="absolute -top-3 left-2 bg-black px-2 text-sm text-white">
                Describe your Project
              </label>
              <textarea
                rows="5"
                className="w-full p-3 bg-transparent border border-white text-white outline-none resize-none overflow-y-auto"
              ></textarea>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-brand-blue hover:bg-brand-blue-dark transition px-6 py-3 rounded-full text-white flex items-center gap-2 group"
            >
              Submit Question
              <ChevronRight
                size={16}
                className="ml-1 mt-1 transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </div>
        </form>
      </div>

      {/* FAQs */}
      <div className="flex-1 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`
              overflow-hidden border border-black transition-all duration-500
              ${
                openIndex === index
                  ? "rounded-t-2xl bg-transparent p-0"
                  : "rounded-none bg-black text-white p-0"
              }
            `}
          >
            {/* Question button */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left p-4 bg-black text-white"
            >
              <span
                className={`
                  font-semibold text-lg
                  ${
                    openIndex !== index
                      ? "hover:text-blue-300 transition-colors duration-200"
                      : "text-white"
                  }
                `}
              >
                {faq.question}
              </span>
              <img
                src={faqArrow}
                alt="Arrow"
                className={`
                  w-8 h-8 ml-2 transition-transform duration-300
                  ${openIndex === index ? "rotate-180" : ""}
                `}
              />
            </button>

            {/* Answer */}
            <div
              className={`
                overflow-hidden transition-all duration-500
                ${openIndex === index ? "max-h-96 p-6" : "max-h-0 p-0"}
              `}
            >
              <div className="text-black bg-transparent whitespace-pre-line">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
