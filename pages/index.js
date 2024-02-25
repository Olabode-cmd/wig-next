import React from "react";
import Head from "next/head";
import Link from "next/link";

import Navbar from "../components/Navbar";
import OwlCarousel from "../components/OwlCarousel";
import ProductBox from "../components/ProductBox";
import CustomerCard from "../components/CustomerCard";
import Newsletter from "../components/Newsletter";
import Limited from "../components/Limited";
import Footer from "../components/Footer";

export default function Home() {
    const featuredProducts = [
      {
        img: "/images/featured-1.png",
        details:
          "Straight Top Lace Short Bob With Bangs Wig - #2 Chocolate Brown",
        price: "$219.99",
      },
      {
        img: "/images/featured-2.png",
        details: "1 Bundle of Our Brazilian Hair Extensions",
        price: "$129.99",
        status: "new",
      },
      {
        img: "/images/featured-3.png",
        details: "Raw Platinum White Curly Wig",
        price: "$229.99",
      },
      {
        img: "/images/featured-4.png",
        details: "1 Bundle of Our Brazilian Hair Extensions",
        price: "$129.99",
        status: "sale",
      },
      {
        img: "/images/featured-2.png",
        details: "Raw Platinum White Curly Wig",
        price: "$129.99",
      },
    ];

    const hotPicks = [
      {
        img: "/images/pick1.png",
        details:
          "Straight Top Lace Short Bob With Bangs Wig - #2 Chocolate Brown",
        price: "$219.99",
        status: "sale",
      },
      {
        img: "/images/pick2.png",
        details: "1 Bundle of Our Brazilian Hair Extensions",
        price: "$129.99",
      },
      {
        img: "/images/pick3.png",
        details: "Raw Platinum White Curly Wig",
        price: "$229.99",
      },
      {
        img: "/images/pick4.png",
        details: "1 Bundle of Our Brazilian Hair Extensions",
        price: "$129.99",
        status: "sale",
      },
      {
        img: "/images/featured-2.png",
        details: "Raw Platinum White Curly Wig",
        price: "$129.99",
      },
    ];

    const options = {
      loop: true,
      margin: 15,
      responsive: {
        0: {
          items: 1.5,
        },
        600: {
          items: 2.5,
        },
        1000: {
          items: 4,
        },
      },
    };
    return (
      <>
        <Head>
          <title>WigsCastle Landing Page</title>
        </Head>

        <Navbar />
        <main>
          <div className="container">
            {/* BANNER */}
            <div className="banner">
              <div className="row gx-0" style={{ height: "100%" }}>
                <div className="col-md-6 left-banner">
                  <p className="subtitle">Discover your perfect look</p>
                  <h1 className="title">
                    Unlock Your True <br /> Beauty with Our <br /> Exquisite
                    Wigs
                  </h1>

                  <Link
                    href="/hair-shop"
                    className="btn btn-primary box outline mt-3"
                  >
                    SHOP NOW
                  </Link>
                </div>
                <div
                  className="col-md-6 image"
                  style={{
                    background: "url('/images/banner-bg.png') no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "right",
                  }}
                >
                  &nbsp;
                </div>
              </div>
            </div>

            {/* SECTION BEST */}
            <section className="section-best">
              <h1 className="title">
                We provide best
                <br /> customer experiences
              </h1>

              <div className="row">
                <div className="col-md-3">
                  <img src="images/check.png" alt="check" className="my-3" />
                  <h3 className="best-tag">Original Products</h3>
                  <p className="best-subtitle">
                    We provide money back guarantee if the products are not
                    original
                  </p>
                </div>
                <div className="col-md-3">
                  <img src="images/smile.png" alt="smile" className="my-3" />
                  <h3 className="best-tag">Satisfaction Guarantee</h3>
                  <p className="best-subtitle">
                    If you&apos;re not delighted with your purchase, we&apos;re
                    here to make it right
                  </p>
                </div>
                <div className="col-md-3">
                  <img
                    src="images/recycle.png"
                    alt="recycle"
                    className="my-3"
                  />
                  <h3 className="best-tag">New Arrivals Everyday</h3>
                  <p className="best-subtitle">
                    We updates our collections almost everyday
                  </p>
                </div>
                <div className="col-md-3">
                  <img src="images/truck.png" alt="truck" className="my-3" />
                  <h3 className="best-tag">Free Standard Shipping</h3>
                  <p className="best-subtitle">
                    We offer fast and free shipping for our loyal customers
                  </p>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-7">
                  <div className="shop-box img-right">
                    <img src="images/wigs.png" alt="wigs" />
                    <div className="shade"></div>

                    <div className="text">
                      <h1 className="title">Wigs</h1>
                      <a href="#" className="btn-text-white">
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-5">
                  <div className="shop-box">
                    <img src="images/bundles.png" alt="bundles" />
                    <div className="shade"></div>

                    <div className="text">
                      <h1 className="title">Bundles</h1>
                      <a href="#" className="btn-text-white">
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-5">
                  <div className="shop-box img-right">
                    <img src="images/frontal.png" alt="frontals" />
                    <div className="shade"></div>

                    <div className="text">
                      <h1 className="title">Frontals</h1>
                      <a href="#" className="btn-text-white">
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="shop-box">
                    <img src="images/clipins.png" alt="clipins" />
                    <div className="shade"></div>

                    <div className="text">
                      <h1 className="title">Clip-ins</h1>
                      <a href="#" className="btn-text-white">
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION FEATURED */}
            <section className="section-featured">
              <div className="d-flex align-items-center mb-4">
                <img src="/images/star-dots.png" alt="star" />
                <h1 className="title">Featured products</h1>
              </div>

              <OwlCarousel
                items={featuredProducts.map((featuredProduct, index) => (
                  <ProductBox key={index} {...featuredProduct} />
                ))}
                options={options}
              />
            </section>

            {/* SECTION HOTPICK */}
            <section className="section-hotpick">
              <div className="d-flex align-items-center mb-4">
                <img src="images/fire.png" alt="fire" />
                <h1 className="title">Hot Picks</h1>
              </div>

              <OwlCarousel
                items={hotPicks.map((hotPicks, index) => (
                  <ProductBox key={index} {...hotPicks} />
                ))}
                options={options}
              />
            </section>

            {/* SECTION LIMITED */}
            <Limited />

            {/* SECTION CUSTOMERS */}
            <section className="section-customer">
              <div className="d-flex align-items-center mb-4">
                <img src="images/chat-bubble.png" alt="chat" />
                <h1 className="title">Hear What Our Customers Say</h1>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <CustomerCard
                    name="Samantha R."
                    comment="I couldn't be happier with my WigCastle wig! The quality is incredible, and it looks so natural. It's boosted my confidence, and I get compliments all the time. Thank you, WigCastle!"
                    image="/images/customer1.png"
                  />
                </div>

                <div className="col-md-4">
                  <CustomerCard
                    name="Emily C."
                    comment="WigCastle 'Satisfaction Guarantee' is real! I had a minor issue with my order, and they resolved it swiftly and with a smile. Their customer service is top-notch, and the wigs are gorgeous."
                    image="/images/customer2.png"
                  />
                </div>

                <div className="col-md-4">
                  <CustomerCard
                    name="Grace L."
                    comment="I've tried wigs from other places, but '100% Virgin Human Hair' from WigCastle is incomparable. It's silky, easy to style, and feels like my own hair. I'm in love!"
                    image="/images/customer3.png"
                  />
                </div>
              </div>
            </section>

            {/* SECTION NEWSLETTER */}
            <Newsletter />
          </div>
        </main>
        
        {/* FOOOOOTER */}
        <Footer />
      </>
    );
}