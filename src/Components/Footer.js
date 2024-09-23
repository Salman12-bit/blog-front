import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            {/* Contact Info*/}
                            <section className="widget widget-light-skin">
                                <h3 className="widget-title">Get In Touch With Us</h3>
                                <p className="text-white">Phone: +92 336 3891 016</p>
                                <ul className="list-unstyled text-sm text-white">
                                    <li><span className="opacity-50">Monday-Friday:</span>   24/7</li>
                                </ul>
                                <Link to="https://jigsawplanet.us/"></Link>jigsawplanet.us<Link className="social-button shape-circle sb-facebook sb-light-skin" href="#"><i className="socicon-facebook" /></Link><Link className="social-button shape-circle sb-twitter sb-light-skin" to=""><i className="socicon-twitter" /></Link><Link className="social-button shape-circle sb-instagram sb-light-skin" to=""><i className="socicon-instagram" /></Link><Link className="social-button shape-circle sb-google-plus sb-light-skin" to=""><i className="socicon-googleplus" /></Link>
                            </section>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {/* Mobile App Buttons*/}
                            <section className="widget widget-light-skin">
                                <h3 className="widget-title">Our Mobile App</h3><Link className="market-button whatsapp-button mb-light-skin" to="http://localhost:3000/blog"><span className="mb-subtitle">Contact Through</span><span className="mb-title">WhatsApp</span></Link><Link className="market-button facebook-button mb-light-skin" to="https://www.facebook.com/share/ZXhZbs3sNdkFPgip/?mibextid=qi2Omg"><span className="mb-subtitle">Contact Through</span><span className="mb-title">Facebook</span></Link>
                            </section>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {/* About Us*/}
                            <section className="widget widget-links widget-light-skin">
                                <h3 className="widget-title">About Us</h3>
                                <ul>
                                    <li><Link to="http://localhost:3000/register">For Carrer Contact Us</Link></li>
                                    <li><Link to="./free">Our Story</Link></li>
                                    <li><Link to="./">Services</Link></li>
                                    <li><Link to="./blog">Our Blog</Link></li>
                                </ul>
                            </section>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            {/* Account / Shipping Info*/}
                            <section className="widget widget-links widget-light-skin">
                                <h3 className="widget-title">Account &amp; Shipping Info</h3>
                                <ul>
                                    <li><Link to="">Your Account</Link></li>
                                    <li><Link to="">Replacements</Link></li>
                                </ul>
                            </section>
                        </div>  
                    </div>
                    <hr className="hr-light mt-2 margin-bottom-2x" />
                    <p className="footer-copyright"><Link>© All rights reserved by blogging zone.</Link></p>
                </div>
            </footer>

        </div>
    )
}
export default Footer;