import React, { useEffect, useRef, useState } from 'react'
import styles from '../CareerInput.module.css'

export default function Inputs(props) {
  const [career, setCareer] = useState([])
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [works, setWorks] = useState()

  useEffect(() => {
    props.setResumeData({ ...props.resumeData, career })
  }, [career])

  const val = {
    id: 1,
    start,
    end,
    companyName,
    works,
  }

  const nextId = useRef(1)

  const handleStart = (e) => {
    setStart(e.target.value.replace('-', '.'))
  }

  const handleEnd = (e) => {
    setEnd(e.target.value.replace('-', '.'))
  }

  const handleCompanyName = (e) => {
    setCompanyName(e.target.value)
  }

  const handleWork = (e) => {
    setWorks(e.target.value.split('\n'))
  }

  const handleAdd = (e) => {
    e.preventDefault()
    val.id = nextId.current
    nextId.current += 1
    setCareer([...career, val])
  }

  // console.log(career)

  return (
    <main>
      <h2>Career</h2>
      <div className={styles.inputWrap}>
        <Input
          start={handleStart}
          end={handleEnd}
          companyName={handleCompanyName}
          work={handleWork}
        />
        {career &&
          career.map(() => (
            <Input
              start={handleStart}
              end={handleEnd}
              companyName={handleCompanyName}
              work={handleWork}
            />
          ))}
      </div>
      <button type="button" className="addBtn" onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </main>
  )
}

const Input = (props) => {
  return (
    <div className={styles.cont}>
      <Period start={props.start} end={props.end} />
      <CompanyName fuc={props.companyName} />
      <textarea placeholder="담당 업무" onChange={props.work}></textarea>
    </div>
  )
}

const Period = (props) => {
  return (
    <div className={styles.deploy}>
      <label htmlFor="" className="inputDescription">
        시작일
      </label>
      <input type="month" onChange={props.start} />

      <label htmlFor="" className="inputDescription">
        종료일
      </label>
      <input type="month" onChange={props.end} />
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
