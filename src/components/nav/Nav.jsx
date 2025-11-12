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
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Trainers"
            className={({ isActive }) =>
              isActive ? `${style.navItem} ${style.active}` : style.navItem
            }
          >
            Trainers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/memberships"
            className={({ isActive }) =>
              isActive ? `${style.navItem} ${style.active}` : style.navItem
            }
          >
            Memberships
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${style.navItem} ${style.active}` : style.navItem
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
