import { NavLink } from 'react-router-dom'
import style from './Nav.module.scss'

export default function Nav() {
  return (
    <nav className={style.navbar}>
      <ul className={style.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${style.navItem} ${style.active}` : style.navItem
            }
          >
            Головна
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trainers"
            className={({ isActive }) =>
              isActive ? `${style.navItem} ${style.active}` : style.navItem
            }
          >
            Тренери
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/memberships"
            className={({ isActive }) =>
              isActive ? `${style.navItem} ${style.active}` : style.navItem
            }
          >
            Абонементи
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${style.navItem} ${style.active}` : style.navItem
            }
          >
            Про нас
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
