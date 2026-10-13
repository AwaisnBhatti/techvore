import { useState } from "react";
import { ChevronRight } from "lucide-react";
import faqArrow from "../assets/faqArrow.webp";

const FAQS = [
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
    question: 'What does your "end-to-end" development cycle look like?',
    answer:
      "We manage the entire lifecycle of your product. From initial requirement analysis and solution architecture to bespoke design, development, quality assurance, and final deployment, we ensure a seamless process that aligns technology with your business goals.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes. We believe in long-term partnerships. Whether it is a custom software platform or a specialized database system, we offer ongoing maintenance, updates, and optimization services to ensure your technology evolves alongside your business.",
  },
  {
    question:
      "Can your Truck Dispatch Services be integrated with our existing fleet software?",
    answer:
      "Absolutely. Our expertise in specialized database development allows us to integrate our dispatching solutions with your existing ERP or fleet management tools, ensuring centralized data flow and operational efficiency without disrupting your current workflow.",
  },
];

const FIELD_LABEL = "absolute -top-3 left-4 bg-black px-2 text-sm text-white";

function FaqItem({ index, question, answer, isOpen, onToggle }) {
  const panelId = `faq-panel-${index}`;

  return (
    <div
      className={`overflow-hidden border border-black transition-all duration-500 ${
        isOpen ? "rounded-t-2xl" : "bg-black text-white"
      }`}
    >
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="w-full flex justify-between items-center text-left p-4 bg-black text-white"
        >
          <span
            className={`font-semibold text-lg ${
              isOpen ? "" : "transition-colors duration-200 hover:text-blue-300"
            }`}
          >
            {question}
          </span>
          <img
            src={faqArrow}
            alt=""
            width="32"
            height="32"
            className={`w-8 h-8 ml-2 shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        inert={!isOpen}
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 p-6" : "max-h-0 p-0"
        }`}
      >
        <p className="text-black">{answer}</p>
      </div>
    </div>
  );
}

export default function SupportForm() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="py-20 flex flex-col lg:flex-row gap-14">
      {/* Question form */}
      <div className="bg-black text-white px-8 py-8 lg:p-8 xl:p-10 w-full lg:w-[300px] xl:w-[320px] h-auto lg:h-[530px] xl:h-[550px] flex flex-col">
        <div>
          <h2 className="text-2xl font-semibold">Don’t find your answer!</h2>
          <p className="mt-2 text-sm opacity-80">
            Don’t worry, write your question here and our support team will help
            you.
          </p>
        </div>

        {/* TODO: no backend is wired up yet, so submitting only prevents the page reload. */}
        <form
          className="flex flex-col justify-between flex-1 mt-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-6 overflow-y-auto pr-2">
            <div className="relative mt-4">
              <label htmlFor="support-subject" className={FIELD_LABEL}>
                Subject
              </label>
              <input
                id="support-subject"
                name="subject"
                type="text"
                required
                className="w-full p-3 bg-transparent border border-white text-white outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              />
            </div>

            <div className="relative mt-6">
              <label htmlFor="support-description" className={FIELD_LABEL}>
                Describe your Project
              </label>
              <textarea
                id="support-description"
                name="description"
                rows="5"
                required
                className="w-full p-3 bg-transparent border border-white text-white outline-none resize-none overflow-y-auto focus-visible:ring-2 focus-visible:ring-brand-blue"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="group flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-white transition hover:bg-brand-blue-dark"
            >
              Submit Question
              <ChevronRight
                aria-hidden="true"
                size={16}
                className="ml-1 mt-1 transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </div>
        </form>
      </div>

      {/* FAQs */}
      <div className="flex-1 space-y-4">
        {FAQS.map((faq, index) => (
          <FaqItem
            key={faq.question}
            index={index}
            {...faq}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}
