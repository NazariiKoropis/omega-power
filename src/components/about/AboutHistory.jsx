import styles from '../../pages/About.module.scss'
import img1 from '../../assets/about/gym1.png'
import img2 from '../../assets/about/gym2.png'
import img3 from '../../assets/about/gym3.png'

export default function AboutHistory() {
  return (
    <section className={styles.history}>
      <h2>Наша історія</h2>

      <p>
        Фітнес-клуб <strong>Omega Power</strong> з’явився у 2018 році як
        маленький зал, створений командою тренерів-ентузіастів. Ми починали із
        залізом, мрією і першими 20 клієнтами, які повірили в нас.
      </p>

      <p>
        За декілька років клуб виріс у сучасний спортивний центр із окремими
        зонами силових тренувань, кардіо, функціоналу, йоги та боксу.
      </p>

      <p>
        Сьогодні Omega Power — це понад 700 активних клієнтів, 8 тренерів, 45+
        групових занять щотижня та одна місія: робити людей сильнішими.
      </p>

      <div className={styles.gallery}>
        <img src={img1} alt="Gym" />
        <img src={img2} alt="Gym" />
        <img src={img3} alt="Gym" />
      </div>
    </section>
  )
}
