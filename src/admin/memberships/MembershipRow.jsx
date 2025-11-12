import styles from '../AdminTable.module.scss'

export default function MembershipRow({ membership, onEdit, onDelete }) {
  return (
    <tr>
      <td>{membership.name}</td>
      <td>{membership.priceMonth}$</td>
      <td>{membership.priceYear}$</td>
      <td>{membership.description}</td>

      <td className={styles.actions}>
        <button className={styles.edit} onClick={() => onEdit(membership)}>
          Редагувати
        </button>

        <button
          className={styles.delete}
          onClick={() => {
            if (confirm('Точно видалити абонемент?')) {
              onDelete(membership.id)
            }
          }}
        >
          Видалити
        </button>
      </td>
    </tr>
  )
}
