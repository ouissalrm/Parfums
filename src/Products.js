import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import './Cardss.css';
import { BiSearch, BiFilter } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Products() {
    // State pour produits
    const [parfum, setlisteproduit] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterVisible, setFilterVisible] = useState(false);

    // GET API
    const getparfums = () => {
        setLoading(true);
        fetch('/parfums.json')
            .then(Response => {
                if (!Response.ok) {
                    throw new Error('Erreur lors du chargement des produits');
                }
                return Response.json();
            })
            .then(Response => {
                setlisteproduit(Response);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    };

    // Filter products based on search
    const filteredParfums = parfum.filter(product =>
        product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Résultat
    const resultat = filteredParfums.map((index, key) => (
        <Cards products={index} key={key} />
    ));

    // componentDidMount
    useEffect(() => {
        getparfums();
    }, []);

    return (
        <div className="products-container">
            {/* Header Section */}
            <div className="products-header">
                <div className="header-content">
                    <h1 className="products-title">Nos Parfums</h1>
                    <p className="products-subtitle">
                        Découvrez notre collection exclusive de parfums
                    </p>
                </div>

                {/* Search and Filter Bar */}
                <div className="products-toolbar">
                    <div className="search-box">
                        <BiSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Rechercher un parfum..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    <button 
                        className="filter-btn"
                        onClick={() => setFilterVisible(!filterVisible)}
                    >
                        <BiFilter />
                        <span>Filtres</span>
                    </button>
                </div>

                {/* Products Count */}
                {!loading && (
                    <div className="products-count">
                        {filteredParfums.length} produit{filteredParfums.length > 1 ? 's' : ''} trouvé{filteredParfums.length > 1 ? 's' : ''}
                    </div>
                )}
            </div>

            {/* Loading State */}
            {loading && (
                <div className="loading-container">
                    <AiOutlineLoading3Quarters className="loading-spinner" />
                    <p>Chargement des produits...</p>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="error-container">
                    <p className="error-message">❌ {error}</p>
                    <button onClick={getparfums} className="retry-btn">
                        Réessayer
                    </button>
                </div>
            )}

            {/* Products Grid */}
            {!loading && !error && (
                <>
                    {filteredParfums.length > 0 ? (
                        <div className="cardss">{resultat}</div>
                    ) : (
                        <div className="no-results">
                            <p>Aucun produit trouvé pour "{searchTerm}"</p>
                            <button 
                                onClick={() => setSearchTerm("")}
                                className="clear-search-btn"
                            >
                                Effacer la recherche
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}