
import { motion } from 'motion/react'
import { ArrowUpRight, MapPin } from 'lucide-react'

export default function About() {
  const categories = [
    'Fashion',
    'Beauty',
    'Commercial',
    'Editorial',
    'Runway',
    'Lifestyle',
  ]

  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img
          src="/images-optimized/beauty/3Y3A8556-Edit22.webp"
          alt="Michelle Anorchie modelling portrait"
        />
      </div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        }}
    >
        <p className="section-label">GET TO KNOW ME</p>

        <h2>
          More than
          <br />
          <span>a photograph.</span>
        </h2>

        <p className="about-intro">
          I'm Michelle Anorchie, a model passionate about fashion,
          beauty and creative expression. I enjoy bringing ideas
          to life through movement, personality and visual storytelling.
        </p>

        <p className="about-intro">
          I'm open to creative collaborations and opportunities
          across different areas of the modelling industry.
        </p>

        <div className="about-location">
          <MapPin size={17} />
          <span>BASED IN ACCRA, GHANA</span>
        </div>

        <div className="about-categories">
          <p className="category-heading">AREAS OF INTEREST</p>

          <div className="category-list">
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        </div>

        <a href="#contact" className="about-link">
          LET'S WORK TOGETHER <ArrowUpRight size={17} />
        </a>
      </motion.div>
    </section>
  )
}
