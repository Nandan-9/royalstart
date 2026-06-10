"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";

export default function MobileCarousel({
  children,
  interval = 3500,
}: {
  children: React.ReactNode;
  interval?: number;
}) {
  const slides = React.Children.toArray(children);
  const count = slides.length;
  const [idx, setIdx] = useState(0);
  const startX = useRef(0);

  const next = () => setIdx(i => (i + 1) % count);
  const prev = () => setIdx(i => (i - 1 + count) % count);

  useEffect(() => {
    if (count <= 1) return;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
  }, [count, interval]);

  return (
    <div
      className="relative overflow-hidden"
      onTouchStart={e => { startX.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        const d = startX.current - e.changedTouches[0].clientX;
        if (d > 50) next();
        else if (d < -50) prev();
      }}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full shrink-0 px-3">
            {slide}
          </div>
        ))}
      </div>

      {/* Dot / pill indicators */}
      <div className="flex justify-center items-center gap-2 mt-5 pb-1">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === idx ? "20px" : "8px",
              height: "8px",
              borderRadius: "4px",
              backgroundColor: i === idx ? "#e53935" : "#d1d5db",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
