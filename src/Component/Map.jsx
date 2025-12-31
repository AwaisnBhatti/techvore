import React from "react";

const Map = () => (
  <div className="w-full overflow-hidden rounded-[40px] shadow-sm">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.8445808530705!2d74.31937507442433!3d31.500955548103164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190471b9308ef5%3A0x4e49c79dd4b30ff4!2sRafi%20Group&#39;s%20Central%20Plaza!5e0!3m2!1sen!2s!4v1766675139561!5m2!1sen!2s"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

export default Map;
