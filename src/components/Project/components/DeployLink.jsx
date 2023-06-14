import React, { useEffect, useState } from 'react'
import styles from '../ProjectInput.module.css'

export default function DeployLink({ id, project, setProject }) {
  const [link, setLink] = useState('')

  // useEffect(() => {
  //   let findIndex = project.findIndex((item) => item.id === id)
  //   let copiedItems = [...project]
  //   copiedItems[findIndex].link = link

  //   setProject(copiedItems)
  // }, [link])

  return (
    <>
      <h3 className={styles.subTitle}>프로젝트 링크</h3>
      <div className={styles.deploy}>
        <img src="" alt="" />
        <input type="url" onChange={(e) => setLink(e.target.value)} />
      </div>
    </>
  )
}
