import { useState, useEffect, useRef } from 'react'
import styles from './EducationInput.module.css'

export default function EducationInput({ resumeData, setResumeData }) {
  const [education, setEducation] = useState(resumeData.education)

  useEffect(() => {
    setResumeData({ ...resumeData, education })
  }, [education])

  function handleAdd() {
    setEducation([...education, { date: '', contents: '' }])
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
            key={idx}
            idx={idx}
            edu={edu}
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
  const dropdownRef = useRef(null)

  return (
    <div className={styles.contentCont} ref={dropdownRef}>
      <input
        type="month"
        value={edu.date}
        className={styles.dateInput}
        onChange={(e) => handleUpdate(idx, 'date', e.target.value)}
      />
      <input
        type="text"
        value={edu.contents}
        className={styles.contentInput}
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
