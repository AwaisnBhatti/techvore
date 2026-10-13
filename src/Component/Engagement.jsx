export default function Engagement({ models = [] }) {
  return (
    <section className="border-t border-gray-500/50">
      {models.map(({ id, title, description, image }) => (
        <div key={id} className="group relative border-b border-gray-500/50">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-12">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {title}
              </h3>
            </div>

            {/* Decorative hover image (desktop only) */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute left-1/3 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-hover:-rotate-12 transition-all duration-500 motion-reduce:transition-none motion-reduce:group-hover:rotate-0"
            >
              <img
                src={image}
                alt=""
                width="192"
                height="192"
                loading="lazy"
                decoding="async"
                className="w-48 h-48 object-cover rounded-2xl shadow-2xl shadow-black/40 border-4 border-white/20"
              />
            </div>

            <div className="w-full md:w-1/2">
              <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
