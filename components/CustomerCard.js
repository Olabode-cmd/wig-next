import React from "react";
import PropTypes from "prop-types";

const CustomerCard = (props) => {
  return (
    <>
      <div className="customer-card">
        <div className="customer-img">
          <img src={props.image} alt="customer" />
        </div>

        <div className="text">
          <h3 className="name">{props.name}</h3>
          <p>{props.comment}</p>
          <img src="images/stars.png" alt="stars" className="stars d-block mb-2" />

          <a href="#" className="btn-text">
            SHOP NOW
          </a>
        </div>
      </div>
    </>
  );
};

CustomerCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  key: PropTypes.number,
};

export default CustomerCard;
