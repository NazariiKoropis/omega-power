import { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig'
import { ref, onValue } from 'firebase/database'

export default function FirebaseTest() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const testRef = ref(db, 'test/message') // шлях до ключа
    onValue(testRef, (snapshot) => {
      const data = snapshot.val()
      setMessage(data)
    })
  }, [])

  return (
    <div style={{ color: '#fff', padding: '20px' }}>
      <h2>Firebase Test</h2>
      {message ? (
        <p>✅ Connected! Message: {message}</p>
      ) : (
        <p>⏳ Waiting for data...</p>
      )}
    </div>
  )
}
