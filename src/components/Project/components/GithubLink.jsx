import React, { useEffect, useState } from 'react'
import styles from '../ProjectInput.module.css'

export default function GithubLink({ id, project, setProject }) {
  const [github, setGithub] = useState('')

  useEffect(() => {
    let findIndex = project.findIndex((item) => item.id === id)
    let copiedItems = [...project]
    copiedItems[findIndex].github = github

    setProject(copiedItems)
  }, [github])

  return (
    <>
      <h3 className={styles.subTitle}>깃허브 링크</h3>
      <div id="id" className={styles.github}>
        <img src="" alt="" />
        <input type="url" onChange={(e) => setGithub(e.target.value)} />
      </div>
    </>
  )
}
