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
  const [id, setId] = useState(0)

  /** 객체가 모두 채워졌는지 확인, true면 덜 입력된 값이 존재 */
  const isEmpty = (obj) => {
    return !Object.values(obj).every(
      (x) => x !== null && x !== '' && x !== undefined
    )
  }

  const nextId = useRef(1)

  const val = {
    id: nextId.current,
    start,
    end,
    companyName,
    works,
  }

  useEffect(() => {
    // if (!isEmpty(val)) {
    props.setResumeData({ ...props.resumeData, career })
    // }
  }, [start, end, companyName, works])

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

  // useEffect(() => {
  //   let copy = [...career]
  //   let idx = career.findIndex((el) => el.id === parseInt(id))

  //   console.log('copy[idx]')
  //   console.log(copy[idx])

  //   if (copy[idx]) {
  //     copy[idx].companyName = id
  //   }
  // }, [id])

  const handleMouseMove = (e) => {
    // console.log('move')
  }

  const handleMouseEnter = (e) => {
    setId(e.currentTarget.id)
    testRef()
  }

  const change = () => {
    // let copy = [...career]
    // let idx = career.findIndex((el) => el.id === parseInt(id))
    // console.log('copy[idx]')
    // console.log(copy[idx])
    // if (copy[idx]) {
    //   copy[idx].companyName = id
    // }
    // setCareer(copy)
  }

  const handleMouseLeave = (e) => {
    // console.log('leave')
    // change()
  }

  const companyNameInput = useRef()

  const testRef = (e) => {}

  // console.log(career)

  return (
    <main>
      <h2>Career</h2>
      <div className={styles.inputWrap}>
        {career &&
          career.map((el) => (
            <Input
              id={el.id}
              start={handleStart}
              end={handleEnd}
              companyName={handleCompanyName}
              work={handleWork}
              mouseEnter={handleMouseEnter}
              mouseMove={handleMouseMove}
              mouseLeave={handleMouseLeave}
              companyval={companyName}
              ref={companyNameInput}
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
      onMouseEnter={props.mouseEnter}
      onMouseMove={props.mouseMove}
      onMouseLeave={props.mouseLeave}
      value={props.companyval}
      ref={props.ref}
    >
      {/* <Period start={props.start} end={props.end} /> */}
      <CompanyName fuc={props.companyName} />
      {/* <textarea placeholder="담당 업무" onChange={props.work}></textarea> */}
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
        <input type="month" onChange={props.start} />
      </div>
      <div className={styles.end}>
        <label htmlFor="" className="inputDescription">
          종료일
        </label>
        <input type="month" onChange={props.end} />
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
        onChange={props.fuc}
        required
      />
    </div>
  )
}

const [items, setItems] = useState([
  { id: 1, quantity: 1 },
  { id: 2, quantity: 1 },
])

let findIndex = items.findIndex((item) => item.id === 1)
let copiedItems = [...items]
copiedItems[findIndex].quantity = 2
setItems(copiedItems)
