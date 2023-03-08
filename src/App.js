import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import rou from './routes'

const routes = rou.filter((route) => route.is === true)

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Navigate to="/login" />} />
      {
        routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact
            element={<route.component />}
          />
        ))
      }
    </Routes>
  )
}

export default App
