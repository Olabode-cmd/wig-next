import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="main-navbar shadow-sm sticky-top">
          <div className="top-navbar">
            <div className="container">
              <div className="row">
                <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                  <div className="brand-name">
                    <img src="/images/logo-purple.png" alt="logo" />
                  </div>
                </div>
                <div className="col-md-8 my-auto">
                  <div className="d-flex">
                    <form role="search" className="w-40 ms-auto">
                      <div className="search-input">
                        <input type="search" placeholder="Search" />
                        <img
                          src="/images/search.png"
                          alt="search"
                          className="icon"
                          width="18px"
                        />
                      </div>
                    </form>

                    <div className="nav-right d-block d-md-none">
                      <div className="d-flex align-items-center justify-content-end">
                        <select name="currency" id="currency">
                          <option value="usd" selected>
                            USD
                          </option>
                          <option value="ngn" selected>
                            NGN
                          </option>
                          <option value="gbp" selected>
                            GBP
                          </option>
                        </select>

                        <a href="shopping-bag.html">
                          <div className="notify">
                            <img src="/images/bag.png" alt="bell" />
                            <span className="tag">3</span>
                          </div>
                        </a>

                        <a href="#">
                          <img
                            src="/images/profile.png"
                            alt="profile"
                            className="icon"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 my-auto nav-right d-none d-md-block">
                  <div className="d-flex align-items-center justify-content-end">
                    <select name="currency" id="currency">
                      <option value="usd" selected>
                        USD
                      </option>
                      <option value="ngn" selected>
                        NGN
                      </option>
                      <option value="gbp" selected>
                        GBP
                      </option>
                    </select>

                    <a href="shopping-bag.html">
                      <div className="notify">
                        <img src="/images/bag.png" alt="bell" />
                        <span className="tag">3</span>
                      </div>
                    </a>

                    <a href="#">
                      <img
                        src="/images/profile.png"
                        alt="profile"
                        className="icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a
                className="navbar-brand d-block d-sm-block d-md-none d-lg-none"
                href="#"
              >
                <img src="/images/logo-purple.png" alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa-solid fa-bars nav-bars"></i>
              </button>
              <div
                className="collapse navbar-collapse pt-4 pb-2"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                  <li className="nav-item">
                    {/* <a className="nav-link" href="index.html">
                      Home
                    </a> */}
                    <Link href="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/hair-shop" className="nav-link">
                      Hair Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/clip-ins" className="nav-link">
                      clip-ins
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/new-arrivals" className="nav-link">
                      new arrivals
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/login" className="nav-link">
                      login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/create-account" className="nav-link">
                      create account
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
