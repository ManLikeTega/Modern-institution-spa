/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { galleryData } from "../data/gallery_data";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import MotionElement from "../components/MotionElement";
import Badge from "../components/Badge";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);

  const openLightbox = (albumIndex, imageIndex) => {
    setCurrentAlbumIndex(albumIndex);
    setSelectedImage(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentAlbum = galleryData[currentAlbumIndex];
    if (direction === "next") {
      setSelectedImage((prev) => (prev + 1) % currentAlbum.images.length);
    } else {
      setSelectedImage(
        (prev) =>
          (prev - 1 + currentAlbum.images.length) % currentAlbum.images.length
      );
    }
  };

  return (
    <section className="section bg-white">
      <div className=" px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge Icon={ImageIcon} className="bg-red-100 text-red-700">
            Our Gallery
          </Badge>

          <MotionElement delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Life at <span className="text-red-700">Aptech Fowobi</span>
            </h2>
          </MotionElement>

          <MotionElement delay={0.4}>
            <p>
              Explore our students, events, and the vibrant learning environment
              that makes Aptech Ajah special.
            </p>
          </MotionElement>
        </div>

        {/* Gallery Sections */}
        <div className="space-y-20">
          {galleryData.map((album, albumIndex) => (
            <MotionElement
              key={albumIndex}
              delay={albumIndex * 0.1}
              className="space-y-8"
            >
              {/* Album Header */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {album.title}
                </h3>
                {album.description && (
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {album.description}
                  </p>
                )}
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {album.images.map((image, imageIndex) => (
                  <div
                    className="group relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onClick={() => openLightbox(albumIndex, imageIndex)}
                  >
                    <img
                      src={image}
                      alt={`${album.title} ${imageIndex + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <ImageIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </MotionElement>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div
              className="relative max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              {galleryData[currentAlbumIndex].images.length > 1 && (
                <>
                  <button
                    onClick={() => navigateImage("prev")}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors z-10"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={() => navigateImage("next")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-red-400 transition-colors z-10"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              {/* Current Image */}
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={galleryData[currentAlbumIndex].images[selectedImage]}
                alt={`${galleryData[currentAlbumIndex].title} ${
                  selectedImage + 1
                }`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
                {selectedImage + 1} /{" "}
                {galleryData[currentAlbumIndex].images.length}
              </div>

              {/* Album Info */}
              <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
                {galleryData[currentAlbumIndex].title}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
