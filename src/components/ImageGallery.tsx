import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  title?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder images from free sources
  const placeholderImages = {
    roofRepair: 'https://images.unsplash.com/photo-1632324342932-15df82d80f87?w=800&auto=format&fit=crop',
    newRoof: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
    roofInspection: 'https://images.unsplash.com/photo-1635321593217-40050ad13c74?w=800&auto=format&fit=crop',
    commercialRoof: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop',
    hailDamage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop',
    teamWork: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop',
  };

  const defaultImages = images.length > 0 ? images : [
    { src: placeholderImages.newRoof, alt: 'New roof installation', caption: 'Complete roof replacement in Cypress' },
    { src: placeholderImages.roofRepair, alt: 'Roof repair work', caption: 'Storm damage repair' },
    { src: placeholderImages.roofInspection, alt: 'Roof inspection', caption: 'Professional inspection' },
    { src: placeholderImages.commercialRoof, alt: 'Commercial roofing', caption: 'Commercial flat roof' },
    { src: placeholderImages.hailDamage, alt: 'Hail damage assessment', caption: 'Insurance claim assistance' },
    { src: placeholderImages.teamWork, alt: 'Roofing team at work', caption: 'Our experienced crew' },
  ];

  return (
    <div className="py-8">
      {title && <h3 className="text-2xl font-bold text-center mb-6">{title}</h3>}
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {defaultImages.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-semibold">{image.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : defaultImages.length - 1)}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <div className="max-w-4xl max-h-[80vh]">
            <img
              src={defaultImages[selectedImage].src}
              alt={defaultImages[selectedImage].alt}
              className="w-full h-full object-contain"
            />
            {defaultImages[selectedImage].caption && (
              <p className="text-white text-center mt-4">{defaultImages[selectedImage].caption}</p>
            )}
          </div>
          
          <button
            onClick={() => setSelectedImage(selectedImage < defaultImages.length - 1 ? selectedImage + 1 : 0)}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;