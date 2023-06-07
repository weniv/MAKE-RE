import React, { useEffect, useRef, useState } from 'react'
import styles from './experience.module.css'

export default function ExperienceInput() {
  const [experience, setExperience] = useState([
    { id: 1, year: '', contents: '' },
  ])
  const nextId = useRef(2)

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

  return (
    <section className={styles.exp}>
      <h3 className={styles.title}>Experience</h3>
      {experience &&
        experience.map((exp, i) => (
          <ExpContent key={exp.id} exp={exp} handleDelete={handleDelete} />
        ))}
      <button className={styles.btn_add} onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </section>
  )
}

function ExpContent({ exp, handleDelete }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(exp.year)

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
    setSelected(item)
    setIsOpen(false)
  }

  function handleOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.cont_contents} ref={dropdownRef}>
      <div className={styles.cont_year}>
        <button className={styles.btn_year} onClick={handleOpen}>
          {selected ? selected : '연도'}
          {isOpen ? (
            <img src="/images/polygon-up-icon.svg" alt="" />
          ) : (
            <img src="/images/polygon-down-icon.svg" alt="" />
          )}
        </button>
        {isOpen && (
          <ul className={styles.list_year}>
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
        className={styles.inp_item}
        type="text"
        placeholder="예) ICT 해외봉사"
      />
      <button className={styles.btn_del}>
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
