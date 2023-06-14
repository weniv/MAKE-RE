import React from 'react'
import styles from '../ProjectInput.module.css'

export default function ProjectAlign() {
  return (
    <div className={styles.isAlign}>
      <p>시간 순서로 정렬</p>
      <input type="checkbox" name="alignBtn" id={styles.alignBtn} />
    </div>
  )
}
