import React, { useEffect } from "react";

const OwlCarousel = ({ items, options }) => {
  useEffect(() => {
    // Check if window is defined before accessing it
    if (typeof window !== "undefined") {
      import("owl.carousel").then((OwlCarousel) => {
        $(".owl-carousel").owlCarousel(options);
      });
    }
  }, [options]); // Re-run useEffect when options change

  return <div className="owl-carousel">{items}</div>;
};

export default OwlCarousel;
