import { useState, useEffect, useRef } from 'react'
import styles from './EducationInput.module.css'

export default function EducationInput({ resumeData, setResumeData }) {
  const [education, setEducation] = useState(resumeData.education)

  useEffect(() => {
    setResumeData({ ...resumeData, education })
  }, [education])

  function handleAdd() {
    setEducation([...education, { year: '', contents: '' }])
  }

  function handleDelete(idx) {
    setEducation(education.filter((edu, i) => i !== idx))
  }

  function handleUpdate(idx, name, value) {
    setEducation(
      education.map((edu, i) => (i === idx ? { ...edu, [name]: value } : edu))
    )
  }

  return (
    <section>
      <h2>Education</h2>
      {education &&
        education.map((edu, idx) => (
          <EduContent
            key={edu.id}
            edu={edu}
            idx={idx}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      <button className={`addBtn ${styles.addBtn}`} onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </section>
  )
}

function EduContent({ edu, idx, handleDelete, handleUpdate }) {
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
    <div className={styles.contentCont} ref={dropdownRef}>
      <div className={styles.yearCont}>
        <button className={styles.yearBtn} onClick={handleOpen}>
          {edu.year || '연도'}
          {isOpen ? (
            <img src="/images/polygon-up-icon.svg" alt="연도 메뉴 닫기" />
          ) : (
            <img src="/images/polygon-down-icon.svg" alt="연도 메뉴 열기" />
          )}
        </button>
        {isOpen && (
          <ol className={styles.yearList}>
            {getYearList().map((v, i) => {
              return (
                <li key={i} onClick={() => handleItemClick(idx, v)}>
                  <button>{v}</button>
                </li>
              )
            })}
          </ol>
        )}
      </div>
      <input
        className={styles.contentInput}
        type="text"
        required
        value={edu.contents}
        placeholder="예) 프론트엔드 스쿨 과정 3기 수료 (4개월)"
        onChange={(e) => handleUpdate(idx, 'contents', e.target.value)}
      />
      <button className={styles.deleteBtn}>
        <img
          src="/images/delete-icon.svg"
          alt="삭제"
          onClick={() => handleDelete(idx)}
        />
      </button>
    </div>
  )
}

function getYearList() {
  const yearList = []
  const currentYear = new Date().getFullYear()

  for (let i = 0; i < 20; i++) {
    yearList.push(currentYear - i)
  }

  return yearList
}
