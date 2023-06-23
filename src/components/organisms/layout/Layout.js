import React from 'react'
import {
  PreviewHeader,
  WriteHeader,
  PreviewFooter,
  WriteFooter,
} from '../index'

function Layout({ children, preview, resumeData, formName, componentRef }) {
  return preview ? (
    <>
      <PreviewHeader componentRef={componentRef} />
      {children}
      <PreviewFooter />
    </>
  ) : (
    <>
      <WriteHeader resumeData={resumeData} formName={formName} />
      {children}
      <WriteFooter />
    </>
  )
}

export default Layout
