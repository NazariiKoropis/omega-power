import style from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={style.heroSection}>
      <div className={style.heroContent}>
        <h1 className={style.heroTitle}>Welcome to Omega Power</h1>
        <p className={style.heroSubtitle}>
          Your ultimate fitness transformation starts here!
        </p>
      </div>
    </section>
  )
}
