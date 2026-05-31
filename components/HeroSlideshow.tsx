'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    image: '/assets/image1.png',
    title: <>ROYAL STAR<br />CRUSHER LLC</>,
    desc: 'ROYAL STAR CRUSHER LLC, formed in the year 2016, is a well-established and licensed Quarry mining and crusher unit at Fujairah in UAE.',
  },
  {
    image: '/assets/image2.png',
    title: <>QUALITY SUPPLIED<br />IN QUANTITIES</>,
    desc: 'ROYAL STAR CRUSHER LLC, formed in the year 2016, is a well-established and licensed Quarry mining and crusher unit at Fujairah in UAE.',
  },
];

export default function HeroSlideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-end p-0 before:hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === currentImage ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover object-center"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {slides.map((slide, i) => (
        <div
          key={slide.image + '-content'}
          className="absolute inset-0 z-10 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === currentImage ? 1 : 0 }}
        >
          <div className="absolute bottom-16 left-4 max-w-[calc(100%-2rem)] sm:bottom-24 sm:left-8 sm:max-w-sm md:bottom-40 md:left-16 md:max-w-lg lg:bottom-95 lg:left-90 lg:max-w-180">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-tight mb-4 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-white text-sm sm:text-base leading-relaxed drop-shadow-md">
              {slide.desc}
            </p>
            <a href="#about" className="inline-block mt-6 px-8 py-3 bg-red-700 text-white font-bold uppercase tracking-wide border-2 border-red-700 hover:bg-white hover:text-red-700 transition-colors duration-300">
              About Us
            </a>
          </div>
        </div>
      ))}

      <div className="absolute inset-0 z-5 bg-linear-to-r from-black/70 via-black/30 to-transparent pointer-events-none" />
    </section>
  );
}
