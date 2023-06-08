import React from 'react'
import Inputs from './components/Inputs'

export default function CareerInput(props) {
  return (
    <Inputs setResumeData={props.setResumeData} resumeData={props.resumeData} />
  )
}
