"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type FAQItem = {
    question: string;
    answer: string;
};

const faqItems: FAQItem[] = [
    {
        question: "Pourquoi est important de faire partie d'engage ?",
        answer: "Être présent à Engage Paris, c'est rejoindre une communauté dynamique de professionnels du Customer Success dédiés à faire évoluer leurs pratiques. L'événement est une occasion unique d'apprendre des meilleurs, de partager ses connaissances et de développer son réseau professionnel qui perdure bien au-delà de l'événement."
    },
    {
        question: "Comment vous préparez à la conférence ?",
        answer: "Pour préparer votre participation, nous vous recommandons de consulter le programme en détail et identifier les sessions qui correspondent à vos intérêts. Préparez vos questions pour les conférenciers et apportez vos cartes de visite pour le networking. Enfin, téléchargez notre application mobile pour avoir toutes les informations à portée de main."
    },
    {
        question: "Y aura-t-il une rediffusion ?",
        answer: "Oui, toutes les conférences seront enregistrées et mises à disposition des participants après l'événement. Vous recevrez un lien d'accès par email pour accéder aux rediffusions et aux supports de présentation des intervenants."
    },
    {
        question: "Et si jj'aimerais être intervenant ?",
        answer: "Nous sommes toujours à la recherche de speakers talentueux pour partager leur expertise. Si vous souhaitez proposer une intervention, utilisez le formulaire 'Je propose ma candidature' sur notre site. Notre comité de programmation examinera toutes les propositions et vous contactera pour la suite du processus."
    },
    {
        question: "Comment se rendre à l'événement ?",
        answer: "La Maison A. VESCO Paris est facilement accessible en transports en commun. Elle se situe à proximité des stations de métro Madeleine et Concorde. Des informations détaillées sur l'accès au lieu seront envoyées par email à tous les participants inscrits une semaine avant l'événement."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(-1);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-16 bg-black" id="faq">
            <div className="container">
                <h2 className="section-title text-center mb-12">
                    FAQ
                </h2>

                <div className="max-w-3xl mx-auto">
                    {faqItems.map((item, index) => (
                        <div key={index} className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden">
                            <button
                                className="w-full flex justify-between items-center p-5 text-left font-semibold"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{item.question}</span>
                                <ChevronDownIcon
                                    className={`h-5 w-5 transition-transform duration-300 ${openIndex === index ? "transform rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <div
                                className={`px-5 transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 pb-5" : "max-h-0 overflow-hidden"
                                    }`}
                            >
                                <p className="text-gray-700">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 