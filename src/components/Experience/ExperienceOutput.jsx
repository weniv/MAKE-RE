import React from 'react'
import styles from './experience.module.css'

export default function Experience({ experience }) {
  const expOutput = experience.filter((exp) => exp.date || exp.contents.trim())
  expOutput.sort(
    (a, b) =>
      parseInt(b.date.replace('-', '')) - parseInt(a.date.replace('-', ''))
  )
  console.log(expOutput)
  return (
    <>
      {!!expOutput.length && (
        <section className={styles.exp}>
          <h2 className={styles.titOutput}>Experience</h2>
          <ul className={styles.listExp}>
            {expOutput.map((exp, i) => (
              <li key={i}>
                <span className={styles.date}>
                  {exp.date.replace('-', '. ')}
                </span>
                <p className={styles.item}>{exp.contents.trim()}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
