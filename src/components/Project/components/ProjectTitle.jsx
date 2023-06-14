import React, { useEffect, useRef, useState } from 'react'
import styles from '../ProjectInput.module.css'

export default function ProjectTitle({ id, project, setProject }) {
  const [title, setTitle] = useState('')

  useEffect(() => {
    let findIndex = project.findIndex((item) => item.id === id)
    let copiedItems = [...project]
    copiedItems[findIndex].title = title

    setProject(copiedItems)
  }, [title])

  return (
    <div id={id} className={styles.projectTitle}>
      <h4 className="inputDescription">프로젝트명 입력</h4>
      <input
        type="text"
        placeholder="프로젝트명 입력"
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  )
}
