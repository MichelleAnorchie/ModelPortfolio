
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        BOOKINGS & COLLABORATIONS
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Let's create
        <br />
        <span>something beautiful.</span>
      </motion.h2>

      <p className="contact-description">
        Available for modelling opportunities, creative projects,
        brand campaigns and collaborations.
      </p>

      <div className="contact-actions">
  <a
    href="mailto:michelleanorchie1@gmail.com"
    className="contact-link"
  >
    EMAIL FOR BOOKINGS <ArrowUpRight size={18} />
  </a>

  <a
    href="https://www.instagram.com/mimy_michelle/"
    target="_blank"
    rel="noreferrer"
    className="contact-social"
  >
    INSTAGRAM @MIMY_MICHELLE
    <ArrowUpRight size={16} />
  </a>
</div>

      <p className="contact-location">
        ACCRA, GHANA · AVAILABLE FOR COLLABORATIONS
      </p>
    </section>
  )
}
