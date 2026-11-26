
import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-image"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
       <img
  src="/images-optimized/beauty/3Y3A8551-Edit-2-2.webp"
  alt="Michelle Anorchie fashion portrait"
/>
      </motion.div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          MODEL • FASHION • EDITORIAL
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }}
        >
          MICHELLE <span>ANORCHIE</span>
        </motion.h1>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          <p>
            Bringing stories to life
            <br />
            through the art of modelling.
          </p>

          <a href="#gallery" className="explore-link">
            EXPLORE MY WORK <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>
      
    </section>
  )
}
