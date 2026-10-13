import { ChevronDown } from "lucide-react";
import Container from "../Component/Container";
import MapEmbed from "../Component/Map";
import email from "../assets/email.webp";
import map from "../assets/map.webp";
import megaphone from "../assets/megaphone.webp";
import phone from "../assets/phone.webp";

const CONTACT_CARDS = [
  {
    icon: phone,
    title: "Phone",
    lines: ["Primary: +1 (214) 307-2930", "Secondary: +1 (210) 201-5745"],
  },
  {
    icon: map,
    title: "Address",
    lines: ["Office: 30 N Gould St, Ste 100 Sheridan,", "WY 82801 USA"],
  },
  { icon: email, title: "E-mail", lines: ["info@techvorellc.com"] },
];

const TEXT_FIELDS = [
  { id: "business", label: "Business Name", type: "text", placeholder: "Enter Business Name", autoComplete: "organization" },
  { id: "name", label: "Your Name", type: "text", placeholder: "Enter Your Name", autoComplete: "name" },
  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+1 (555) 000-0000", autoComplete: "tel" },
  { id: "email", label: "Email Address", type: "email", placeholder: "example@gmail.com", autoComplete: "email" },
];

const INDUSTRIES = ["IT Services", "Trucking", "Web"];

const INPUT_CLASS =
  "w-full bg-[#111111] border border-gray-800 rounded-lg py-3 px-4 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors";

function Field({ id, label, className = "", children }) {
  return (
    <div className={`space-y-2 flex flex-col items-center sm:items-start ${className}`}>
      <label htmlFor={id} className="text-sm text-white">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactUs() {
  return (
    <Container>
      <section className="py-12 my-20">
        <div className="max-w-6xl mx-auto flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-5">
            Contact Information
          </h1>
          <p className="text-lg md:text-xl mb-12 md:mb-20 leading-snug">
            Connect with Techvore to create responsive,
            <br className="block sm:hidden" />
            user-friendly websites that deliver quality
            <br className="hidden sm:block md:hidden" />
            and performance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {CONTACT_CARDS.map(({ icon, title, lines }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <img
                  src={icon}
                  alt=""
                  width="80"
                  height="70"
                  decoding="async"
                  className="w-16 sm:w-20 h-auto mb-2"
                />
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h2>
                {lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center my-12 sm:my-20">
          <div className="w-full max-w-6xl bg-black text-white px-6 sm:px-12 md:px-16 lg:px-20 xl:px-32 py-12 sm:py-16 md:py-20 rounded-[30px] sm:rounded-[40px] shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-6 md:mb-8 text-center md:text-left">
              <img
                src={megaphone}
                alt=""
                width="160"
                height="144"
                loading="lazy"
                decoding="async"
                className="w-32 sm:w-36 md:w-40 h-auto shrink-0"
              />
              <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
                Let’s Grow <br />
                <span className="text-brand-blue">Your Business</span>
              </h2>
            </div>

            <p className="text-white mb-6 sm:mb-8 md:mb-12 font-light text-center md:text-left">
              Get Your Free Marketing Analysis Worth $999
            </p>

            {/* TODO: no backend is wired up yet, so submitting only prevents the page reload. */}
            <form
              className="space-y-4 sm:space-y-6 md:space-y-8 flex flex-col items-center md:items-start"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                {TEXT_FIELDS.map(({ id, label, ...inputProps }) => (
                  <Field key={id} id={id} label={label}>
                    <input id={id} name={id} className={INPUT_CLASS} {...inputProps} />
                  </Field>
                ))}
              </div>

              <Field id="industry" label="Service Industry" className="w-full">
                <div className="relative w-full">
                  <select
                    id="industry"
                    name="industry"
                    className={`${INPUT_CLASS} appearance-none`}
                  >
                    {INDUSTRIES.map((industry) => (
                      <option key={industry}>{industry}</option>
                    ))}
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-3.5 text-gray-400 w-5 h-5"
                  />
                </div>
              </Field>

              <Field id="description" label="Description (optional)" className="w-full">
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className={`${INPUT_CLASS} resize-none`}
                />
              </Field>

              <button
                type="submit"
                className="bg-[#00AEEF] hover:bg-blue-500 text-white py-4 px-6 sm:px-8 md:px-12 rounded-full transition-all duration-200 text-lg font-thin"
              >
                Get My Free Analysis
              </button>
            </form>
          </div>
        </div>

        <MapEmbed />
      </section>
    </Container>
  );
}
