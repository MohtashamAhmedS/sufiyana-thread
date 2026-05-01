import Image from 'next/image'
import styles from './home.module.css'

export default function Home() {
  return (
    <section className={styles.section}>
      {/* Background banner */}
      <Image
        src="/homeBg.png"
        alt="background"
        fill
        className={styles.bg}
        priority
      />

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content wrapper */}
      <div className={styles.container}>
        {/* Left — text content */}
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Home Made Creation
            <br />
            of Pakistani Artisan
          </h1>
          <p className={styles.tagline}>
            Thoughtfully handcrafted by Pakistani artisans, blending tradition
            with timeless elegance
          </p>
          <div className={styles.buttons}>
            <button className={styles.btnPrimary}>Shop Now</button>
            <button className={styles.btnSecondary}>Explore Collection</button>
          </div>
        </div>

        {/* Right — model image */}
        <div className={styles.modelWrap}>
          <Image
            src="/models.png"
            alt="model"
            fill
            className={styles.model}
            priority
          />
        </div>
      </div>
    </section>
  )
}
