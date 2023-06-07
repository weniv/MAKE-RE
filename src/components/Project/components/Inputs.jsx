import React from 'react'
import styles from '../ProjectInput.module.css'

export const ProjectAlign = () => {
  return (
    <>
      <h2>Project</h2>
      <div className={styles.isAlign}>
        <p>시간 순서로 정렬</p>
        <input type="checkbox" name="alignBtn" id={styles.alignBtn} />
      </div>
    </>
  )
}

export const ProjectHeader = () => {
  return (
    <div className={styles.projectHeader}>
      <button type="button" className={styles.menuBtn}></button>
      <h3>AT(Arzra Takarsen)</h3>
      <button type="button" className={styles.downBtn}></button>
      <button type="button" className={styles.moreBtn}></button>
    </div>
  )
}

export const ProjectTitle = () => {
  return (
    <div className={styles.projectTitle}>
      <h4>프로젝트명 입력</h4>
      <input type="text" placeholder="프로젝트명 입력" />
    </div>
  )
}
