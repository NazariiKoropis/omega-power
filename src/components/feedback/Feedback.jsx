import { useState } from 'react'
import Button from '../button/Button'
import styles from './FeedBack.module.scss'
import { addRequest } from '../../firebase/database' // 🆕 замість addFeedback

export default function Feedback() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const data = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      message: form.message.trim() || 'Без повідомлення',
      date: new Date().toISOString(),
    }

    try {
      await addRequest(data)
      setSent(true)
      setForm({ name: '', phone: '', message: '' })
    } catch (err) {
      console.error('Помилка надсилання:', err)
    }
  }

  return (
    <section className={styles.feedback}>
      <div className={styles.feedbackContainer}>
        <h2 className={styles.feedbackTitle}>
          Хочете консультацію? Залиште свої контакти – ми передзвонимо!
        </h2>

        {sent && (
          <p style={{ color: '#4caf50' }}>Заявка успішно відправлена ✅</p>
        )}

        <form className={styles.feedbackForm} onSubmit={handleSubmit}>
          <input
            className={styles.feedbackInput}
            name="name"
            type="text"
            placeholder="Ваше ім’я"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            className={styles.feedbackInput}
            name="phone"
            type="tel"
            placeholder="Ваш телефон"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <textarea
            className={styles.feedbackInput}
            name="message"
            placeholder="Ваше повідомлення (необов’язково)"
            value={form.message}
            onChange={handleChange}
            rows="3"
          />

          <Button type="submit">Відправити</Button>
        </form>
      </div>
    </section>
  )
}
