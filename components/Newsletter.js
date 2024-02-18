import React from "react";

const Newsletter = () => {
    return (
        <>
            <section className="section-newsletter">
                <h1 className="title">Subcribe to our newsletter to get updates<br /> to our latest collections</h1>
                <p className="subtitle">Get 20% off on your first order just by subscribing to your newsletter</p>

                <form action="#">
                    <div className="d-flex justify-content-center">
                        <div className="email-input">
                            <input type="email" placeholder="Enter your email" />
                            <img src="images/message.png" alt="message" className="icon" width="18px" />
                        </div>

                        <input type="submit" value="Subscribe" className="btn btn-primary py-1 px-3 ms-2" />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Newsletter;