import Link from "next/link";

export default function SpeakerCTA() {
    return (
        <section className="py-16 bg-black text-white">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-lg font-semibold mb-2">Vous êtes <span className="underline">conférencier</span>, <span className="underline">leader d&apos;opinion</span> ou <span className="underline">influenceur</span> ?</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Engage Paris vous ouvre sa tribune annuelle. Venez partager votre expertise, connecter avec un public engagé et contribuer à un événement unique.
                    </h2>
                    <p className="mb-8 text-lg opacity-90">
                        Vous avez une expertise à partager et l&apos;envie d&apos;inspirer ? Faites-vous entendre sur notre scène.
                    </p>
                    <Link href="#proposer-conference" className="btn bg-white text-primary hover:bg-opacity-90">
                        Je propose ma candidature
                    </Link>
                </div>
            </div>
        </section>
    );
} 