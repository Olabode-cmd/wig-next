import React from "react";
import PropTypes from "prop-types";

const ProductBox = ({ img, details, status, price, button}) => {
    return (
      <>
        <div className="product-box">
          <div className="product-img">
            <img src={img} alt="featured" />
          </div>
          <p className="detail">{details}</p>
          {status && (
            <span className={`tag ${status}`}>{status}</span>
          )}

          <p className="footer">
            From<span className="price">{price}</span>
          </p>

          {button == true && (
            <a href="#" className="btn btn-primary box outline blue">
              ADD TO BAG
            </a>
          )}
        </div>
      </>
    );
}

ProductBox.propTypes = {
  img: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  button: PropTypes.bool,
  status: PropTypes.string,
  key: PropTypes.number,
};

export default ProductBox;