import React, { useEffect, useState } from 'react'
import styles from './CareerInput.module.css'

export default function CareerInput({
  setResumeData,
  resumeData,
  setFormName,
}) {
  const [career, setCareer] = useState(resumeData.career)

  useEffect(() => {
    setResumeData({ ...resumeData, career: career })
  }, [career])

  const handleAdd = (e) => {
    e.preventDefault()
    setCareer([
      ...career,
      {
        start: '',
        end: '',
        companyName: '',
        works: '',
      },
    ])
  }

  const handleUpdate = (idx, e) => {
    const { name, value } = e.target
    setCareer(
      career.map((data, i) => (i === idx ? { ...data, [name]: value } : data))
    )
  }

  const handleDelete = (idx) => {
    setCareer(career.filter((data, i) => i !== idx))
  }

  console.log('career', career)

  return (
    <main>
      <h2>Career</h2>
      <div className={styles.inputWrap}>
        {career &&
          career.map((careerData, idx) => (
            <Input
              key={idx}
              idx={idx}
              careerData={careerData}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              setFormName={setFormName}
            />
          ))}
      </div>
      <button type="button" className="addBtn" onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </main>
  )
}

const Input = ({
  idx,
  careerData,
  handleUpdate,
  handleDelete,
  setFormName,
}) => {
  return (
    <form
      id={`form-career-${idx}`}
      name={`career-${idx}`}
      className={styles.cont}
      onSubmit={(e) => e.preventDefault()}
      onClick={(e) => {
        setFormName(e.currentTarget.name)
      }}
    >
      <div className={styles.company}>
        <label className="inputDescription" htmlFor={`companyName-${idx}`}>
          회사명
        </label>
        <input
          id={`companyName-${idx}`}
          type="text"
          name="companyName"
          placeholder="예) 네이버 (NAVER)"
          value={careerData.companyName}
          onChange={(e) => handleUpdate(idx, e)}
          autoComplete="off"
          onInvalid={(e) =>
            e.target.setCustomValidity('회사명은 반드시 입력되어야합니다')
          }
          onInput={(e) => setFormName(`career-${parseInt(idx) + 1}`)}
          required={!careerData.companyName ? true : false}
        />
        <button className={styles.delBtn}>
          <img
            src="MAKE-RE/images/delete-icon.svg"
            alt="삭제"
            onClick={() => handleDelete(idx)}
          />
        </button>
      </div>
      <div className={styles.period}>
        <div className={styles.start}>
          <label className="inputDescription" htmlFor={`start-form-${idx}`}>
            시작일
          </label>
          <input
            id={`start-form-${idx}`}
            type="month"
            max="9999-12"
            name="start"
            value={careerData.start}
            onChange={(e) => handleUpdate(idx, e)}
          />
        </div>
        <div className={styles.end}>
          <label htmlFor={`end-form-${idx}`} className="inputDescription">
            종료일
          </label>
          <input
            id={`end-form-${idx}`}
            type="month"
            name="end"
            max="9999-12"
            value={careerData.end}
            onChange={(e) => handleUpdate(idx, e)}
          />
        </div>
      </div>
      <textarea
        id={idx}
        placeholder="담당 업무"
        name="works"
        value={careerData.works}
        onChange={(e) => handleUpdate(idx, e)}
      ></textarea>
    </form>
  )
}
