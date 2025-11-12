import { Link } from 'react-router-dom'
import { useBooking } from '../../../context/BookingContext'
import styles from './TrainerCard.module.scss'

export default function TrainerCard({ trainer }) {
  const { openBooking } = useBooking()

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={`/src/assets/trainers/${trainer.imageName}`}
          alt={trainer.name}
          className={styles.image}
        />
      </div>

      <h3 className={styles.name}>{trainer.name}</h3>

      <p className={styles.info}>Вік: {trainer.age}</p>
      <p className={styles.info}>Стаж: {trainer.experience} років</p>
      <p className={styles.price}>Вартість: {trainer.price}$</p>

      <div className={styles.buttons}>
        <Link to={`/trainers/${trainer.id}`} className={styles.detailsBtn}>
          Детальніше
        </Link>

        <button
          className={styles.enrollBtn}
          onClick={() => openBooking(trainer)}
        >
          Записатися
        </button>
      </div>
    </div>
  )
}
