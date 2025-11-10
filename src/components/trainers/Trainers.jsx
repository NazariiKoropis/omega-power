import Button from '../button/Button.jsx'
import steveImg from '../../assets/trainers/steve.jpg'
import styles from './Trainers.module.scss'

export default function Trainers() {
  return (
    <section className={styles.trainers}>
      <div className={styles.item}>
        <div className={styles.itemInfo}>
          <h2 className={styles.itemH2}>Steveeee</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id vero
            error accusantium distinctio illo doloremque eaque, deleniti nemo
            cum enim?
          </p>
          <ul>
            <li>Age</li>
            <li>Experience</li>
            <li>Specialization</li>
            <li>Стаж</li>
          </ul>

          <div className="button-container">
            <Button onClick={() => alert()}>Book</Button>
          </div>
        </div>
        <div className={styles.itemImage}>
          <img src={steveImg} alt="Trainer Steve" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
