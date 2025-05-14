"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4">
      <div className="container flex justify-between items-center">
        <Link href="https://engage-paris.vercel.app/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Engage Paris"
            width={300}
            height={120}
            className="h-16 w-auto"
          />
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#programme" className="hover:text-secondary">
            Programme
          </Link>
          <Link href="#speakers" className="hover:text-secondary">
            Speakers
          </Link>
          <Link href="#experience" className="hover:text-secondary">
            Expérience
          </Link>
          <Link href="#faq" className="hover:text-secondary">
            FAQ
          </Link>
          <Link href="#register" className="btn btn-primary ml-4">
            Billetterie complet 2025
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-secondary focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          {mobileMenuOpen ? (
            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 z-10 bg-black py-2">
          <div className="container flex flex-col space-y-4 py-4">
            <Link
              href="#programme"
              className="px-4 py-2 hover:text-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Programme
            </Link>
            <Link
              href="#speakers"
              className="px-4 py-2 hover:text-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Speakers
            </Link>
            <Link
              href="#experience"
              className="px-4 py-2 hover:text-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Expérience
            </Link>
            <Link
              href="#faq"
              className="px-4 py-2 hover:text-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="https://www.engage.paris/registration/676ab84b9b2a8f025d9f474d?force_new_registration=true"
              className="btn btn-primary mx-4 mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              S&apos;inscrire à l&apos;événement
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 