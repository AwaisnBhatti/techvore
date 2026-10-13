import LinkButton from "./LinkButton";

export default function HeroWithImage({
  title,
  description,
  buttonText,
  buttonLink = "/",
  imageSrc,
  imageAlt = "",
  imageWidth = 450,
  imageHeight = 450,
  imagePosition = "right",
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col items-center gap-8 sm:gap-10 md:gap-12 ${
            isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold leading-snug md:leading-tight">
              {title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl my-6">
              {description}
            </p>

            {buttonText && (
              <LinkButton to={buttonLink} className="mt-4">
                {buttonText}
              </LinkButton>
            )}
          </div>

          {/* Image: top of page, so no lazy loading */}
          <div
            className={`w-full lg:w-1/2 flex justify-center ${
              isImageLeft ? "lg:justify-start" : "lg:justify-end"
            }`}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              fetchPriority="high"
              decoding="async"
              className="w-full max-w-[450px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
