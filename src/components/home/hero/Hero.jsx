import style from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={style.heroSection}>
      <div className={style.heroContent}>
        <h1 className={style.heroTitle}>Ласкаво просимо до Omega Power</h1>
        <p className={style.heroSubtitle}>Твоя трансформація починається тут!</p>
      </div>
    </section>
  )
}
