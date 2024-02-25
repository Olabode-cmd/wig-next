import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import $ from 'jquery'

export default function OwlCarousel({ options }) {
  useEffect(() => {
    // Check if window is defined before accessing it
    if (typeof window !== "undefined") {
      import("owl.carousel")
        .then((module) => {
          const OwlCarousel = module.default; // Extract the default export
          if (OwlCarousel && typeof OwlCarousel === "function") {
            $(".owl-carousel").owlCarousel(options);
          } else {
            console.error(
              "OwlCarousel is not available."
            );
          }
        })
        .catch((error) => {
          console.error("Failed to load OwlCarousel", error);
        });
    }
  }, []); // Empty dependency array to execute the effect only once

  return <div className="owl-carousel">...</div>;
}

OwlCarousel.propTypes = {
  items: PropTypes.any,
  options: PropTypes.any,
};