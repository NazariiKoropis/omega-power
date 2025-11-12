import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Home from './pages/Home'
import Trainers from './pages/Trainers'
import TrainerDetails from './pages/TrainerDetails'
import Memberships from './pages/Memberships'
import About from './pages/About'

// Admin
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'

// Admin CRUD pages
import AdminTrainers from './admin/trainers/AdminTrainers'
import AdminMemberships from './admin/memberships/AdminMemberships'
import AdminBookings from './admin/bookings/AdminBookings'

import ProtectedRoute from './ProtectedRoute'

import { BookingProvider } from './context/BookingContext'
import { AuthProvider } from './context/AuthContext'
import AdminRequests from './admin/requests/AdminRequests.jsx'

import ImportData from './firebase/importData.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <BookingProvider>
          <Header />

          <Routes>
            {/*  <Route path="/import-data" element={<ImportData />} /> */}
            {/* PUBLIC */}
            <Route path="/import-data" element={<ImportData />} />
            <Route path="/" element={<Home />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/trainers/:id" element={<TrainerDetails />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/about" element={<About />} />

            {/* ADMIN LOGIN */}
            <Route path="/admin-login" element={<AdminLogin />} />

            {/* ADMIN PANEL */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/trainers"
              element={
                <ProtectedRoute>
                  <AdminTrainers />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/memberships"
              element={
                <ProtectedRoute>
                  <AdminMemberships />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin/bookings"
              element={
                <ProtectedRoute>
                  <AdminBookings />
                </ProtectedRoute>
              }
            />
            <Route path="/admin/requests" element={<AdminRequests />} />
          </Routes>

          <Footer />
        </BookingProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
