import React, { useEffect, useRef, useState } from 'react'
import styles from '../CareerInput.module.css'

export default function Inputs(props) {
  const [career, setCareer] = useState([
    { id: 1, start: '', end: '', companyName: '', works: '' },
  ])
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [works, setWorks] = useState('')
  const [curId, setCurId] = useState(0)

  /** 객체가 모두 채워졌는지 확인, true면 덜 입력된 값이 존재 */
  // const isEmpty = (obj) => {
  //   return !Object.values(obj).every(
  //     (x) => x !== null && x !== '' && x !== undefined
  //   )
  }

  const nextId = useRef(1)

  const val = {
    id: nextId.current,
    start,
    end,
    companyName,
    works,
  }

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
    setWorks(e.target.value)
  }

  /** 새로운 input 추가 생성 */
  const handleAdd = (e) => {
    e.preventDefault()
    nextId.current += 1
    val.id = nextId.current
    setCareer([...career, val])
    setStart('')
    setEnd('')
    setCompanyName('')
    setWorks('')
  }

  const handleDown = (e) => {
    setCurId(e.currentTarget.id)
    setStart('')
    setEnd('')
    setCompanyName('')
    setWorks('')
  }

  let copiedItems = [...career]

  const handleMove = (e) => {
    let findIndex = career.findIndex(
      (item) => item.id === parseInt(e.currentTarget.id)
    )
    copiedItems[findIndex].companyName = findIndex.companyName

    setCareer(copiedItems)
  }

  useEffect(() => {
    console.log('change')
    props.setResumeData({ ...props.resumeData, career })
  }, [curId])

  // console.log('curId')
  // console.log(curId)

  // console.log('career')
  // career.map((el) => console.log(el))

  console.log('resumeData')
  props.resumeData.career &&
    props.resumeData.career.map((el) => console.log(el))

  return (
    <main>
      <h2>Career</h2>
      <div className={styles.inputWrap}>
        {career &&
          career.map((el, idx) => (
            <Input
              id={el.id}
              handleStart={handleStart}
              handleEnd={handleEnd}
              handleCompanyName={handleCompanyName}
              handleWork={handleWork}
              down={handleDown}
              move={handleMove}
              companyName={companyName}
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
    <div
      id={props.id}
      className={styles.cont}
      onMouseDown={props.down}
      onMouseMove={props.move}
    >
      <Period handleStart={props.handleStart} handleEnd={props.handleEnd} />
      <CompanyName
        handleCompanyName={props.handleCompanyName}
        value={props.companyName}
      />
      <textarea placeholder="담당 업무" onChange={props.handleWork}></textarea>
    </div>
  )
}

const Period = (props) => {
  return (
    <div className={styles.period}>
      <div className={styles.start}>
        <label htmlFor="" className="inputDescription">
          시작일
        </label>
        <input type="month" onChange={props.handleStart} />
      </div>
      <div className={styles.end}>
        <label htmlFor="" className="inputDescription">
          종료일
        </label>
        <input type="month" onChange={props.handleEnd} />
      </div>
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
        onChange={props.handleCompanyName}
      />
    </div>
  )
}
