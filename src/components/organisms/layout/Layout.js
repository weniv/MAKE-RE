import React from 'react'
import { PreviewHeader, WriteHeader } from '../index'

function Layout({ children, preview, resumeData, formName, componentRef }) {
  return preview ? (
    <>
      <PreviewHeader componentRef={componentRef} />
      {children}
    </>
  ) : (
    <>
      <WriteHeader resumeData={resumeData} formName={formName} />
      {children}
    </>
  )
}

export default Layout
