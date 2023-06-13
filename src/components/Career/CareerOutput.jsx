import React from 'react'
import styles from './CareerOutput.module.css'

const Work = ({ work }) => {
  const works = work.split('\n')
  return (
    <>
      {work ? (
        <ul className={styles.list}>
          {works &&
            works.map((work) => <li className={styles.list}>{work}</li>)}
        </ul>
      ) : null}
    </>
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
            {career.start && career.end ? (
              <p className={styles.period}>
                {career.start} ~ {career.end}
              </p>
            ) : null}
            {career.companyName ? (
              <p className={styles.companyName}>{career.companyName}</p>
            ) : null}
            <Work work={career.works} />
          </div>
        ))}
    </section>
  )
}
