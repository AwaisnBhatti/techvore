import React from "react";

const Map = () => (
  <div className="w-full overflow-hidden rounded-[40px] shadow-sm">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.167703411779!2d-106.9549504!3d44.797770799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a655555%3A0x4135961a7775710d!2s30%20N%20Gould%20St%20ste%20100%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2s!4v1767345757743!5m2!1sen!2s"
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
