import styles from './BookingPopup.module.scss'

export default function BookingPopup({ trainer, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Запис успішний ✅')
    onClose()
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.popup}>
        <h2>Запис до тренера</h2>
        <h3>{trainer.name}</h3>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" placeholder="Ваше ім’я" required />
          <input type="tel" placeholder="Номер телефону" required />
          <input type="date" required />
          <input type="time" required />

          <button type="submit" className={styles.submitBtn}>
            Підтвердити запис
          </button>
        </form>

        <button className={styles.closeBtn} onClick={onClose}>
          Скасувати
        </button>
      </div>
    </div>
  )
}
