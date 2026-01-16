import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export default function ImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) {
    return (
      <div className="relative h-[500px] rounded-[40px] overflow-hidden bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-200">
        <p className="text-gray-400 font-medium">Nenhuma imagem disponível</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Imagem Principal */}
      <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-2xl group">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={"Imagem"}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>

        {/* Controles de Navegação */}
        {images.length > 1 && (
          <>
            <Button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity"
              variant="ghost"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </Button>
            <Button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity"
              variant="ghost"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </Button>
          </>
        )}

        {/* Indicadores (Dots) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-3 py-2 bg-black/20 backdrop-blur-md rounded-full">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={w-2 h-2 rounded-full transition-all duration-300 "}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-6 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={
elative h-20 rounded-2xl overflow-hidden transition-all duration-300 "}
            >
              <img
                src={img}
                alt={Thumbnail "}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

