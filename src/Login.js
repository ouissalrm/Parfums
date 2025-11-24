import React, { useState } from "react";
import "./Login.css";
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = "L'email est requis";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "L'email n'est pas valide";
        }

        if (!formData.password) {
            newErrors.password = "Le mot de passe est requis";
        } else if (formData.password.length < 6) {
            newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newErrors = validateForm();
        
        if (Object.keys(newErrors).length === 0) {
            console.log("Login data:", formData);
            alert("Connexion réussie!");
        } else {
            setErrors(newErrors);
        }
    };

    const handleGoogleLogin = () => {
        console.log("Google login");
    };

    const handleFacebookLogin = () => {
        console.log("Facebook login");
    };

    return (
        <div className="login-page">
            <div className="login-container-centered">
                <h1 className="login-title">Connectez-vous à votre compte</h1>
                
                <form onSubmit={handleSubmit} className="login-form-centered">
                    <div className="form-group-centered">
                        <label htmlFor="email">Votre Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="exemple@email.com"
                            className={errors.email ? "input-error" : ""}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group-centered">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className={errors.password ? "input-error" : ""}
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>

                    <div className="form-options-centered">
                        <label className="remember-checkbox">
                            <input type="checkbox" />
                            <span>Se souvenir de moi</span>
                        </label>
                    </div>

                    <button type="submit" className="login-btn-main">
                        Login
                    </button>
                </form>

                <div className="separator-line">
                    <span>Connexion Instantanée</span>
                </div>

                <div className="social-buttons-container">
                    <button onClick={handleGoogleLogin} className="social-btn-clean google-btn-clean">
                        <FaGoogle />
                        <span>Continuer avec Google</span>
                    </button>
                    <button onClick={handleFacebookLogin} className="social-btn-clean facebook-btn-clean">
                        <FaFacebook />
                        <span>Continuer avec Facebook</span>
                    </button>
                </div>

                <div className="signup-text">
                    <p>Vous n'avez pas de compte? <a href="/register">S'inscrire</a></p>
                </div>
            </div>
        </div>
    );
}