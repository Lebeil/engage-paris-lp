"use client";

import { useState, useEffect } from "react";

export default function Register() {
    // Utilisation des variables d'environnement avec Next.js
    const sheetId = process.env.NEXT_PUBLIC_SHEET_ID;
    // URL du service web déployé avec l'ID correct
    const scriptUrl = `https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_ID}/exec`;

    // Afficher les variables d'environnement pour le débogage (uniquement en développement)
    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            console.log('Variables d\'environnement chargées:');
            console.log('SHEET_ID:', process.env.NEXT_PUBLIC_SHEET_ID);
            console.log('SCRIPT_URL:', scriptUrl);
        }
    }, [scriptUrl]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        title: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            // Préparation des données pour l'envoi - utiliser URLSearchParams pour format x-www-form-urlencoded
            const formParams = new URLSearchParams();
            formParams.append('name', formData.name);
            formParams.append('email', formData.email);
            formParams.append('company', formData.company);
            formParams.append('title', formData.title);
            formParams.append('timestamp', new Date().toISOString());

            console.log("Envoi des données au Google Sheet:", Object.fromEntries(formParams));
            console.log("URL du script:", scriptUrl);

            // Envoyer les données au script Google
            try {
                await fetch(scriptUrl, {
                    method: 'POST',
                    mode: 'no-cors', // Nécessaire pour les requêtes cross-origin vers Google Apps Script
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: formParams.toString()
                });

                console.log("Requête envoyée avec succès");
                // Note: avec 'no-cors', nous ne pouvons pas lire la réponse

                // Vérification manuelle - ouvrir un nouvel onglet vers Google Sheets pour vérifier l'insertion
                // window.open(`https://docs.google.com/spreadsheets/d/${sheetId}/edit`, '_blank');

                setIsSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    title: "",
                });
            } catch (fetchError) {
                console.error("Erreur de connexion:", fetchError);
                throw new Error("Problème de connexion au service. Vérifiez votre connexion internet.");
            }
        } catch (err) {
            console.error("Erreur lors de la soumission:", err);
            setError("Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 bg-primary text-white" id="register">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Restons en contact
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
                            <div className="mt-4">
                                <a
                                    href={`https://docs.google.com/spreadsheets/d/${sheetId}/edit?gid=1224702497#gid=1224702497`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline text-sm"
                                >
                                    Voir les inscriptions (Admin seulement)
                                </a>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                            {error && (
                                <div className="bg-red-50 text-red-600 p-4 rounded mb-6">
                                    {error}
                                </div>
                            )}

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
                                        <a href="https://www.engage.paris/" className="text-primary underline hover:text-secondary">
                                            politique de confidentialité
                                        </a>.
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

                            <div className="mt-4 text-xs text-gray-500">
                                Les données sont enregistrées dans Google Sheets pour faciliter le suivi des inscriptions.
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
} 