import logo from '../../assets/logo.png'
import Button from '../button/Button'
import style from './Header.module.scss'
import Nav from '../nav/Nav.jsx'

import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/admin-login')
  }

  const handleLogoutClick = async () => {
    await logout()
    navigate('/')
  }

  const handleDashboardClick = () => {
    navigate('/admin')
  }

  return (
    <div className={style.headerContainer}>
      <header className={style.header}>
        <img
          src={logo}
          className={style.img}
          alt="Omega Power logo"
          width="100"
          loading="lazy"
        />

        <h1 className={style.h1Header}>Omega Power</h1>

        {/* AUTH BUTTONS */}
        <div className={style.buttons}>
          {!user ? (
            <Button onClick={handleLoginClick}>Login</Button>
          ) : (
            <>
              <Button onClick={handleDashboardClick}>Dashboard</Button>
              <Button onClick={handleLogoutClick}>Logout</Button>
            </>
          )}
        </div>
      </header>

      <Nav />
    </div>
  )
}
