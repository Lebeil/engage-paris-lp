"use client";

import { useState } from "react";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        title: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulation d'un appel API
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({
                name: "",
                email: "",
                company: "",
                title: "",
            });
        }, 1500);
    };

    return (
        <section className="py-16 bg-primary text-white" id="register">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        S&apos;inscrire à l&apos;événement
                    </h2>
                    <p className="mb-8 text-lg opacity-90">
                        Rejoignez l&apos;événement Customer Success de l&apos;année et connectez-vous avec des professionnels partageant les mêmes intérêts.
                    </p>

                    {isSubmitted ? (
                        <div className="bg-white text-primary p-8 rounded-lg shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <h3 className="text-2xl font-bold mb-2">Merci pour votre inscription !</h3>
                            <p>Nous avons bien reçu votre demande d&apos;inscription. Vous recevrez un email avec tous les détails pratiques dans les prochains jours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="mb-2 font-medium text-left">
                                        Nom complet
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Votre nom et prénom"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="mb-2 font-medium text-left">
                                        Email professionnel
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="votre.email@entreprise.com"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="company" className="mb-2 font-medium text-left">
                                        Entreprise
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                        className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Nom de votre entreprise"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="title" className="mb-2 font-medium text-left">
                                        Poste / Fonction
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Votre fonction"
                                    />
                                </div>
                            </div>
                            <div className="text-left mb-6">
                                <label className="flex items-start">
                                    <input
                                        type="checkbox"
                                        required
                                        className="mt-1 mr-2"
                                    />
                                    <span className="text-sm">
                                        J&apos;accepte de recevoir des communications concernant l&apos;événement et je comprends que mes données seront traitées conformément à la{" "}
                                        <a href="/confidentialite" className="text-primary underline hover:text-secondary">
                                            politique de confidentialité
                                        </a>
                                        .
                                    </span>
                                </label>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn bg-primary text-white hover:bg-opacity-90 w-full md:w-auto"
                            >
                                {isSubmitting ? "Traitement en cours..." : "S'inscrire maintenant"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
} 