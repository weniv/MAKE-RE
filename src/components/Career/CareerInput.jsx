import React, { useEffect, useRef, useState } from 'react'
import styles from './CareerInput.module.css'
import Period from './components/Period'
import CompanyName from './components/CompanyName'

export default function CareerInput({ setResumeData, resumeData }) {
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

  const handleDelete = (id) => {
    setCareer(career.filter((el) => el.id !== id))
  }

  return (
    <main>
      <h2>Career</h2>
      <div className={styles.inputWrap}>
        {career &&
          career.map((el) => (
            <Input
              id={el.id}
              career={career}
              setCareer={setCareer}
              handleDelete={handleDelete}
            />
          ))}
      </div>
      <button type="button" className="addBtn" onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </main>
  )
}

const Input = ({ id, career, setCareer, handleDelete }) => {
  const [works, setWorks] = useState('')

  useEffect(() => {
    let findIndex = career.findIndex((item) => item.id === id)
    let copiedItems = [...career]
    copiedItems[findIndex].works = works

    setCareer(copiedItems)
  }, [works])

  return (
    <div id={id} className={styles.cont}>
      <CompanyName
        id={id}
        setCareer={setCareer}
        career={career}
        handleDelete={handleDelete}
      />
      <Period id={id} setCareer={setCareer} career={career} />
      <textarea
        id={id}
        setCareer={setCareer}
        career={career}
        placeholder="담당 업무"
        onChange={(e) => setWorks(e.target.value)}
      ></textarea>
    </div>
  )
}
