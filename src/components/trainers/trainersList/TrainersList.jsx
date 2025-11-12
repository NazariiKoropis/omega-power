import { useState } from 'react'
import TrainerCard from '../trainerCard/TrainerCard'
import styles from './TrainersList.module.scss'

export default function TrainersList({ trainers }) {
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 10

  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage

  const currentTrainers = trainers.slice(firstIndex, lastIndex)

  const totalPages = Math.ceil(trainers.length / recordsPerPage)

  const changePage = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className={styles.list}>
        {currentTrainers.map((trainer) => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>

      {/* pagination */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => changePage(i + 1)}
            className={`${styles.pageBtn} ${
              currentPage === i + 1 ? styles.active : ''
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  )
}
