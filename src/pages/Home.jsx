import { useEffect, useState } from 'react'
import Hero from '../components/home/hero/Hero.jsx'
import Trainers from '../components/home/trainers/Trainers.jsx'
import SliderForReviews from '../components/home/sliderForReviews/SliderForReviews.jsx'
import Feedback from '../components/feedback/Feedback.jsx'

import { getAllTrainers, getAllReviews } from '../firebase/database'

export default function Home() {
  const [trainers, setTrainers] = useState([])
  const [reviews, setReviews] = useState([])

  const [loadingTrainers, setLoadingTrainers] = useState(true)
  const [loadingReviews, setLoadingReviews] = useState(true)

  useEffect(() => {
    // ===== LOAD TRAINERS =====
    getAllTrainers().then((data) => {
      if (data) {
        const arr = Object.entries(data).map(([id, trainer]) => ({
          id,
          ...trainer,
        }))
        setTrainers(arr)
      }
      setLoadingTrainers(false)
    })

    // ===== LOAD REVIEWS =====
    getAllReviews().then((data) => {
      if (data) {
        const arr = Object.entries(data).map(([id, review]) => ({
          id,
          ...review,
        }))
        setReviews(arr)
      }
      setLoadingReviews(false)
    })
  }, [])

  return (
    <>
      <Hero />

      {/* TRAINERS */}
      {loadingTrainers ? (
        <p style={{ color: 'white', padding: '20px' }}>
          Завантаження тренерів...
        </p>
      ) : (
        trainers
          .slice(0, 3)
          .map((trainer, index) => (
            <Trainers
              key={trainer.id}
              trainer={trainer}
              reverse={index % 2 !== 0}
            />
          ))
      )}

      {/* REVIEWS */}
      {loadingReviews ? (
        <p style={{ color: 'white', padding: '20px' }}>
          Завантаження відгуків...
        </p>
      ) : (
        <SliderForReviews reviewsData={reviews} />
      )}

      <Feedback />
    </>
  )
}
