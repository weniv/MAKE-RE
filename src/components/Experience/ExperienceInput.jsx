import React, { useEffect, useRef, useState } from 'react'
import styles from './ExperienceInput.module.css'

export default function Experience({ setResumeData, resumeData }) {
  const [experience, setExperience] = useState(resumeData.experience)

  useEffect(() => {
    setResumeData({ ...resumeData, experience: experience })
  }, [experience])

  function handleAdd() {
    setExperience([...experience, { date: '', contents: '' }])
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
  return (
    <div className={styles.contContents}>
      <input
        type="month"
        className={styles.inpDate}
        value={exp.date}
        onChange={(e) => handleUpdate(idx, 'date', e.target.value)}
      />
      <input
        className={styles.inpItem}
        type="text"
        placeholder="예) ICT 해외봉사"
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
