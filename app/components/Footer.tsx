import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Image
                            src="/images/logo.png"
                            alt="Engage Paris"
                            width={150}
                            height={40}
                            className="h-10 w-auto mb-4"
                        />
                        <p className="mb-4 max-w-sm">
                            La conférence annuelle dédiée au Customer Success, où les professionnels se réunissent pour partager, apprendre et se connecter.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/engage-paris/" className="text-white hover:text-secondary">
                                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/@EngageParis" className="text-white hover:text-secondary">
                                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
                        <ul className="space-y-2">
                            <li><Link href="#programme" className="hover:text-secondary">Programme</Link></li>
                            <li><Link href="#speakers" className="hover:text-secondary">Speakers</Link></li>
                            <li><Link href="#experience" className="hover:text-secondary">L&apos;expérience Engage</Link></li>
                            <li><Link href="#proposer-conference" className="hover:text-secondary">Proposer une conférence</Link></li>
                            <li><Link href="#faq" className="hover:text-secondary">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="mailto:contact@engageparis.com" className="hover:text-secondary">
                                    contact@engageparis.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+33123456789" className="hover:text-secondary">
                                    +33 1 23 45 67 89
                                </a>
                            </li>
                            <li className="pt-2">
                                Maison A. VESCO Paris<br />
                                123 Avenue des Champs-Élysées<br />
                                75008 Paris, France
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center md:text-left md:flex justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} Engage Paris. Tous droits réservés.</p>
                    <div className="mt-4 md:mt-0">
                        <Link href="https://www.engage.paris/" className="hover:text-secondary mr-4">Mentions légales</Link>
                        <Link href="https://www.engage.paris/" className="hover:text-secondary">Politique de confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
} 