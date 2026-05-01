import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left — tagline */}
        <div className={styles.brand}>
          <h2 className={styles.tagline}>
            Hand crafted
            <br />
            by Pakistani
            <br />
            Artisans
          </h2>
        </div>

        {/* Contact */}
        <div className={styles.column}>
          <h4 className={styles.colHeading}>Karachi</h4>
          <ul className={styles.list}>
            <li>loremispm@gmail.com</li>
            <li>+2325248223</li>
            <li>Address: Lorem Ipsum is simply dummy</li>
          </ul>
        </div>

        {/* Menu */}
        <div className={styles.column}>
          <h4 className={styles.colHeading}>Menu</h4>
          <ul className={styles.list}>
            <li>
              <Link href="/" className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className={styles.link}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className={styles.link}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us 1 */}
        <div className={styles.column}>
          <h4 className={styles.colHeading}>Follow Us</h4>
          <ul className={styles.list}>
            <li>
              <Link href="#" className={styles.link}>
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.link}>
                Facebook
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.link}>
                Tiktok
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us 2 */}
        <div className={styles.column}>
          <h4 className={styles.colHeading}>Follow Us</h4>
          <ul className={styles.list}>
            <li>
              <Link href="#" className={styles.link}>
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.link}>
                Facebook
              </Link>
            </li>
            <li>
              <Link href="#" className={styles.link}>
                Tiktok
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
