import Header from '../components/Header.jsx'
import TrainersBio from '../components/trainersBio.jsx'
import { trainersData } from '../data.js'
import { useState } from 'react'
import Button from '../components/button.jsx'

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const trainer = trainersData[currentIndex]

  function nextTrainer() {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === trainersData.length - 1) {
        return 0
      }
      return prevIndex + 1
    })
  }

  function previousTrainers() {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return trainersData.length - 1
      }
      return prevIndex - 1
    })
  }

  return (
    <>
      <Header />
      Object.
      {trainersData.map((trainer) => (
        <TrainersBio key={trainer.id} {...trainer} />
      ))}
      <TrainersBio {...trainer} />
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <Button onClick={previousTrainers}>Trainer</Button>
        <Button onClick={nextTrainer}>Trainer</Button>
      </div>
    </>
  )
}
