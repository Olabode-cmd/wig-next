import React from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function About() {
    return (
      <>
        <Head>
          <title>About || WigsCastle Landing Page</title>
        </Head>

        {/* NAVBAR */}
        <Navbar />

        <main className="mt-50">
          <div className="container">
            {/* SECTION HERO */}
            <section className="section-hero">
              <div className="text-center">
                <p className="text-purple mb-3 text-bold">About Us</p>
                <h1 className="title">
                  Every wig is a masterpiece designed <br />
                  to unlock your inner beauty
                </h1>
                <p className="text-grey mt-3">
                  Discover a world of elegance, versatility, and
                  self-expression. Choose confidence.
                  <br /> Choose Wigs Castle.
                </p>
              </div>
            </section>
          </div>

          {/* SECTION STORY */}
          <section className="section-story">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <p className="text-bold text-purple">Our Story</p>
                  <h1 className="title">
                    Creating a space where beauty knows no boundaries
                  </h1>

                  <p className="text-grey">
                    WigsCastle was born out of the desire to create a space
                    where beauty knows no boundaries. We understand that your
                    hair is not just a part of your appearance; it&apos;s an
                    extension of your identity. With that in mind, we set out to
                    curate a range of original, high-quality products that cater
                    to diverse tastes and preferences.
                  </p>

                  <p className="text-grey">
                    Our founders, a team of beauty enthusiasts and experts, have
                    dedicated their lives to the art of enhancing natural
                    beauty. This dedication led to the creation of LuxLocks,
                    where we blend creativity, craftsmanship, and innovation to
                    deliver wigs that transcend trends and embrace the timeless
                    essence of beauty.
                  </p>
                </div>
                <div className="col-md-5">
                  <div className="row">
                    <div className="col-6 my-1">
                      <img src="images/about3.png" alt="about" />
                    </div>
                    <div className="col-6 my-1">
                      <img src="images/about2.png" alt="about" />
                    </div>
                    <div className="col-6 my-1">
                      <img src="images/about1.png" alt="about" />
                    </div>
                    <div className="col-6 my-1">
                      <img src="images/about4.png" alt="about" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="container">
            {/* SECTION COMMITMENT */}
            <section className="section-commitment">
                <div className="text-center">
                    <p className="text-purple mb-3 text-bold">Our Commitment</p>
                    <h1 className="title">How we serve our customers</h1>
                    <p className="text-grey">WigCastle is committed to providing.</p>
                </div>

                <div className="row mt-4 align-items-start">
                    <div className="col-md-4 mt-2">
                        <div className="text-center">
                            <img src="images/check.png" alt="check" className="icon" />
                            <p className="text-bold mt-2">Originality</p>
                            <p className="text-grey mt-2">
                                We handpick each product to ensure authenticity and originality. Our &apos;Original Products&apos; section reflects our
                                dedication
                                to quality.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mt-2">
                        <div className="text-center">
                            <img src="images/triple-star.png" alt="triple-star" className="icon" />
                            <p className="text-bold mt-2">Quality</p>
                            <p className="text-grey mt-2">
                                We offer the finest 100% virgin human hair wigs that maintain their luster and softness over time.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mt-2">
                        <div className="text-center">
                            <img src="images/trophy.png" alt="trophy" className="icon" />
                            <p className="text-bold mt-2">Innovation</p>
                            <p className="text-grey mt-2">
                            Our &apos;New Arrival Everyday&apos; collection is a testament to our passion for staying on the cutting edge of fashion.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mt-2">
                        <div className="text-center">
                            <img src="images/smile.png" alt="smile" className="icon" />
                            <p className="text-bold mt-2">Customer Satisfaction</p>
                            <p className="text-grey mt-2">
                                Our &apos;New Arrival Everyday&apos; collection is a testament to our passion for staying on the cutting edge of
                                fashion.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mt-2">
                        <div className="text-center">
                            <img src="images/recycle.png" alt="recycle" className="icon" />
                            <p className="text-bold mt-2">Longevity</p>
                            <p className="text-grey mt-2">
                                Our &apos;30 Days Guarantee&apos; ensures that your investment is protected, and you have 30 days to ensure you are satisfied with
                                your purchase.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 mt-2">
                        <div className="text-center">
                            <img src="images/sparkle.png" alt="sparkle" className="icon" />
                            <p className="text-bold mt-2">Top-notch Services</p>
                            <p className="text-grey mt-2">
                                Your shopping journey with LuxLocks will always be met with top-notch service. Our team is here to assist you at every
                                step, from expert advice to prompt assistance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* JOIN US */}
            <section className="section-joinus">
                <div className="text-center">
                    <p className="text-purple mb-3 text-bold">Join Us</p>
                    <h1 className="title">Join Us On Your Beauty Journey</h1>
                    <p className="text-grey">At WigsCastle, we&apos;re not just a store; we&apos;re your partners on a journey to unlock your inner beauty and confidence.<br /> We
                    invite you to explore our collections, connect with our community, and share in the joy<br /> of self-expression through
                    exquisite wigs and accessories.</p>
                </div>

                <img src="images/mannequin-about.png" alt="mannequin" className="w-100 mt-50" />
            </section>

            {/* NEWSLETTER */}
            <Newsletter />
          </div>
        </main>

        <Footer />
      </>
    );
}