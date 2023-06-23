import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Write } from '../pages'

export default function Routers({ resumeData, setResumeData }) {
  return (
    <Routes>
      <Route
        path="/MAKE-RE"
        element={
          <Write resumeData={resumeData} setResumeData={setResumeData} />
        }
      />
    </Routes>
  )
}
