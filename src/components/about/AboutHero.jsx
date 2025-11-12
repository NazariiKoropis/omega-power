import styles from '../../pages/About.module.scss'
import heroImg from '../../assets/about/gym1.png'

export default function AboutHero() {
  return (
    <div className={styles.hero}>
      <img src={heroImg} alt="Omega Power Gym" className={styles.heroImage} />

      <div className={styles.heroOverlay}>
        <h1>Про Omega Power</h1>
        <p>Сила. Дисципліна. Результат.</p>
      </div>
    </div>
  )
}
