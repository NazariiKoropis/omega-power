import styles from '../AdminTable.module.scss'

export default function TrainerRow({ trainer, onEdit, onDelete }) {
  return (
    <tr>
      <td>{trainer.name}</td>
      <td>{trainer.imageName || '-'}</td>
      <td>{trainer.specialization}</td>
      <td>{trainer.experience} років</td>
      <td>{trainer.price}$</td>
      <td>{trainer.gender === 'Male' ? 'Чоловік' : 'Жінка'}</td>

      <td className={styles.actions}>
        <button className={styles.edit} onClick={() => onEdit(trainer)}>
          Редагувати
        </button>

        <button className={styles.delete} onClick={() => onDelete(trainer.id)}>
          Видалити
        </button>
      </td>
    </tr>
  )
}
