import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Write } from '../pages'

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Write />} />
    </Routes>
  )
}
