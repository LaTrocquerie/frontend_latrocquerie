import React from "react";

/* iframe de la google map */
const Map = () => {
  return (
    <div>
      <iframe
        className="md:max-w-2xl mx-auto border-0 w-full h-96 py-4"
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10842.964386704758!2d-1.5527203863097434!3d47.2020798071419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeb2ca34b1a3%3A0x4b40e35d971d0c93!2s23%20Rue%20Petite%20Biesse%2C%2044200%20Nantes!5e0!3m2!1sfr!2sfr!4v1641822740903!5m2!1sfr!2sfr"
        allowFullScreen=""
        loading="lazy"
      />
    </div>
  );
};

export default Map;
