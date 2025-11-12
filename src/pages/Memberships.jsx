import { useEffect, useState } from 'react'
import { getAllMemberships } from '../firebase/database'

import MembershipCard from '../components/memberships/MembershipCard'
import styles from './Memberships.module.scss'

export default function Memberships() {
  const [memberships, setMemberships] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const data = await getAllMemberships()

      const arr = data
        ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        : []

      setMemberships(arr)
      setLoading(false)
    }

    load()
  }, [])

  return (
    <div className={styles.wrapper}>
      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <h1>Наші абонементи</h1>
          <p>Обери свій шлях до кращої форми</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className={styles.list}>
        {loading ? (
          <p style={{ color: 'white' }}>Завантаження...</p>
        ) : memberships.length === 0 ? (
          <p style={{ color: 'white' }}>Абонементів поки немає</p>
        ) : (
          memberships.map((m) => <MembershipCard key={m.id} membership={m} />)
        )}
      </div>
    </div>
  )
}
