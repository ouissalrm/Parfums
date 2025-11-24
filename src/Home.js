import React from "react";
import './Home.css';
import Card from "./Card";
import ChanelImage from './Chanel Coco Mademoiselle (2).jpeg';
import GucciBloom from './Gucci Bloom.jpeg';
import TomFordOudWood from './Tom Ford Oud Wood.jpeg';
import { FiShoppingBag, FiGrid } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';

export default function Home() {
    const handleShopNow = () => {
        
        console.log('Navigate to shop');
    };

    const handleBrowseCategories = () => {
        console.log('Navigate to categories');
    };

    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="home">
                <div className="hero-overlay"></div>
                <div className="title">
                    <div className="badge">
                        <BsStars className="badge-icon" />
                        <span>Collection Premium</span>
                    </div>
                    
                    <h1 className="hero-title">Welcome to Parfuméa</h1>
                    
                    <p className="hero-description">
                        Discover the harmony between art and fragrance. Inspired by Andalusian culture, 
                        each perfume is a journey through elegance, culture, and passion—a refined 
                        expression of beauty that lingers in every drop.
                    </p>
                    
                    <div className="buttons">
                        <button className="button2" onClick={handleShopNow}>
                            <FiShoppingBag className="btn-icon" />
                            <span>Shop Now</span>
                        </button>
                        <button className="button1" onClick={handleBrowseCategories}>
                            <FiGrid className="btn-icon" />
                            <span>Browse Categories</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Featured Products Section */}
            <section className="featured-section">
                <div className="section-header">
                    <div className="section-badge">
                        <BsStars className="section-icon" />
                    </div>
                    <h1 className="section-title">Parfums Vedettes</h1>
                    <p className="section-description">
                        Découvrez nos parfums les plus convoités
                    </p>
                </div>

                <div className="cards">
                    <Card 
                        title="Chanel Coco Mademoiselle" 
                        desc="Parfum féminin luxueux mêlant fleurs et patchouli avec une touche de vanille douce" 
                        prix="250" 
                        image={ChanelImage} 
                    />
                    <Card 
                        title="Gucci Bloom" 
                        desc="Parfum féminin délicat aux senteurs de jasmin et fleurs blanches rafraîchissantes." 
                        prix="300" 
                        image={GucciBloom} 
                    />
                    <Card 
                        title="Tom Ford Oud Wood" 
                        desc="Parfum de luxe unisexe aux senteurs chaudes de bois de oud, musc et ambre." 
                        prix="550" 
                        image={TomFordOudWood} 
                    />
                </div>
            </section>
        </div>
    );
}