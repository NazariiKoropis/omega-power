import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllTrainers } from '../firebase/database'
import { useBooking } from '../context/BookingContext'
import styles from './TrainerDetails.module.scss'

export default function TrainerDetails() {
  const { id } = useParams()
  const { openBooking } = useBooking()
  const [trainer, setTrainer] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isPortrait, setIsPortrait] = useState(false) // 🧩 новий стан

  // ✅ Завантаження тренера
  useEffect(() => {
    async function loadTrainer() {
      const data = await getAllTrainers()
      if (data && data[id]) setTrainer({ id, ...data[id] })
      setLoading(false)
    }
    loadTrainer()
  }, [id])

  // ✅ Перевірка пропорцій картинки
  const handleImageLoad = (e) => {
    const img = e.target
    setIsPortrait(img.naturalHeight > img.naturalWidth)
  }

  if (loading) return <p className={styles.loading}>Завантаження...</p>

  if (!trainer) {
    return <h2 className={styles.error}>Тренера не знайдено</h2>
  }

  return (
    <div
      className={`${styles.wrapper} ${
        isPortrait ? styles.portrait : styles.landscape
      }`}
    >
      {/* ---------- HERO ---------- */}
      <div className={styles.header}>
        <img
          src={`/src/assets/trainers/${trainer.imageName}`}
          alt={trainer.name}
          className={styles.heroImage}
          onLoad={handleImageLoad}
        />

        <div className={styles.overlay}>
          <h1>{trainer.name}</h1>
          <p className={styles.special}>{trainer.specialization}</p>
        </div>
      </div>

      {/* ---------- CONTENT ---------- */}
      <div className={styles.content}>
        {/* LEFT BLOCK */}
        <div className={styles.left}>
          <h2>Про тренера</h2>

          <ul className={styles.infoList}>
            <li>
              <strong>Вік:</strong> {trainer.age}
            </li>
            <li>
              <strong>Стаж:</strong> {trainer.experience} років
            </li>
            <li>
              <strong>Стать:</strong>{' '}
              {trainer.gender === 'Male' ? 'Чоловік' : 'Жінка'}
            </li>
            <li>
              <strong>Вартість тренування:</strong> {trainer.price}$
            </li>
          </ul>

          <p className={styles.quote}>“{trainer.quote}”</p>
        </div>

        {/* RIGHT BLOCK */}
        <div className={styles.right}>
          <h2>Напрямки роботи</h2>
          <ul className={styles.skills}>
            {trainer.skills?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <button
            className={styles.enrollBtn}
            onClick={() => openBooking(trainer)}
          >
            Записатися на тренування за {trainer.price}$
          </button>
        </div>
      </div>
    </div>
  )
}
