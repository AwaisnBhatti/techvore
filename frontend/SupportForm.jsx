import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import faqArrow from "../src/assets/faqArrow.png";

export default function SupportForm() {
  const [openIndex, setOpenIndex] = useState(0);
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subject, description }),
      });

      if (res.ok) {
        alert("✅ Your question has been submitted!");
        setSubject("");
        setDescription("");
      } else {
        alert("❌ Submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Server not responding");
    }
  };

  return (
    <div className="py-20 px-6 lg:px-24 flex flex-col lg:flex-row gap-14">
      {/* Left Form */}
      <div className="bg-black text-white px-8 py-8 w-full lg:w-[300px] flex flex-col">
        <h2 className="text-2xl font-semibold">Don't find your answer!</h2>
        <p className="mt-2 text-sm opacity-80">
          Write your question and our support team will help you.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col flex-1 mt-6">
          <div className="space-y-6">
            <div className="relative">
              <label className="absolute -top-3 left-4 bg-black px-2 text-sm">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-3 bg-transparent border border-white outline-none"
                required
              />
            </div>

            <div className="relative">
              <label className="absolute -top-3 left-4 bg-black px-2 text-sm">
                Describe your Project
              </label>
              <textarea
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 bg-transparent border border-white outline-none resize-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 bg-brand-blue px-6 py-3 rounded-full flex items-center justify-center gap-2"
          >
            Submit Question
            <ChevronRight size={16} />
          </button>
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
