import { useEffect, useState } from 'react'
import styles from '../AdminTable.module.scss'
import RequestRow from './RequestRow'
import { getAllRequests, deleteRequestFromDB } from '../../firebase/database'

export default function AdminRequests() {
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const data = await getAllRequests()
      const arr = data
        ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        : []
      setRequests(arr.reverse()) // нові зверху
      setLoading(false)
    }
    load()
  }, [])

  const handleDelete = async (id) => {
    if (!confirm('Видалити запит?')) return
    await deleteRequestFromDB(id)
    setRequests((prev) => prev.filter((r) => r.id !== id))
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Запити на консультацію</h1>

      {loading ? (
        <p className={styles.loading}>Завантаження...</p>
      ) : requests.length === 0 ? (
        <p className={styles.empty}>Запитів поки немає</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Ім’я</th>
              <th>Номер</th>
              <th>Повідомлення</th>
              <th>Дата</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {requests.map((r) => (
              <RequestRow
                key={r.id}
                request={r}
                onDelete={() => handleDelete(r.id)}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
