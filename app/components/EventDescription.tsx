"use client";

export default function EventDescription() {
    return (
        <section className="py-16 bg-black">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="section-title">
                        La conférence annuelle où les passionnés du <span className="text-blue-500">Customer Success</span> se rencontrent et apprennent
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-500 ease-in-out hover:shadow-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-10 transform scale-90 group-hover:scale-100 transition-all duration-700 rounded-lg"></div>
                        <div className="relative z-10">
                            <div className="text-blue-500 mb-6 mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 transition-all duration-500 ease-in-out group-hover:bg-blue-100 group-hover:text-blue-600 group-hover:shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-blue-700">Apprenez des leaders d&apos;opinion</h3>
                            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                Écoutez les conférences inspirantes des meilleurs leaders du Customer Success et découvrez les dernières tendances.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-500 ease-in-out hover:shadow-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute inset-0 bg-purple-50 opacity-0 group-hover:opacity-10 transform scale-90 group-hover:scale-100 transition-all duration-700 rounded-lg"></div>
                        <div className="relative z-10">
                            <div className="text-purple-500 mb-6 mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-purple-50 transition-all duration-500 ease-in-out group-hover:bg-purple-100 group-hover:text-purple-600 group-hover:shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-purple-700">Partagez vos expériences</h3>
                            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                Participez aux tables rondes et discussions pour partager vos défis, succès et apprentissages avec vos pairs.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-500 ease-in-out hover:shadow-xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-10 transform scale-90 group-hover:scale-100 transition-all duration-700 rounded-lg"></div>
                        <div className="relative z-10">
                            <div className="text-green-500 mb-6 mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-50 transition-all duration-500 ease-in-out group-hover:bg-green-100 group-hover:text-green-600 group-hover:shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-green-700">Networking de qualité</h3>
                            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                Rencontrez d&apos;autres professionnels du Customer Success lors des pauses café, déjeuners et l&apos;afterwork.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes pulse-subtle {
                    0%, 100% { opacity: 0.05; }
                    50% { opacity: 0.15; }
                }
                .group:hover .animate-pulse-subtle {
                    animation: pulse-subtle 3s infinite;
                }
            `}</style>
        </section>
    );
} 