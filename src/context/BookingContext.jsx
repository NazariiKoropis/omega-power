import { createContext, useState, useContext } from 'react'
import BookingPopup from '../components/popup/BookingPopup'

const BookingContext = createContext()

export const useBooking = () => useContext(BookingContext)

export function BookingProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [trainer, setTrainer] = useState(null)

  const openBooking = (trainerData) => {
    setTrainer(trainerData)
    setIsOpen(true)
  }

  const closeBooking = () => {
    setIsOpen(false)
    setTrainer(null)
  }

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      {isOpen && <BookingPopup trainer={trainer} onClose={closeBooking} />}
    </BookingContext.Provider>
  )
}
