import React, { useEffect, useRef, useState } from 'react'
import styles from '../CareerInput.module.css'

export default function Inputs(props) {
  const [career, setCareer] = useState([])
  const [period, setperiod] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [work, setWork] = useState()

  useEffect(() => {
    props.setResumeData({ career })
  }, [career])

  const val = {
    id: 1,
    period,
    companyName,
    work,
  }

  const nextId = useRef(1)

  const handlePeriod = (e) => {
    setperiod(e.target.value)
  }

  const handleCompanyName = (e) => {
    setCompanyName(e.target.value)
  }

  const handleWork = (e) => {
    setWork(e.target.value.split('\n'))
  }

  const handleAdd = (e) => {
    e.preventDefault()
    val.id = nextId.current
    val.period = period
    nextId.current += 1
    setCareer([...career, val])
  }

  // console.log(props)

  return (
    <main>
      <h2>Career</h2>
      <Input
        period={handlePeriod}
        companyName={handleCompanyName}
        work={handleWork}
      />
      {career &&
        career.map(() => (
          <div className={styles.cont}>
            <Period fuc={handlePeriod} />
            <CompanyName fuc={handleCompanyName} />
            <textarea placeholder="담당 업무" onChange={handleWork}></textarea>
          </div>
        ))}
      <button type="button" className="skillBtn" onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </main>
  )
}

const Input = (props) => {
  return (
    <div className={styles.cont}>
      <Period fuc={props.period} />
      <CompanyName fuc={props.companyName} />
      <textarea placeholder="담당 업무" onChange={props.work}></textarea>
    </div>
  )
}

const Period = (props) => {
  return (
    <div className={styles.deploy}>
      <label htmlFor="" className="inputDescription">
        기간
      </label>
      <input
        type="text"
        placeholder="예) 2019. 01. 01 ~ 2019. 01. 03"
        onChange={props.fuc}
      />
    </div>
  )
}

const CompanyName = (props) => {
  return (
    <div className={styles.company}>
      <label htmlFor="" className="inputDescription">
        회사명
      </label>
      <input
        type="text"
        placeholder="예) 네이버 (NAVER) "
        onChange={props.fuc}
      />
    </div>
  )
}
