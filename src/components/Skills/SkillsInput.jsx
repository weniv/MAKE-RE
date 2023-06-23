import { useState, useEffect } from 'react'
import styles from './SkillsInput.module.css'

function SkillsInput({ resumeData, setResumeData }) {
  const [skill, setSkill] = useState(initValue())

  function initValue() {
    if (resumeData.skills) {
      return resumeData.skills
    } else {
      return ['', '']
    }
  }

  // 스킬 추가
  const HandleAdd = () => {
    setSkill([...skill, ''])
  }

  // 스킬 삭제
  function handleDelete(idx) {
    setSkill(skill.filter((item, i) => i !== idx))
  }

  useEffect(() => {
    setResumeData({ ...resumeData, skills: skill })
  }, [skill])

  return (
    <section>
      <h2>Skills</h2>
      <div className={styles.skillFlexBox}>
        {skill.map((item, idx) => {
          return (
            <div key={idx} className={styles.SkillsInputBox}>
              <label htmlFor={'skill' + idx}></label>
              <input
                className={styles.skillInput}
                type="text"
                id={'skill' + idx}
                key={idx}
                placeholder="예) JavaScript"
                value={item}
                onChange={(e) => {
                  setSkill(
                    skill.map((item, i) => (i === idx ? e.target.value : item))
                  )
                }}
              />
              <button
                className={styles.btnDel}
                onClick={() => handleDelete(idx)}
              >
                <img src="MAKE-RE/images/delete-icon.svg" alt="삭제" />
              </button>
            </div>
          )
        })}
      </div>
      <button className={`addBtn ${styles.skillBtn}`} onClick={HandleAdd}>
        +) 추가 입력하기
      </button>
    </section>
  )
}

export default SkillsInput
