import styles from '../../pages/About.module.scss'

export default function AboutContacts() {
  return (
    <section className={styles.contacts}>
      <h2>Контакти</h2>

      <ul>
        <li>
          <strong>Адреса:</strong> м. Львів, вул. Силача 14
        </li>
        <li>
          <strong>Телефон:</strong> +380 68 777 55 44
        </li>
        <li>
          <strong>Ел. пошта:</strong> support@omegapower.fit
        </li>
        <li>
          <strong>Графік роботи:</strong> Пн-Пт 06:00–23:00, Сб-Нд 08:00–21:00
        </li>
      </ul>
    </section>
  )
}
