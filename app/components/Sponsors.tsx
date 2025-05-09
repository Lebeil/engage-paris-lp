import Image from "next/image";

const sponsors = [
    { name: "Gainsight", logo: "/images/gainsight.png" },
    { name: "Planhat", logo: "/images/planhat.png" },
    { name: "Successchain", logo: "/images/successchain.png" },
    { name: "RocketSchool", logo: "/images/rocketschool.png" },
    { name: "Meltingspot", logo: "/images/meltingspot.png" },
    { name: "Dust", logo: "/images/dust.png" },
    { name: "KareSchool", logo: "/images/kareschool.png" },
];

export default function Sponsors() {
    return (
        <section className="relative py-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-blue-500 to-purple-500 opacity-70"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Ils nous font confiance</h2>
                    <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
                    <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">Découvrez les entreprises innovantes qui soutiennent notre mission</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[280px] p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center hover:scale-105 transform"
                        >
                            <Image
                                src={sponsor.logo}
                                alt={`${sponsor.name} logo`}
                                width={600}
                                height={300}
                                className="w-full object-contain h-32 md:h-40"
                                priority
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-6">
                    <button className="px-5 py-1.5 text-sm font-medium text-blue-600 border border-blue-500 rounded-full hover:bg-blue-50 transition-colors duration-300">
                        Devenir sponsor
                    </button>
                </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-100 rounded-full opacity-40"></div>
        </section>
    );
} 