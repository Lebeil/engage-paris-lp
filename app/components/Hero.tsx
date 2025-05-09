import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="bg-black text-white py-20 md:py-28 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Partie gauche - Texte */}
                    <div className="w-full md:w-1/2 text-center mb-12 md:mb-0 pr-0 md:pr-12">
                        <div className="max-w-md mx-auto">
                            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-white tracking-wide">
                                ENGAGE PARIS
                            </h1>
                            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
                            <p className="text-xl md:text-2xl mb-16">
                                2026 | Maison.A - VERSO Paris
                            </p>
                            <div className="mb-16">
                                <p className="text-xl md:text-2xl mb-5">
                                    Le futur du Customer Success, simplifié pour vous.
                                </p>
                                <p className="text-lg md:text-xl">
                                    Accédez à notre analyse pointue des innovations et meilleures
                                    pratiques, transformées en leviers de croissance clairs.
                                </p>
                            </div>
                            <div>
                                <Link
                                    href="/googlesheet"
                                    className="inline-block bg-white text-black font-bold py-3 px-12 text-lg"
                                >
                                    REJOINDRE LA LISTE D&apos;ATTENTE
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Partie droite - Images */}
                    <div className="w-full md:w-1/2 flex flex-col gap-8">
                        {/* Image du haut */}
                        <div className="w-full h-[280px] md:h-[300px] lg:h-[320px] overflow-hidden rounded-lg">
                            <Image
                                src="/images/hero1.jpg"
                                alt="Engage Paris Conference Panel"
                                width={800}
                                height={450}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Image du bas */}
                        <div className="w-full h-[280px] md:h-[300px] lg:h-[320px] overflow-hidden rounded-lg">
                            <Image
                                src="/images/hero2.jpg"
                                alt="Engage Paris Speaker Presentation"
                                width={800}
                                height={450}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 