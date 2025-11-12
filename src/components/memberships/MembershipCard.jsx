import styles from './MembershipCard.module.scss'

export default function MembershipCard({ membership }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{membership.name}</h2>

      <p className={styles.description}>{membership.description}</p>

      <ul className={styles.features}>
        {membership.features?.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
      </ul>

      <div className={styles.priceBlock}>
        <p className={styles.monthPrice}>{membership.priceMonth}$ / місяць</p>
        <p className={styles.yearPrice}>{membership.priceYear}$ / рік</p>
      </div>
    </div>
  )
}
