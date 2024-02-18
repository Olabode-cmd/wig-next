import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import $ from 'jquery'

function OwlCarousel({ options }) {
  useEffect(() => {
    // Check if window is defined before accessing it
    if (typeof window !== "undefined") {
      import("owl.carousel")
        .then((OwlCarousel) => {
          if (OwlCarousel.default) {
            $(".owl-carousel").owlCarousel(options);
          } else {
            console.error("OwlCarousel is not available");
          }
        })
        .catch((error) => {
          console.error("Failed to load OwlCarousel", error);
        });
    }
  }, [options]);

  return <div className="owl-carousel">...</div>;
}

OwlCarousel.propTypes = {
  items: PropTypes.any,
  options: PropTypes.any,
};

export default OwlCarousel;