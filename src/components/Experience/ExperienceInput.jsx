import React, { useEffect, useRef, useState } from 'react'
import styles from './experience.module.css'

export default function Experience({ setResumeData, resumeData }) {
  const [experience, setExperience] = useState([
    { id: 1, year: '', contents: '' },
  ])
  const nextId = useRef(2)

  useEffect(() => {
    setResumeData({ ...resumeData, experience: experience })
  }, [experience])

  function handleAdd() {
    setExperience([
      ...experience,
      { id: nextId.current, year: '', contents: '' },
    ])
    nextId.current += 1
  }

  function handleDelete(id) {
    setExperience(experience.filter((exp) => exp.id !== id))
  }

  function handleUpdate(id, name, value) {
    // const { name, value } = event.target
    setExperience(
      experience.map((exp) => (exp.id === id ? { ...exp, [name]: value } : exp))
    )
  }

  return (
    <section className={styles.exp}>
      <h2>Experience</h2>
      {experience &&
        experience.map((exp, i) => (
          <ExpContent
            key={exp.id}
            exp={exp}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      <button className={`skillBtn ${styles.btnAdd}`} onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </section>
  )
}

function ExpContent({ exp, handleDelete, handleUpdate }) {
  const [value, setValue] = useState(exp.contents)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleItemClick = (item) => {
    handleUpdate(exp.id, 'year', item)
    setIsOpen(false)
  }

  function handleOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.contContents} ref={dropdownRef}>
      <div className={styles.contYear}>
        <button className={styles.btnYear} onClick={handleOpen}>
          {exp.year ? exp.year : '연도'}
          {isOpen ? (
            <img src="/images/polygon-up-icon.svg" alt="" />
          ) : (
            <img src="/images/polygon-down-icon.svg" alt="" />
          )}
        </button>
        {isOpen && (
          <ul className={styles.listYear}>
            {YearList().map((v, i) => {
              return (
                <li key={i} onClick={() => handleItemClick(v)}>
                  {v}
                </li>
              )
            })}
          </ul>
        )}
      </div>
      <input
        className={styles.inpItem}
        type="text"
        placeholder="예) ICT 해외봉사"
        required
        onChange={(e) => handleUpdate(exp.id, 'contents', e.target.value)}
      />
      <button className={styles.btnDel}>
        <img
          src="/images/delete-icon.svg"
          alt="삭제"
          onClick={() => handleDelete(exp.id)}
        />
      </button>
    </div>
  )
}

function YearList() {
  const year = []
  const birthYear = 2000
  for (let i = 2023; i >= birthYear; i--) {
    year.push(i)
  }
  return year
}
