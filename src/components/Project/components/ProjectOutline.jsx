import React, { useEffect, useState } from 'react'
import styles from '../ProjectInput.module.css'

export default function ProjectOutline({ id, project, setProject }) {
  const [outline, setOutline] = useState('')

  // useEffect(() => {
  //   let findIndex = project.findIndex((item) => item.id === id)
  //   let copiedItems = [...project]
  //   copiedItems[findIndex].outline = outline

  //   setProject(copiedItems)
  // }, [outline])

  return (
    <>
      <h3 className={styles.subTitle}>프로젝트 개요</h3>
      <textarea
        className={styles.oulineText}
        placeholder="본문 내용 입력"
        onChange={(e) => setOutline(e.target.value)}
      ></textarea>
    </>
  )
}
