import { db } from "../firebase/firebaseConfig"
import { ref, set, push, get, remove, child } from "firebase/database"

/* ============================================================
    TRAINERS
============================================================ */
export async function addTrainer(trainer) {
  const newRef = push(ref(db, "trainers"))
  await set(newRef, trainer)
  return newRef.key
}

export async function getAllTrainers() {
  const snapshot = await get(child(ref(db), "trainers"))
  return snapshot.exists() ? snapshot.val() : {}
}

export function updateTrainer(id, data) {
  return set(ref(db, `trainers/${id}`), data)
}

export async function deleteTrainerFromDB(id) {
  await remove(ref(db, `trainers/${id}`))
}

/* ============================================================
    REVIEWS
============================================================ */
export function addReview(review) {
  const newRef = push(ref(db, "reviews"))
  return set(newRef, review)
}

export async function getAllReviews() {
  const snapshot = await get(child(ref(db), "reviews"))
  return snapshot.exists() ? snapshot.val() : {}
}

/* ============================================================
    MEMBERSHIPS
============================================================ */
export async function addMembership(membership) {
  const newRef = push(ref(db, "memberships"))
  await set(newRef, membership)
  return newRef.key
}

export async function getAllMemberships() {
  const snapshot = await get(child(ref(db), "memberships"))
  if (!snapshot.exists()) return {}

  const data = snapshot.val()
  Object.keys(data).forEach((key) => {
    if (data[key].priceMonth !== undefined)
      data[key].priceMonth = String(data[key].priceMonth)
    if (data[key].priceYear !== undefined)
      data[key].priceYear = String(data[key].priceYear)
  })
  return data
}

export function updateMembershipInDB(id, data) {
  return set(ref(db, `memberships/${id}`), data)
}

export function deleteMembershipFromDB(id) {
  return remove(ref(db, `memberships/${id}`))
}

/* ============================================================
    FEEDBACK
============================================================ */
export function addFeedback(data) {
  const newRef = push(ref(db, "feedback"))
  return set(newRef, data)
}

/* ============================================================
    REQUESTS
============================================================ */
export function addRequest(data) {
  const newRef = push(ref(db, "requests"))
  return set(newRef, data)
}

export async function getAllRequests() {
  const snapshot = await get(child(ref(db), "requests"))
  return snapshot.exists() ? snapshot.val() : {}
}

export function deleteRequestFromDB(id) {
  return remove(ref(db, `requests/${id}`))
}
