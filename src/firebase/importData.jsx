import { db } from './firebaseConfig'
import { ref, set } from 'firebase/database'
import { trainersData } from '../data'
export default async function ImportData() {
  try {
    const trainersRef = ref(db, 'trainers')

    // Обнуляємо попередні дані (опціонально)
    // await set(trainersRef, null)

    // Створюємо об’єкт, де ключ — це push id
    const trainersObject = {}
    trainersData.forEach((trainer) => {
      const id = crypto.randomUUID() // генеруємо унікальний ключ локально
      trainersObject[id] = {
        ...trainer,
        id, // додаємо id у запис для зручності
      }
    })

    await set(trainersRef, trainersObject)
    console.log('✅ Тренери успішно імпортовані!')
  } catch (err) {
    console.error('❌ Помилка при імпорті тренерів:', err)
  }
}
