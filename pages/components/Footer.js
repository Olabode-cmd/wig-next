import React from "react";
import Link from "next/link";

const Footer = () => {
    return(
        <>
            <footer>
        <div className="container">
            <div className="row" style={{marginBottom: "6rem"}}>
                <div className="col-md-3">
                    <img src="images/logo-white.png" alt="logo" className="logo" />
                    <p className="subtitle mt-3">Unlock Your True Beauty with Our Exquisite Wigs</p>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-6">
                            <h3 className="title">shop</h3>
                            <ul>
                                <li><Link href="/hair-shop">Hair shop</Link></li>
                                <li><Link href="/wigs">Wigs</Link></li>
                                <li><Link href="/closures">Closures</Link></li>
                                <li><Link href="/clip-ins">Clip-ins</Link></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <h3 className="title">company</h3>
                            <ul>
                                <li><Link href="/account">My Account</Link></li>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                                <li><Link href="/faq">FAQs</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="d-flex justify-content-end">
                        <div className="d-flex">
                            <Link href="#">
                                <img src="images/facebook.png" alt="facebook" className="socials" />
                            </Link>
                            <Link href="#">
                                <img src="images/instagram.png" alt="instagram" className="socials" />
                            </Link>
                            <Link href="#">
                                <img src="images/tiktok.png" alt="tiktok" className="socials" />
                            </Link>
                            <Link href="#">
                                <img src="images/x.png" alt="x" className="socials" />
                            </Link>
                        </div>
                    </div>
    
                    <div className="d-flex justify-content-end">
                        <div className="d-flex mt-3">
                            <Link href="/terms" className="me-2">Terms</Link>
                            <Link href="/return-policy" className="me-2">Return Policy</Link>
                            <Link href="/cookies">Cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="text-center">
                <p className="copy">&copy; 2023 Wig Castle. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
        </>
    )
}

export default Footer;