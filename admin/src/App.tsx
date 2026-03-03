import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ContentManage from './pages/ContentManage'
import ImageManage from './pages/ImageManage'
import Stats from './pages/Stats'
import Layout from './components/Layout'
import type { User } from './types'

function App() {
  const [user, setUser] = useState<User | null>(null)

  const handleLogin = (userData: User) => {
    setUser(userData)
  }

  const handleLogout = () => {
    setUser(null)
  }

  if (!user) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <BrowserRouter>
      <Layout user={user} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/content" element={<ContentManage />} />
          <Route path="/images" element={<ImageManage />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
