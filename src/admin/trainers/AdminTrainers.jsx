import { useState, useEffect } from 'react'
import styles from './AdminTrainers.module.scss'
import TrainerRow from './TrainerRow'

import {
  addTrainer,
  getAllTrainers,
  updateTrainer,
  deleteTrainerFromDB,
} from '../../firebase/database'

export default function AdminTrainers() {
  const [trainers, setTrainers] = useState([])

  const emptyForm = {
    id: null,
    name: '',
    age: '',
    experience: '',
    specialization: '',
    price: '',
    gender: 'Male',
    quote: '',
    skills: '',
    imageName: '', // 🔥 нове поле
  }

  const [form, setForm] = useState(emptyForm)
  const [isEditing, setIsEditing] = useState(false)

  // ✅ Завантаження тренерів
  useEffect(() => {
    async function load() {
      const data = await getAllTrainers()
      const arr = data
        ? Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }))
        : []
      setTrainers(arr)
    }
    load()
  }, [])

  // ✅ зміна інпутів
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // ✅ submit форми
  const handleSubmit = async (e) => {
    e.preventDefault()

    const trainerData = {
      name: form.name.trim(),
      age: Number(form.age),
      experience: Number(form.experience),
      specialization: form.specialization.trim(),
      price: Number(form.price),
      gender: form.gender,
      quote: form.quote.trim(),
      imageName: form.imageName.trim(), // 🔥 додаємо
      skills: form.skills
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
    }

    if (isEditing && form.id) {
      await updateTrainer(form.id, trainerData)
      setTrainers((prev) =>
        prev.map((t) =>
          t.id === form.id ? { ...trainerData, id: form.id } : t
        )
      )
      setIsEditing(false)
    } else {
      const id = await addTrainer(trainerData)
      setTrainers([...trainers, { ...trainerData, id }])
    }

    setForm(emptyForm)
  }

  // ✅ Видалення
  const deleteTrainer = async (id) => {
    if (!confirm('Точно видалити тренера?')) return
    await deleteTrainerFromDB(id)
    setTrainers((prev) => prev.filter((t) => t.id !== id))
  }

  // ✅ Редагування
  const editTrainer = (trainer) => {
    setForm({
      ...trainer,
      skills: Array.isArray(trainer.skills)
        ? trainer.skills.join(', ')
        : trainer.skills,
    })
    setIsEditing(true)
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Управління тренерами</h1>

      {/* ===== ФОРМА ===== */}
      <div className={styles.card}>
        <h2 className={styles.subtitle}>
          {isEditing ? 'Редагувати тренера' : 'Додати тренера'}
        </h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label>Імʼя</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.row}>
            <label>Вік</label>
            <input
              name="age"
              type="number"
              value={form.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.row}>
            <label>Стаж (років)</label>
            <input
              name="experience"
              type="number"
              value={form.experience}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.row}>
            <label>Спеціалізація</label>
            <input
              name="specialization"
              value={form.specialization}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.row}>
            <label>Ціна ($)</label>
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.row}>
            <label>Стать</label>
            <select name="gender" value={form.gender} onChange={handleChange}>
              <option value="Male">Чоловік</option>
              <option value="Female">Жінка</option>
            </select>
          </div>

          <div className={styles.row}>
            <label>Цитата</label>
            <input
              name="quote"
              value={form.quote}
              onChange={handleChange}
              placeholder="Кожен крок наближає до мети"
            />
          </div>

          <div className={styles.row}>
            <label>Навички (через кому)</label>
            <input
              name="skills"
              value={form.skills}
              onChange={handleChange}
              placeholder="Йога, кардіо, силові тренування"
            />
          </div>

          <div className={styles.row}>
            <label>Назва фото (наприклад: taras.jpg)</label>
            <input
              name="imageName"
              value={form.imageName}
              onChange={handleChange}
              placeholder="maria.jpg"
              required
            />
          </div>

          <button className={styles.saveBtn}>
            {isEditing ? 'Оновити' : 'Додати'}
          </button>

          {isEditing && (
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={() => {
                setIsEditing(false)
                setForm(emptyForm)
              }}
            >
              Скасувати
            </button>
          )}
        </form>
      </div>

      {/* ===== ТАБЛИЦЯ ===== */}
      <div className={styles.card}>
        <h2 className={styles.subtitle}>Список тренерів</h2>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Імʼя</th>
                <th>Фото</th>
                <th>Спеціалізація</th>
                <th>Стаж</th>
                <th>Ціна</th>
                <th>Стать</th>
                <th>Дії</th>
              </tr>
            </thead>

            <tbody>
              {trainers.length === 0 ? (
                <tr>
                  <td colSpan="7" className={styles.empty}>
                    Немає тренерів
                  </td>
                </tr>
              ) : (
                trainers.map((t) => (
                  <TrainerRow
                    key={t.id}
                    trainer={t}
                    onEdit={editTrainer}
                    onDelete={deleteTrainer}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
