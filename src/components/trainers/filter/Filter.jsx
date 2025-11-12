import { useState } from 'react'
import styles from './Filter.module.scss'

export default function Filter({ onFilter }) {
  const [search, setSearch] = useState('')
  const [age, setAge] = useState('')
  const [experience, setExperience] = useState('')
  const [gender, setGender] = useState('')

  const handleFilter = () => {
    onFilter({ search, age, experience, gender })
  }

  const handleReset = () => {
    setSearch('')
    setAge('')
    setExperience('')
    setGender('')

    // повертаємо повний список тренерів
    onFilter({ search: '', age: '', experience: '', gender: '' })
  }

  return (
    <div className={styles.filter}>
      <h2>Фільтри</h2>

      <input
        type="text"
        placeholder="Пошук за іменем..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        type="number"
        placeholder="Мінімальний вік"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="number"
        placeholder="Мінімальний стаж"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />

      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Будь-яка стать</option>
        <option value="Male">Чоловік</option>
        <option value="Female">Жінка</option>
      </select>

      <button onClick={handleFilter}>Застосувати</button>

      <button className={styles.resetBtn} onClick={handleReset}>
        Скинути фільтри
      </button>
    </div>
  )
}
