import { useState, useEffect } from 'react'
import styles from '../AdminTable.module.scss'
import MembershipRow from './MembershipRow'
import MembershipForm from './MembershipForm'

import {
  addMembership,
  getAllMemberships,
  updateMembershipInDB,
  deleteMembershipFromDB,
} from '../../firebase/database'

export default function AdminMemberships() {
  const [memberships, setMemberships] = useState([])
  const [editing, setEditing] = useState(null)

  // ✅ Завантаження з Firebase
  useEffect(() => {
    async function load() {
      const data = await getAllMemberships()

      const arr = data
        ? Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }))
        : []

      setMemberships(arr)
    }

    load()
  }, [])

  const add = async (data) => {
    const id = await addMembership(data)
    setMemberships([...memberships, { id, ...data }])
  }

  // ✅ ОНОВИТИ
  const update = async (id, data) => {
    await updateMembershipInDB(id, data)

    setMemberships((prev) =>
      prev.map((m) => (m.id === id ? { id, ...data } : m))
    )

    setEditing(null)
  }

  // ✅ ВИДАЛИТИ
  const remove = async (id) => {
    await deleteMembershipFromDB(id)

    setMemberships(memberships.filter((m) => m.id !== id))
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Абонементи</h1>

      <MembershipForm
        onAdd={add}
        onUpdate={update}
        editingData={editing}
        onCancel={() => setEditing(null)}
      />

      {/* ✅ Таблиця */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Назва</th>
            <th>Ціна / місяць</th>
            <th>Ціна / рік</th>
            <th>Опис</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {memberships.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>
                Абонементів немає
              </td>
            </tr>
          ) : (
            memberships.map((m) => (
              <MembershipRow
                key={m.id}
                membership={m}
                onEdit={() => setEditing(m)}
                onDelete={remove}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
