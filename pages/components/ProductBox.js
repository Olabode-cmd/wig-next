import React from "react";

const ProductBox = (props) => {
    return (
      <>
        <div className="product-box">
          <div className="product-img">
            <img src={props.img} alt="featured" />
          </div>
          <p className="detail">{props.details}</p>
          {props.status && (
            <span className={`tag ${props.status}`}>{props.status}</span>
          )}

          <p className="footer">
            From<span className="price">{props.price}</span>
          </p>

          {props.button == true && (
            <a href="#" className="btn btn-primary box outline blue">
              ADD TO BAG
            </a>
          )}
        </div>
      </>
    );
}

export default ProductBox;