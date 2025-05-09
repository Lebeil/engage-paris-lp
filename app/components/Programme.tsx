"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Programme() {
    const sessions = [
        {
            id: 1,
            date: "Mar., 24 juin",
            time: "09:40 - 10:10",
            title: "AI au coeur du CS",
            type: "Hybride",
            category: "Conférence",
            description: "L'Intelligence Artificielle, gadget ou alliée indispensable du Customer Success ? Plongeons ensemble dans le sujet, ses promesses et ses limites..."
        },
        {
            id: 2,
            date: "Mar., 24 juin",
            time: "10:10 - 10:30",
            title: "Real world CS strategies to crush NRR! (en anglais)",
            type: "Hybride",
            category: "Conférence",
            description: "Rejoignez Helena alors qu'elle partage des insights et des tactiques concrètes utilisées par les entreprises pionnières en matière de NRR grâce..."
        },
        {
            id: 3,
            date: "Mar., 24 juin",
            time: "11:00 - 12:30",
            title: "De la startup à la scale-up : comment garder toutes les équipes alignées",
            type: "En présentiel",
            category: "Session Pratique + LEADER",
            description: "Chez Doctrine, Arnaud et son équipe contribuent à un go-to-market pleinement aligné, où Product, Sales, Marketing et Customer Success..."
        },
        {
            id: 4,
            date: "Mar., 24 juin",
            time: "14:00 - 14:30",
            title: "Multipliez vos contacts, multipliez votre succès",
            type: "Hybride",
            category: "Conférence CSM",
            description: "Dans un monde où la relation client est essentielle, s'appuyer sur un seul point de contact client représente un risque majeur. Dans cette session,..."
        }
    ];

    return (
        <section className="py-16 bg-white" id="programme">
            <div className="container">
                <h2 className="section-title text-center mb-12">
                    Programme 2026
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {sessions.map((session) => (
                        <div
                            key={session.id}
                            className="bg-white border border-gray-200 rounded-lg shadow-sm p-6"
                        >
                            <div className="flex items-start gap-2 mb-4">
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-gray-700 font-medium">{session.date}</p>
                                <div className="flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-gray-700 font-medium">{session.time}</p>
                            </div>

                            <h3 className="text-xl font-bold text-blue-800 mb-3">{session.title}</h3>

                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="inline-block bg-gray-200 px-3 py-1 text-sm rounded-md">
                                    {session.type}
                                </span>
                                <span className={`inline-block px-3 py-1 text-sm rounded-md ${session.category.includes('LEADER')
                                    ? 'bg-amber-100 text-amber-800'
                                    : session.category.includes('CSM')
                                        ? 'bg-purple-100 text-purple-800'
                                        : 'bg-blue-100 text-blue-800'
                                    }`}>
                                    {session.category}
                                </span>
                            </div>

                            <p className="text-gray-700">{session.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#programme-complet"
                        className="inline-flex items-center bg-blue-800 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-900 transition-colors"
                    >
                        Voir le programme complet
                        <ChevronRightIcon className="h-5 w-5 ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
} 