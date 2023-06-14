import React, { useEffect, useState } from 'react'
import styles from '../ProjectInput.module.css'

export default function Period({ id, project, setProject }) {
  const min_month = 1
  const max_month = 31

  const [startPeriod, setStartPeriod] = useState('')
  const [endPeriod, setEndPeriod] = useState('')
  const [startYear, setStartYear] = useState('')
  const [startMonth, setStartMonth] = useState('')
  const [endYear, setEndYear] = useState('')
  const [endMonth, setEndMonth] = useState('')

  useEffect(() => {
    let findIndex = project.findIndex((item) => item.id === id)
    let copiedItems = [...project]
    copiedItems[findIndex].startPeriod = startPeriod
    copiedItems[findIndex].endPeriod = endPeriod

    setProject(copiedItems)
  }, [startPeriod, endPeriod])

  useEffect(() => {
    setStartPeriod(`${startYear}.${startMonth}`)
  }, [startYear, startMonth])

  useEffect(() => {
    setEndPeriod(`${endYear}.${endMonth}`)
  }, [endYear, endMonth])

  return (
    <div className={styles.period}>
      <h4 className="inputDescription">기간</h4>
      <div>
        <input
          type="number"
          placeholder="YYYY"
          className={styles.year}
          onChange={(e) => setStartYear(e.target.value)}
        />
        <input
          type="number"
          placeholder="MM"
          className={styles.month}
          onChange={(e) => setStartMonth(e.target.value)}
          min={min_month}
          max={max_month}
        />
        <input
          type="number"
          placeholder="YYYY"
          className={styles.year}
          onChange={(e) => setEndYear(e.target.value)}
        />
        <input
          type="number"
          placeholder="MM"
          className={styles.month}
          onChange={(e) => setEndMonth(e.target.value)}
          min={min_month}
          max={max_month}
        />
        <input
          type="checkbox"
          name="Proceeding"
          id="Proceeding"
          onChange={(e) => console.log(e.target.checked)}
        />
      </div>
    </div>
  )
}
