import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Write, Preview } from '../pages'

export default function Routers({ resumeData, setResumeData, componentRef }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Write resumeData={resumeData} setResumeData={setResumeData} />
        }
      />
      <Route
        path="/preview"
        element={<Preview componentRef={componentRef} />}
      ></Route>
    </Routes>
  )
}
