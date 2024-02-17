import React from "react";

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

export default CustomerCard;
