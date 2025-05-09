"use client";

import Image from "next/image";

const images = [
    {
        src: "/images/gallery1.jpg",
        alt: "Audience à l'événement Engage",
    },
    {
        src: "/images/gallery2.jpg",
        alt: "Présentation lors de l'événement",
    },
    {
        src: "/images/gallery3.jpg",
        alt: "Sessions de networking",
    },
    {
        src: "/images/gallery4.jpg",
        alt: "Discussions entre participants",
    },
];

export default function Gallery() {
    return (
        <section className="py-16 bg-black" id="experience">
            <div className="container">
                <h2 className="section-title text-center mb-12">
                    L&apos;expérience Engage en image
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-md h-64 md:h-80">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 