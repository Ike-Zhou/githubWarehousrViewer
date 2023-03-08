import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
  const user = useSelector((state) => state)
  return (
    <div>
      home
      {
        `username:${user.user.login}`
      }
    </div>
  )
}
