import React, { useEffect } from 'react'
import styles from './experience.module.css'

export default function Experience({ resumeData }) {
  useEffect(() => {
    console.log('>', JSON.stringify(resumeData))
  }, [])
  const expData = resumeData.experience
  return (
    <>
      {expData && (
        <section className={styles.exp}>
          <h2 className={styles.titOutput}>Experience</h2>
          <ul className={styles.listExp}>
            {expData.map((exp) => (
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
