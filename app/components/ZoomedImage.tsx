"use client";

import { useState } from "react";
import Image from "next/image";

interface ZoomedImageProps {
  src: string;
  alt: string;
}

export default function ZoomedImage({ src, alt }: ZoomedImageProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();

    // Calculate relative position (0-1)
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setPosition({ x, y });
  };

  return (
    <div className="relative w-full h-full">
      {/* Main image container */}
      <div
        className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center transition-transform duration-200"
          priority
        />
      </div>

      {/* Zoomed view */}
      {showZoom && (
        <div
          className="hidden lg:block absolute top-0 left-[105%] w-[500px] h-[500px] rounded-lg overflow-hidden border-2 border-gray-200 bg-white shadow-xl"
          style={{
            opacity: showZoom ? 1 : 0,
          }}
        >
          <div
            className="absolute w-[200%] h-[200%]"
            style={{
              transform: `translate(${-position.x * 100}%, ${
                -position.y * 100
              }%)`,
            }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="200vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
