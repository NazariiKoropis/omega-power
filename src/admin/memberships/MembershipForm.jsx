import { useState, useEffect } from 'react'
import styles from '../AdminTable.module.scss'
import Button from '../../components/button/Button'

export default function MembershipForm({
  onAdd,
  onUpdate,
  editingData,
  onCancel,
}) {
  const [name, setName] = useState('')
  const [priceMonth, setPriceMonth] = useState('')
  const [priceYear, setPriceYear] = useState('')
  const [description, setDescription] = useState('')
  const [features, setFeatures] = useState('')

  // Локальні прапори, щоб не залежати від миттєвих змін props
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    if (editingData) {
      setIsEditing(true)
      setEditId(editingData.id)

      setName(editingData.name || '')
      setPriceMonth(editingData.priceMonth ?? '')
      setPriceYear(editingData.priceYear ?? '')
      setDescription(editingData.description || '')
      setFeatures(
        Array.isArray(editingData.features)
          ? editingData.features.join(', ')
          : editingData.features || ''
      )
    } else {
      clearForm()
    }
  }, [editingData])

  const clearForm = () => {
    setIsEditing(false)
    setEditId(null)
    setName('')
    setPriceMonth('')
    setPriceYear('')
    setDescription('')
    setFeatures('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      name: name.trim(),
      priceMonth: Number(priceMonth),
      priceYear: Number(priceYear),
      description: description.trim(),
      features: features
        .split(',')
        .map((f) => f.trim())
        .filter(Boolean),
    }

    if (!data.name || !data.description) {
      alert('Заповніть усі поля')
      return
    }

    if (isEditing && editId) {
      await onUpdate(editId, data)
      clearForm()
      onCancel?.() // повідомляємо батька, що редагування завершене
    } else {
      await onAdd(data)
      clearForm()
    }
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.subtitle}>
        {isEditing ? 'Редагувати абонемент' : 'Додати новий абонемент'}
      </h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label>Назва</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className={styles.row}>
          <label>Ціна за місяць ($)</label>
          <input
            type="number"
            value={priceMonth}
            onChange={(e) => setPriceMonth(e.target.value)}
            required
          />
        </div>

        <div className={styles.row}>
          <label>Ціна за рік ($)</label>
          <input
            type="number"
            value={priceYear}
            onChange={(e) => setPriceYear(e.target.value)}
            required
          />
        </div>

        <div className={styles.row}>
          <label>Опис</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className={styles.row}>
          <label>Особливості (через кому)</label>
          <input
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            required
          />
        </div>

        <div className={styles.actionsBar}>
          <Button type="submit">
            {isEditing ? 'Зберегти зміни' : 'Додати'}
          </Button>

          {isEditing && (
            <Button
              type="button"
              onClick={() => {
                clearForm()
                onCancel?.()
              }}
            >
              Скасувати
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
