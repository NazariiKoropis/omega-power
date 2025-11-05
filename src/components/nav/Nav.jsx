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
            to="/about"
            className={({ isActive }) =>
              isActive ? `${style.navItem} ${style.active}` : style.navItem
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? `${style.navItem} ${style.active}` : style.navItem
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${style.navItem} ${style.active}` : style.navItem
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
