"use client";

import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

type Speaker = {
    id: number;
    name: string;
    title: string;
    company: string;
    image: string;
    topic: string;
    description: string;
};

const speakers: Speaker[] = [
    {
        id: 1,
        name: "Sue Nabeih Moore",
        title: "Customer Experience Manager",
        company: "Acme",
        image: "/images/speaker1.jpg",
        topic: "L'évolution de l'expérience client",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat mi quis dolor consequat, eget dictum libero molestie."
    },
    {
        id: 2,
        name: "Sébastien Brun",
        title: "Director CX",
        company: "TechProgress",
        image: "/images/speaker2.jpg",
        topic: "Data points et stratégies du CX",
        description: "Nunc volutpat leo quis porta aliquam. Cras mollis dictum ex, quis ullamcorper ex accumsan ultrices."
    },
    {
        id: 3,
        name: "Bérénice Carropo",
        title: "Head of Customer Success",
        company: "Nexus",
        image: "/images/speaker3.jpg",
        topic: "Comment créer le succès du client",
        description: "Sed lacinia, eros in gravida tincidunt, lacus magna cursus sem, vel bibendum ligula justo consequat felis."
    },
    {
        id: 4,
        name: "Elliot Ghassia",
        title: "CEO",
        company: "CXPower",
        image: "/images/speaker4.jpg",
        topic: "Comment une entreprise réussit avec le Customer Success",
        description: "Morbi porta dui vulputate purus auctor cursus. Donec hendrerit felis vestibulum quam rhoncus tempus."
    }
];

export default function Speakers() {
    return (
        <section className="py-16 bg-black" id="speakers">
            <div className="container">
                <h2 className="section-title text-center mb-12 text-white">
                    Les speakers de 2025
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {speakers.map((speaker) => (
                        <div key={speaker.id} className="text-center">
                            <div className="bg-gray-100 rounded-full p-1 mb-4 aspect-square overflow-hidden mx-auto max-w-[220px]">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    width={300}
                                    height={300}
                                    className="rounded-full object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                            <p className="text-gray-400 mb-3">{speaker.title} | {speaker.company}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <a
                        href="https://www.engage.paris/conferenciers"
                        className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        aria-label="Voir tous les speakers"
                    >
                        <span>Découvrir tous les speakers</span>
                        <ChevronRightIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
} 