import './PortfolioGallery.css'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'

type Category = 'Beauty' | 'Full-body' | 'Digitals'

type Photo = {
  src: string
  category: Category
}

const photos: Photo[] = [
  // Beauty portraits
  ...[
    '3Y3A8548-Edit.JPG',
    '3Y3A8551-Edit-2-2.JPG',
    '3Y3A8556-Edit22.JPG',
    '3Y3A8536-Edit-2.JPG',
    '3Y3A8538-Edit.JPG',
    '3Y3A8557-Edit-2.jpg',
    '3Y3A8527-Edit.JPG',
    '3Y3A8532-Edit.JPG',
    '3Y3A8535-Edit-2.JPG',
    '3Y3A8571-Edit.JPG',
    '3Y3A8581-Edit.JPG',
    '3Y3A8573-Edit.JPG',
  ].map((file) => ({
    src: `/images/beauty/${file}`,
    category: 'Beauty' as Category,
  })),

  // Full-body photographs
  {
    src: '/images/full-body/KAY_9647.jpg',
    category: 'Full-body',
  },

  // Model digitals
  ...[
    'KAY_9648.jpg',
    'KAY_9653.jpg',
    'KAY_9655.jpg',
    'KAY_9647.jpg',
    'KAY_9649.jpg',
  ].map((file) => ({
    src: `/images/digitals/${file}`,
    category: 'Digitals' as Category,
  })),
]

const categories: Array<'All' | Category> = [
  'All',
  'Beauty',
  'Full-body',
  'Digitals',
]

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<
    'All' | Category
  >('All')

  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  const filteredPhotos = photos.filter(
    (photo) =>
      activeCategory === 'All' ||
      photo.category === activeCategory,
  )

  const closeViewer = () => setSelectedPhoto(null)

  const showNext = () => {
    if (selectedPhoto === null) return

    setSelectedPhoto((selectedPhoto + 1) % filteredPhotos.length)
  }

  const showPrevious = () => {
    if (selectedPhoto === null) return

    setSelectedPhoto(
      (selectedPhoto - 1 + filteredPhotos.length) %
        filteredPhotos.length,
    )
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeViewer()
      if (event.key === 'ArrowRight') showNext()
      if (event.key === 'ArrowLeft') showPrevious()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  return (
    <section className="portfolio-gallery" id="portfolio">
      <div className="gallery-heading">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          THE COLLECTION — 2026
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My <span>Portfolio.</span>
        </motion.h2>

        <p>
          A visual collection of my expressions, style and personality.
        </p>
      </div>

      {/* Category filters */}
      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category ? 'filter active' : 'filter'
            }
            onClick={() => {
              setActiveCategory(category)
              setSelectedPhoto(null)
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Photography grid */}
      <motion.div layout className="gallery-grid">
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo, index) => (
            <motion.button
              layout
              key={photo.src}
              className="gallery-item"
              onClick={() => setSelectedPhoto(index)}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.035 }}
              whileHover={{ y: -5 }}
              aria-label={`View ${photo.category} photograph ${index + 1}`}
            >
              <img src={photo.src} alt={`${photo.category} modelling photograph`} />

              <span className="gallery-item-overlay">
                VIEW IMAGE
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Full-screen image viewer */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeViewer}
          >
            <button
              className="lightbox-close"
              onClick={closeViewer}
              aria-label="Close image viewer"
            >
              <X size={26} />
            </button>

            <button
              className="lightbox-arrow previous"
              onClick={(event) => {
                event.stopPropagation()
                showPrevious()
              }}
              aria-label="Previous photograph"
            >
              <ArrowLeft size={24} />
            </button>

            <motion.img
              key={filteredPhotos[selectedPhoto].src}
              src={filteredPhotos[selectedPhoto].src}
              alt="Selected modelling photograph"
              className="lightbox-image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              onClick={(event) => event.stopPropagation()}
            />

            <button
              className="lightbox-arrow next"
              onClick={(event) => {
                event.stopPropagation()
                showNext()
              }}
              aria-label="Next photograph"
            >
              <ArrowRight size={24} />
            </button>

            <p className="lightbox-counter">
              {selectedPhoto + 1} / {filteredPhotos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
