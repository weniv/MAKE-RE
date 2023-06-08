import React, { useEffect, useRef, useState } from 'react'
import styles from './experience.module.css'

export default function Experience({ setResumeData, resumeData }) {
  const [experience, setExperience] = useState(resumeData.experience)

  useEffect(() => {
    console.log(JSON.stringify(experience))
    setResumeData({ ...resumeData, experience: experience })
  }, [experience])

  function handleAdd() {
    setExperience([...experience, { year: '', contents: '' }])
  }

  function handleDelete(idx) {
    setExperience(experience.filter((exp, i) => i !== idx))
  }

  function handleUpdate(idx, name, value) {
    // const { name, value } = event.target
    setExperience(
      experience.map((exp, i) => (i === idx ? { ...exp, [name]: value } : exp))
    )
  }

  return (
    <section className={styles.exp}>
      <h2>Experience</h2>
      {experience &&
        experience.map((exp, idx) => (
          <ExpContent
            key={idx}
            idx={idx}
            exp={exp}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      <button className={`addBtn ${styles.btnAdd}`} onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </section>
  )
}

function ExpContent({ exp, idx, handleDelete, handleUpdate }) {
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

  const handleItemClick = (idx, item) => {
    handleUpdate(idx, 'year', item)
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
                <li key={i} onClick={() => handleItemClick(idx, v)}>
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
        value={exp.contents}
        onChange={(e) => handleUpdate(idx, 'contents', e.target.value)}
      />
      <button className={styles.btnDel}>
        <img
          src="/images/delete-icon.svg"
          alt="삭제"
          onClick={() => handleDelete(idx)}
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
