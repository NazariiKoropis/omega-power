import logo from '../../assets/logo.png'
import Button from '../button/Button'
import style from './Header.module.scss'
import Nav from '../nav/Nav.jsx'

export default function Header() {
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
        <Button onClick={() => alert('Login clicked!')}>Login</Button>
      </header>

      <Nav />
    </div>
  )
}
