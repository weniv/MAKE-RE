import React from 'react'
import styles from './experience.module.css'

export default function Experience({ experience }) {
  const expOutput =
    experience && experience.filter((exp) => exp.year && exp.contents)
  expOutput && expOutput.sort((a, b) => b.year - a.year)

  return (
    <>
      {expOutput && (
        <section className={styles.exp}>
          <h2 className={styles.titOutput}>Experience</h2>
          <ul className={styles.listExp}>
            {expOutput.map((exp) => (
              <li>
                <span className={styles.year}>{exp.year}</span>
                <p className={styles.item}>{exp.contents} </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
