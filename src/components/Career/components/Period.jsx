import React, { useEffect, useState } from 'react'
import styles from '../CareerInput.module.css'

export default function Period({ id, career, setCareer }) {
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  useEffect(() => {
    let findIndex = career.findIndex((item) => item.id === id)
    let copiedItems = [...career]
    copiedItems[findIndex].start = start
    copiedItems[findIndex].end = end

    setCareer(copiedItems)
  }, [start, end])

  return (
    <div className={styles.period}>
      <div className={styles.start}>
        <label htmlFor="" className="inputDescription">
          시작일
        </label>
        <input
          type="month"
          id={id}
          onChange={(e) => setStart(e.target.value)}
        />
      </div>
      <div className={styles.end}>
        <label htmlFor="" className="inputDescription">
          종료일
        </label>
        <input id={id} type="month" onChange={(e) => setEnd(e.target.value)} />
      </div>
    </div>
  )
}
