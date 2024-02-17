import React from "react";

const FilterAccordion = () => {
    return (
      <>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Category
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                  />
                  <label className="form-check-label" for="exampleRadios1">
                    Lace Front Wigs
                  </label>
                </div>

                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    360 Wigs
                  </label>
                </div>

                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                  />
                  <label className="form-check-label" for="exampleRadios3">
                    Ready-to-wear Wigs
                  </label>
                </div>

                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios4"
                  />
                  <label className="form-check-label" for="exampleRadios4">
                    Headband Wigs
                  </label>
                </div>

                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios5"
                  />
                  <label className="form-check-label" for="exampleRadios5">
                    Closure Wigs
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Hair Origin
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    360 Wigs
                  </label>
                </div>

                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                  />
                  <label className="form-check-label" for="exampleRadios3">
                    Ready-to-wear Wigs
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Hair Texture
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    360 Wigs
                  </label>
                </div>

                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                  />
                  <label className="form-check-label" for="exampleRadios3">
                    Ready-to-wear Wigs
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Material
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    360 Wigs
                  </label>
                </div>

                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                  />
                  <label className="form-check-label" for="exampleRadios3">
                    Ready-to-wear Wigs
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Hair Color
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                />
                <label className="form-check-label" for="exampleRadios2">
                  360 Wigs
                </label>
              </div>

              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                />
                <label className="form-check-label" for="exampleRadios3">
                  Ready-to-wear Wigs
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default FilterAccordion;