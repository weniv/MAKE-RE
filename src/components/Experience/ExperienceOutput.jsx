import React from 'react'
import styles from './experience.module.css'

export default function ExperienceOutput() {
  return (
    <section className={styles.exp}>
      <h3 className={styles.title}>Experience</h3>
      <ul className={styles.list_exp}>
        <li>
          <span className={styles.year}>2016</span>
          <p className={styles.item}>베트남 ICT 해외봉사</p>
        </li>
        <li>
          <span className={styles.year}>2012</span>
          <p className={styles.item}>베트남 ICT 해외봉사</p>
        </li>
        <li>
          <span className={styles.year}>2019</span>
          <p className={styles.item}>베트남 ICT 해외봉사</p>
        </li>
        <li>
          <span className={styles.year}>2010</span>
          <p className={styles.item}>베트남 ICT 해외봉사</p>
        </li>
      </ul>
    </section>
  )
}
