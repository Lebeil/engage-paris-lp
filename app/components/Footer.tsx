import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Image
                            src="/images/logo-white.png"
                            alt="Engage Paris"
                            width={150}
                            height={40}
                            className="h-10 w-auto mb-4"
                        />
                        <p className="mb-4 max-w-sm">
                            La conférence annuelle dédiée au Customer Success, où les professionnels se réunissent pour partager, apprendre et se connecter.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-secondary">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M22 5.92l-2.49 2.49c-.88-.85-1.62-1.67-3.39-1.92C12.1 6 10.58 6.63 9.2 7.86c-1.38 1.23-2.1 2.75-2.31 4.58-.13.95.22 2.23.95 3.06-.2-.13-.35-.29-.48-.45a4.36 4.36 0 0 1-1.03-3.06c.21-1.74.94-3.26 2.32-4.49C9.94 6.37 11.36 5.74 13 5.49c1.42-.2 2.84.11 4.05.99.89.64 1.56 1.49 2 2.48.22-.53.42-.86.49-1.07.06-.18.09-.38.09-.59 0-.52-.18-.99-.54-1.38a4.67 4.67 0 0 0-1.2-.95 6.93 6.93 0 0 0-4.32-.51c-2.04.34-3.7 1.21-5 2.62A8.35 8.35 0 0 0 5.49 13c0 1.5.4 2.82 1.21 3.96.81 1.14 1.9 1.98 3.28 2.52.79.29 1.43.31 1.93.06s.8-.75.9-1.47c.13-1.1-.06-2.15-.57-3.15a4.74 4.74 0 0 0-2.9-2.05c.2-.07.43-.11.67-.13C14.59 12.23 17.7 15.5 17.7 19.46c0 .19-.02.37-.05.54h3.36c.02-.18.04-.36.04-.54 0-6.42-5.25-11.63-11.67-11.63-6.42 0-11.67 5.21-11.67 11.63 0 .18.01.36.03.54H2c-.02-.18-.03-.36-.03-.54 0-2.94.98-5.64 2.62-7.83a13.14 13.14 0 0 1 6.95-4.62 13.1 13.1 0 0 1 8.73.86A10.5 10.5 0 0 1 22 5.92z" />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-secondary">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-secondary">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M9 0a9 9 0 00-3 17.45c.47.07.63-.2.63-.46V15.5c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.63.38A9 9 0 009 0z" />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-secondary">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
                        <Link href="/mentions-legales" className="hover:text-secondary mr-4">Mentions légales</Link>
                        <Link href="/confidentialite" className="hover:text-secondary">Politique de confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
} 