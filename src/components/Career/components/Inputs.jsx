import React, { useEffect, useRef, useState } from 'react'
import styles from '../CareerInput.module.css'

export default function Inputs({ resumeData, setResumeData }) {
  const [career, setCareer] = useState([
    { id: 1, start: '', end: '', companyName: '', works: '' },
  ])

  /** 객체가 모두 채워졌는지 확인, true면 덜 입력된 값이 존재 */
  // const isEmpty = (obj) => {
  //   return !Object.values(obj).every(
  //     (x) => x !== null && x !== '' && x !== undefined
  //   )
  // }

  useEffect(() => {
    setResumeData({ ...resumeData, career })
  }, [career])

  const nextId = useRef(1)

  const val = {
    id: nextId.current,
    start: '',
    end: '',
    companyName: '',
    works: '',
  }

  const handleAdd = (e) => {
    e.preventDefault()
    nextId.current += 1
    val.id = nextId.current
    setCareer([...career, val])
  }

  return (
    <main>
      <h2>Career</h2>
      <div className={styles.inputWrap}>
        {career &&
          career.map((el) => (
            <Input id={el.id} career={career} setCareer={setCareer} />
          ))}
      </div>
      <button type="button" className="addBtn" onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </main>
  )
}

const Input = (props) => {
  const [works, setWorks] = useState('')

  const handleWorks = (e) => {
    setWorks(e.target.value)
  }

  useEffect(() => {
    let findIndex = props.career.findIndex((item) => item.id === props.id)
    let copiedItems = [...props.career]
    copiedItems[findIndex].works = works

    props.setCareer(copiedItems)
  }, [works])

  return (
    <div id={props.id} className={styles.cont}>
      <Period id={props.id} setCareer={props.setCareer} career={props.career} />
      <CompanyName
        id={props.id}
        setCareer={props.setCareer}
        career={props.career}
      />
      <textarea
        id={props.id}
        setCareer={props.setCareer}
        career={props.career}
        placeholder="담당 업무"
        onChange={handleWorks}
      ></textarea>
    </div>
  )
}

const Period = ({ id, career, setCareer }) => {
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  const handleStart = (e) => {
    setStart(e.target.value)
  }

  const handleEnd = (e) => {
    setEnd(e.target.value)
  }

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
        <input type="month" id={id} onChange={handleStart} />
      </div>
      <div className={styles.end}>
        <label htmlFor="" className="inputDescription">
          종료일
        </label>
        <input id={id} type="month" onChange={handleEnd} />
      </div>
    </div>
  )
}

const CompanyName = ({ id, career, setCareer }) => {
  const [name, setName] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }

  useEffect(() => {
    let findIndex = career.findIndex((item) => item.id === id)
    let copiedItems = [...career]
    copiedItems[findIndex].companyName = name

    setCareer(copiedItems)
  }, [name])

  return (
    <div className={styles.company}>
      <label htmlFor="" className="inputDescription">
        회사명
      </label>
      <input
        id={id}
        type="text"
        placeholder="예) 네이버 (NAVER) "
        onChange={handleName}
      />
    </div>
  )
}
