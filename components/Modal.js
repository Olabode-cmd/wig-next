import React from "react";
import FilterAccordion from "./FilterAccordion";
import PropTypes from "prop-types";

const Modal = ({ show, onClose }) => {
  return (
    <div className={`modal ${show ? "show" : ""}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" className="btn" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <FilterAccordion />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
                Filter
            </button>
            {/* Add additional buttons or content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.any,
  onClose: PropTypes.any,
};

export default Modal;
