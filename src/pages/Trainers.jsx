import { useEffect, useState } from 'react'
import { getAllTrainers } from '../firebase/database'

import TrainersList from '../components/trainers/trainersList/TrainersList.jsx'
import Filter from '../components/trainers/filter/Filter.jsx'
import styles from './TrainersPage.module.scss'

export default function Trainers() {
  const [trainers, setTrainers] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(true)

  // ===== LOAD FROM FIREBASE =====
  useEffect(() => {
    async function load() {
      const data = await getAllTrainers()

      // Firebase повертає object → перетворюємо у масив
      const trainersArray = data
        ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        : []

      setTrainers(trainersArray)
      setFiltered(trainersArray)
      setLoading(false)
    }

    load()
  }, [])

  // ===== FILTER LOGIC =====
  const handleFilter = ({ search, age, experience, gender }) => {
    let filteredData = [...trainers]

    if (search) {
      filteredData = filteredData.filter((t) =>
        t.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (age) {
      filteredData = filteredData.filter((t) => t.age >= Number(age))
    }

    if (experience) {
      filteredData = filteredData.filter(
        (t) => t.experience >= Number(experience)
      )
    }

    if (gender) {
      filteredData = filteredData.filter((t) => t.gender === gender)
    }

    setFiltered(filteredData)
  }

  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <Filter onFilter={handleFilter} />
      </aside>

      <main className={styles.content}>
        {loading ? (
          <p style={{ color: 'white' }}>Завантаження...</p>
        ) : filtered.length === 0 ? (
          <p style={{ color: 'white' }}>Нічого не знайдено</p>
        ) : (
          <TrainersList trainers={filtered} />
        )}
      </main>
    </div>
  )
}
