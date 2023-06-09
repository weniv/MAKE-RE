import React from 'react'
import styles from './CareerOutput.module.css'

const Work = (props) => {
  const works = props.work.split('\n')
  return (
    <ul className={styles.list}>
      {works && works.map((work) => <li className={styles.list}>{work}</li>)}
    </ul>
  )
}

export default function CareerOutput(props) {
  const careerData = props.data
  return (
    <section>
      <h2>Career</h2>
      {careerData &&
        careerData.map((career) => (
          <div className={styles.cont}>
            <p className={styles.period}>
              {career.start} ~ {career.end}
            </p>
            <p className={styles.companyName}>{career.companyName}</p>
            <Work work={career.works} />
          </div>
        ))}
    </section>
  )
}
