import styles from '../AdminTable.module.scss'

export default function BookingRow({ booking, onDelete }) {
  return (
    <tr>
      <td>{booking.trainer}</td>
      <td>{booking.userName}</td>
      <td>{booking.date}</td>
      <td>{booking.time}</td>
      <td>{booking.phone}</td>

      <td className={styles.actions}>
        <button className={styles.delete} onClick={() => onDelete(booking.id)}>
          Видалити
        </button>
      </td>
    </tr>
  )
}
