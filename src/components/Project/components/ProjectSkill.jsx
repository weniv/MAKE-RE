import React, { useEffect, useRef, useState } from 'react'
import styles from '../ProjectInput.module.css'

export default function ProjectSkill({ id, project, setProject }) {
  const [skill, setSkill] = useState([{ id: 1, skill: '' }])
  const [skillVal, setSkillVal] = useState('')
  const [curId, setCurId] = useState(1)

  // useEffect(() => {
  //   let findIndex = project.findIndex((item) => item.id === id)
  //   let copiedItems = [...project]
  //   copiedItems[findIndex].skill = skill

  //   setProject(copiedItems)
  // }, [skill])

  const nextId = useRef(1)

  const val = {
    id: nextId.current,
    skill: '',
  }

  useEffect(() => {
    let findIndex = skill.findIndex((item) => item.id === parseInt(curId))
    let copiedItems = [...skill]
    copiedItems[findIndex].skill = skillVal
    setSkill(copiedItems)
  }, [skill.length, skillVal, curId])

  const handleAdd = (e) => {
    e.preventDefault()
    nextId.current += 1
    val.id = nextId.current
    setSkill([...skill, val])
  }

  return (
    <>
      <h3 className={styles.subTitle}>적용 기술</h3>
      <div className={styles.skill}>
        {skill &&
          skill.map((el, idx) => (
            <input
              key={idx}
              id={el.id}
              type="text"
              placeholder="예) Java"
              onChange={(e) => setSkillVal(e.target.value)}
              onMouseDown={(e) => setCurId(e.target.id)}
            />
          ))}
      </div>
      <button type="button" className="addBtn" onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </>
  )
}
