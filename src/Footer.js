import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';

const Footer = () => {
    const date = new Date();

    const handleSocialClick = (platform) => {
        console.log(`Navigating to ${platform}`);
        // Add your social media links here
    };

    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* About Section */}
                <div className="footer-section about-section">
                    <div className="footer-logo">
                        <h3>Parfuméa</h3>
                    </div>
                    <p className="about-text">
                        Chez Wissal Parfums, nous croyons que chaque parfum raconte une histoire. 
                        Nos créations allient élégance, authenticité et passion pour vous offrir 
                        des fragrances uniques qui subliment votre personnalité.
                    </p>
                    <div className="contact-info">
                        <div className="contact-item">
                            <HiLocationMarker className="contact-icon" />
                            <span>Casablanca, Morocco</span>
                        </div>
                        <div className="contact-item">
                            <HiMail className="contact-icon" />
                            <span>contact@parfumea.com</span>
                        </div>
                        <div className="contact-item">
                            <HiPhone className="contact-icon" />
                            <span>+212 6XX XXX XXX</span>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-section links-section">
                    <h3 className="section-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="/Home">Home</a></li>
                        <li><a href="/Products">Products</a></li>
                        <li><a href="/About">About</a></li>
                        <li><a href="/Shop">Shop</a></li>
                        <li><a href="/Login">Login</a></li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div className="footer-section links-section">
                    <h3 className="section-title">Customer Service</h3>
                    <ul className="footer-links">
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#shipping">Shipping Info</a></li>
                        <li><a href="#returns">Returns</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="footer-section social-section">
                    <h3 className="section-title">Follow Us</h3>
                    <p className="social-text">Stay connected for latest updates and offers</p>
                    <div className="social-buttons">
                        <button 
                            className="social-btn linkedin"
                            onClick={() => handleSocialClick('LinkedIn')}
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </button>
                        <button 
                            className="social-btn instagram"
                            onClick={() => handleSocialClick('Instagram')}
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </button>
                        <button 
                            className="social-btn github"
                            onClick={() => handleSocialClick('GitHub')}
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </button>
                        <button 
                            className="social-btn facebook"
                            onClick={() => handleSocialClick('Facebook')}
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </button>
                        <button 
                            className="social-btn whatsapp"
                            onClick={() => handleSocialClick('WhatsApp')}
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </button>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <div className="copyright">
                    <p>&copy; {date.getFullYear()} Parfuméa. Tous droits réservés.</p>
                </div>
                <div className="footer-bottom-links">
                    <a href="#privacy">Privacy</a>
                    <span className="separator">•</span>
                    <a href="#terms">Terms</a>
                    <span className="separator">•</span>
                    <a href="#cookies">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;