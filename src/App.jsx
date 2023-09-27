import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute } from './routes'

import Register from './pages/Register'
import { Login } from './pages/Login'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Nadvar from './components/Nadvar'
import MyProject from './pages/MyProject'
import { Board } from './components/Board'

function App () {
  return (
    <AuthProvider>
        <BrowserRouter>
            <Nadvar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/MyProject" element={<MyProject />} />
              <Route path="/aboutMe" element={<AboutMe />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/juegos" element={<Board />} />           
              </Route>
            </Routes>
        </BrowserRouter>
    </AuthProvider>
  )
}

export default App
