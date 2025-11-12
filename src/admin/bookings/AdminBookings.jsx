import { useState, useEffect } from 'react'
import styles from '../AdminTable.module.scss'
import BookingRow from './BookingRow'

// !!! Тут ти будеш підключати Firebase Realtime Database
// import { db } from '../../firebase/firebaseConfig'
// import { ref, onValue, remove } from "firebase/database"

export default function AdminBookings() {
  const [bookings, setBookings] = useState([])

  // Заглушка поки без Firebase
  useEffect(() => {
    setBookings([
      {
        id: 'b1',
        trainer: 'Тарас Карпопля',
        userName: 'Іван',
        date: '2025-02-15',
        time: '15:00',
        phone: '+380991234567',
      },
      {
        id: 'b2',
        trainer: 'Олена Силова',
        userName: 'Марія',
        date: '2025-02-18',
        time: '11:30',
        phone: '+380501112233',
      },
    ])
  }, [])

  const deleteBooking = (id) => {
    setBookings(bookings.filter((b) => b.id !== id))
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Бронювання</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Тренер</th>
            <th>Клієнт</th>
            <th>Дата</th>
            <th>Час</th>
            <th>Телефон</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {bookings.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>
                Немає бронювань
              </td>
            </tr>
          ) : (
            bookings.map((b) => (
              <BookingRow key={b.id} booking={b} onDelete={deleteBooking} />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
