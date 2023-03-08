import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import rou from './routes'
import { Login } from './pages'

const routes = rou.filter((route) => route.is === true)
console.log('1', routes)

function App() {
  console.log('2', routes)
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detaile" element={<Detaile />} /> */}
      <Route path="/" exact element={<Navigate to="/login" />} />
      <Route path="/login" exact element={<Login />} />
      {
        routes.map((route) => {
          console.log('3', route)
          return (
            <Route
              key={route.path}
              path={route.path}
              exact
              element={<route.component />}
            >
              {/* {route.title} */}
            </Route>
          )
        })
      }
    </Routes>
  )
}

export default App
