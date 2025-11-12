import Button from '../../button/Button.jsx'
import styles from './Trainers.module.scss'
import { useNavigate } from 'react-router-dom'

const trainersImages = import.meta.glob('../../../assets/trainers/*', {
  eager: true,
  import: 'default',
})

export default function Trainers({ trainer, reverse }) {
  const navigate = useNavigate()

  const imagePath =
    trainersImages[`../../../assets/trainers/${trainer.imageName}`]

  return (
    <section className={styles.trainers}>
      <div className={`${styles.item} ${reverse ? styles.reverse : ''}`}>
        <div className={styles.itemInfo}>
          <h2 className={styles.itemH2}>{trainer.name}</h2>
          <p>{'"' + trainer.quote + '"'}</p>
          <ul>
            <li>{trainer.age + ' роки'} </li>
            <li>{'Досвід тренувань ' + trainer.experience + ' років'}</li>
            <li>{trainer.specialization}</li>
          </ul>

          <div className="button-container">
            <Button onClick={() => navigate(`/trainers/${trainer.id}`)}>
              Book
            </Button>
          </div>
        </div>

        <div className={styles.itemImage}>
          <img src={imagePath} alt={`Trainer ${trainer.name}`} loading="lazy" />
        </div>
      </div>
    </section>
  )
}
