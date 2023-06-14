import React, { useEffect, useState } from 'react'
import styles from '../ProjectInput.module.css'
import People from './People'
import Period from './Period'

export default function ProjectDetail({ id, project, setProject }) {
  return (
    <>
      <h3 className={styles.subTitle}>개발 인원 및 기간</h3>
      <People id={id} setProject={setProject} project={project} />
      <Period id={id} setProject={setProject} project={project} />
    </>
  )
}
