import React from "react";

const SectionHeader = ({
  subtitle,
  titleMain,
  titleHighlight,
  description,
  rightElement,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between mb-8">
      <div className="max-w-xl">
        <p className="text-brand-blue font-semibold text-base md:text-lg mb-2">
          {subtitle}
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight">
          {titleMain}
          <span className="inline-block bg-brand-blue rounded-xl py-0">
            {titleHighlight}
          </span>
        </h2>

        <p className="text-black mt-4 md:mt-5 text-sm md:text-base">
          {description}
        </p>
      </div>

      {rightElement && (
        <div className="self-start md:self-end mt-6 md:mt-0">
          {rightElement}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
