import React from "react";
import Link from "next/link";

const Limited = () => {
    return (
      <>
        <section className="section-limited">
          <div className="limited-card">
            <div className="row gx-0 align-items-center">
              <div className="col-md-6 left">
                <p className="text-uppercase subtitle">limited offer</p>
                <h1 className="title lighter">
                  Unlock Your <br />
                  True Beauty
                </h1>
                <p>15% Off Curly Wigs | CODE: CURRLY</p>

                <Link href="/hair-shop" className="btn btn-primary outline box white">
                  SHOP NOW
                </Link>
              </div>
              <div className="col-md-6">
                <img src="images/limited.png" alt="limited" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Limited;