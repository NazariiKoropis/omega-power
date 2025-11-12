import { auth } from './firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const adminLogin = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}
