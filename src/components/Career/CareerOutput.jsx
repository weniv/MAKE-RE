import React, { useEffect, useState } from 'react'
import styles from './CareerOutput.module.css'

const Work = ({ work }) => {
  const works = work.split('\n')
  return (
    <>
      {work ? (
        <ul className={styles.list}>
          {works &&
            works.map((work, idx) => (
              <li key={idx} className={styles.list}>
                {work}
              </li>
            ))}
        </ul>
      ) : null}
    </>
  )
}

export default function CareerOutput({ career }) {
  const [empty, setEmpty] = useState(0)

  /** career 객체가 모두 채워졌는지 확인, true이면 빈 객체 */
  const isEmpty = (arr) => {
    arr.forEach((obj) => {
      let result = Object.values(obj).filter((val) => val !== '').length
      setEmpty((empty) => empty + result)
    })
  }

  useEffect(() => {
    isEmpty(career)
  }, [])

  return (
    <>
      {!empty ? null : (
        <section>
          <h2>Career</h2>
          {career &&
            career.map((el, idx) => (
              <div key={idx} className={styles.cont}>
                {el.start && el.end ? (
                  <p className={styles.period}>
                    {el.start} ~ {el.end}
                  </p>
                ) : null}
                {el.companyName ? (
                  <p className={styles.companyName}>{el.companyName}</p>
                ) : null}
                <Work work={el.works} />
              </div>
            ))}
        </section>
      )}
    </>
  )
}
