import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { colors } from '../config/colors'
import { images } from '../config/assets'

const Gallery: React.FC = () => {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const galleryImages = [
    {
      id: 1,
      src: images.image.mecano1,
      alt: t('gallery.images.mechanic_working'),
      category: t('gallery.categories.workshop')
    },
    {
      id: 2,
      src: images.image.mecano3,
      alt: t('gallery.images.transmission_repair'),
      category: t('gallery.categories.transmission')
    },
    {
      id: 3,
      src: images.image.mecano5,
      alt: t('gallery.images.engine_rebuild'),
      category: t('gallery.categories.engine')
    },
    {
      id: 4,
      src: images.image.mecano7,
      alt: t('gallery.images.auto_diagnostic'),
      category: t('gallery.categories.diagnostic')
    },
    {
      id: 5,
      src: images.image.mecano9,
      alt: t('gallery.images.modern_equipment'),
      category: t('gallery.categories.equipment')
    },
    {
      id: 6,
      src: images.image.mecano11,
      alt: t('gallery.images.customer_service'),
      category: t('gallery.categories.service')
    },
    {
      id: 7,
      src: images.image.mecano13,
      alt: t('gallery.images.pro_workshop'),
      category: t('gallery.categories.workshop')
    },
    {
      id: 8,
      src: images.image.mecano15,
      alt: t('gallery.images.specialized_repair'),
      category: t('gallery.categories.repair')
    },
    {
      id: 9,
      src: images.image.mecano17,
      alt: t('gallery.images.expert_mechanic'),
      category: t('gallery.categories.team')
    }
  ]

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 280 : 320
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 280 : 320
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-20 bg-white">
      <style>{`
        .carousel-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            {t('gallery.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('gallery.subtitle')}
          </motion.p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 sm:left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 transition-colors duration-200"
            style={{ color: colors.primary[600] }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-2 sm:right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 transition-colors duration-200"
            style={{ color: colors.primary[600] }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 sm:gap-6 px-6 sm:px-12 py-4 carousel-container"
            style={{ 
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 sm:w-72 md:w-80 lg:w-96 cursor-pointer group"
                style={{ scrollSnapAlign: 'start' }}
                onClick={() => openModal(image.src)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span 
                      className="px-3 py-1 text-xs font-medium text-white rounded-full"
                      style={{ backgroundColor: colors.primary[600] }}
                    >
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage} 
                  alt="Gallery image"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Gallery