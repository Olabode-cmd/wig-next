import React, { useState } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import ProductBox from "../components/ProductBox";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Limited from "../components/Limited";
import FilterAccordion from "../components/FilterAccordion";
import Modal from "../components/Modal";

export default function Clipins() {
  const laceWigs = [
    {
      img: "/images/pick1.png",
      details:
        "Straight Top Lace Short Bob With Bangs Wig - #2 Chocolate Brown",
      price: "$219.99",
      button: true,
    },
    {
      img: "/images/pick2.png",
      details:
        "Straight Top Lace Short Bob With Bangs Wig - #2 Chocolate Brown",
      price: "$219.99",
      button: true,
    },
    {
      img: "/images/pick3.png",
      details:
        "Straight Top Lace Short Bob With Bangs Wig - #2 Chocolate Brown",
      price: "$219.99",
      button: true,
      status: "sale",
    },
    {
      img: "/images/pick4.png",
      details:
        "Straight Top Lace Short Bob With Bangs Wig - #2 Chocolate Brown",
      price: "$219.99",
      button: true,
    },
  ];

  const wigs360 = [
    {
      img: "/images/featured-1.png",
      details:
        "Straight Top Lace Short Bob With Bangs Wig - #2 Chocolate Brown",
      price: "$219.99",
      button: true,
    },
    {
      img: "/images/featured-2.png",
      details:
        "Straight Top Lace Short Bob With Bangs Wig - #2 Chocolate Brown",
      price: "$219.99",
      button: true,
      status: "new",
    },
    {
      img: "/images/featured-3.png",
      details:
        "Straight Top Lace Short Bob With Bangs Wig - #2 Chocolate Brown",
      price: "$219.99",
      button: true,
    },
    {
      img: "/images/featured-4.png",
      details:
        "Straight Top Lace Short Bob With Bangs Wig - #2 Chocolate Brown",
      price: "$219.99",
      button: true,
    },
  ];

  const readyToWearWigs = [
    {
      img: "/images/wear1.png",
      details:
        "Straight Top Lace Short Bob With Bangs Wig - #2 Chocolate Brown",
      price: "$219.99",
      button: true,
    },
    {
      img: "/images/wear2.png",
      details:
        "Straight Top Lace Short Bob With Bangs Wig - #2 Chocolate Brown",
      price: "$219.99",
      button: true,
      status: "new",
    },
    {
      img: "/images/wear3.png",
      details:
        "Straight Top Lace Short Bob With Bangs Wig - #2 Chocolate Brown",
      price: "$219.99",
      button: true,
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Head>
        <title>Clipins || WigsCastle Landing Page</title>
      </Head>

      {/* NAVBAR */}
      <Navbar />

      <main className="mt-4">
        <div className="container">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html" className="text-black">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Clipins
              </li>
            </ol>
          </nav>
          <h1 className="title">Clipins</h1>

          {/* SECTION PRODUCTS */}
          <section className="section-products">
            <div className="row">
              <div className="col-md-3 d-none d-md-block">
                <FilterAccordion />
              </div>

              <div className="col-md-9">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <h3 className="subtitle m-0">Lace Wigs</h3>

                    <button
                      type="button"
                      className="btn btn-primary py-1 ms-1 d-block d-md-none"
                      onClick={handleToggleModal}
                    >
                      Filter
                    </button>

                    <Modal show={showModal} onClose={handleToggleModal} />
                  </div>

                  <div className="d-flex align-items-center">
                    <span className="me-3 sort">Sort by:</span>

                    <select className="select-input">
                      <option value="1" selected>
                        Popularity
                      </option>
                      <option value="2">Just Added</option>
                      <option value="3">Best Seller</option>
                      <option value="4">Top Rated</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-2">
                  {laceWigs.map((wig, index) => (
                    <div
                      className="col-6 col-md-4"
                      key={`${wig.details}-${index}`}
                    >
                      <ProductBox
                        img={wig.img}
                        details={wig.details}
                        price={wig.price}
                        button={wig.button}
                        status={wig.status}
                      />
                    </div>
                  ))}
                </div>

                <div className="d-flex align-items-center justify-content-between mt-100">
                  <h3 className="subtitle">360 Wigs</h3>
                </div>

                <div className="row mt-2">
                  {wigs360.map((wig, index) => (
                    <div
                      className="col-6 col-md-4"
                      key={`${wig.details}-${index}`}
                    >
                      <ProductBox
                        img={wig.img}
                        details={wig.details}
                        price={wig.price}
                        button={wig.button}
                        status={wig.status}
                      />
                    </div>
                  ))}
                </div>

                <div className="d-flex align-items-center justify-content-between mt-100">
                  <h3 className="subtitle">Ready-to-wear Wigs</h3>
                </div>

                <div className="row mt-2">
                  {readyToWearWigs.map((wig, index) => (
                    <div
                      className="col-6 col-md-4"
                      key={`${wig.details}-${index}`}
                    >
                      <ProductBox
                        img={wig.img}
                        details={wig.details}
                        price={wig.price}
                        button={wig.button}
                        status={wig.status}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION LIMITED */}
          <Limited />

          {/* SECTION NEWSLETTER */}
          <Newsletter />
        </div>
      </main>

      {/* FOOOOTER */}
      <Footer />
    </>
  );
}
