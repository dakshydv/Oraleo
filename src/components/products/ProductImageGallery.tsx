"use client"
import React, { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="relative">
      <div className="space-y-6 relative z-20">
        <div 
          className="aspect-[3/4] bg-oraleo-200 overflow-hidden rounded-sm relative cursor-crosshair"
          onMouseEnter={() => setShowZoom(true)}
          onMouseLeave={() => setShowZoom(false)}
          onMouseMove={handleMouseMove}
        >
          <img 
            src={images[selectedImage]} 
            alt={productName} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <button 
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`aspect-[3/4] bg-oraleo-200 overflow-hidden rounded-sm transition-all ${selectedImage === idx ? 'ring-2 ring-nature-dark ring-offset-2' : 'opacity-70 hover:opacity-100'}`}
            >
              <img 
                src={img} 
                alt={`${productName} view ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Zoom Window */}
      {showZoom && (
        <div 
          className="hidden lg:block absolute left-[105%] top-0 w-[100%] h-[600px] z-50 overflow-hidden border border-oraleo-200 shadow-xl bg-white"
          style={{
            backgroundImage: `url(${images[selectedImage]})`,
            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
            backgroundSize: '250%'
          }}
        >
        </div>
      )}
    </div>
  );
}
