import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import styles from './AdminDashboard.module.scss'

export default function AdminDashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Адмін панель</h1>

      {/* ===== INFO CARD ===== */}
      <div className={styles.infoCard}>
        <p>
          Ви увійшли як: <span className={styles.email}>{user?.email}</span>
        </p>
      </div>

      <button className={styles.logoutBtn} onClick={logout}>
        Вийти
      </button>

      {/* ===== ADMIN SECTIONS ===== */}
      <div className={styles.sections}>
        <div
          className={styles.sectionCard}
          onClick={() => navigate('/admin/trainers')}
        >
          <h3>Тренери</h3>
          <p>Редагування, додавання та видалення тренерів клубу</p>
        </div>

        <div
          className={styles.sectionCard}
          onClick={() => navigate('/admin/memberships')}
        >
          <h3>Абонементи</h3>
          <p>Керування тарифами клубу та їх описами</p>
        </div>

        <div
          className={styles.sectionCard}
          onClick={() => navigate('/admin/bookings')}
        >
          <h3>Бронювання</h3>
          <p>Перегляд і модерування записів клієнтів</p>
        </div>

        <div
          className={styles.sectionCard}
          onClick={() => navigate('/admin/requests')}
        >
          <h3>Запити на консультацію</h3>
          <p>Заявки користувачів з головної сторінки</p>
        </div>
      </div>
    </div>
  )
}
