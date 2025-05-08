"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';


export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/Screenshot from 2025-05-08 13-47-35.png"
              alt="John Wanyungu Logo"
              width={80}
              height={80}
              className="object-contain py-2"
              priority
            />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-800 hover:text-sky-500 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('highlights')}
              className="text-gray-800 hover:text-sky-500 transition-colors"
            >
              Highlights
            </button>
            <button 
              onClick={() => scrollToSection('vision')}
              className="text-gray-800 hover:text-sky-500 transition-colors"
            >
              Vision
            </button>
            <button 
              onClick={() => scrollToSection('partners')}
              className="text-gray-800 hover:text-sky-500 transition-colors"
            >
              Partners
            </button>
            <button 
              onClick={() => scrollToSection('connect')}
              className="bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition-colors font-medium"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
