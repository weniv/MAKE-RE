import React from 'react'
import Header from './Header'

function Layout({ children, resumeData, formName }) {
  return (
    <>
      <Header resumeData={resumeData} formName={formName} />
      {children}
    </>
  )
}

export default Layout
