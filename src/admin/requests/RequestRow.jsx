import styles from '../AdminTable.module.scss'

export default function RequestRow({ request, onDelete }) {
  return (
    <tr>
      <td>{request.name}</td>
      <td>{request.phone}</td>
      <td>{request.message}</td>
      <td>{new Date(request.date).toLocaleString('uk-UA')}</td>
      <td className={styles.actions}>
        <button className={styles.delete} onClick={onDelete}>
          Видалити
        </button>
      </td>
    </tr>
  )
}
