import { useState } from 'react'
import { adminLogin } from '../firebase/adminAuth'
import { useNavigate } from 'react-router-dom'
import styles from './AdminLogin.module.scss'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      await adminLogin(email, password)
      navigate('/admin')
    } catch (err) {
      setError('Невірний логін або пароль')
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2>Вхід адміністратора</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className={styles.error}>{error}</p>}

        <button onClick={handleLogin} className={styles.loginBtn}>
          Увійти
        </button>
      </div>
    </div>
  )
}
