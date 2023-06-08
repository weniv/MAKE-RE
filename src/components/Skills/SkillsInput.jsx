import { useState } from 'react'
import styles from './SkillsInput.module.css'

function SkillsInput() {
  const [skillCount, setSkillCount] = useState([''])

  const addBtnHandler = () => {
    setSkillCount([...skillCount, ''])
  }

  return (
    <section>
      <h2>Skills</h2>
      <div className={styles.skillFlexBox}>
        <input
          className={styles.skillInput}
          type="text"
          placeholder="예) JavaScript"
        />
        {skillCount.map((item, idx) => {
          return <input className={styles.skillInput} type="text" key={idx} />
        })}
      </div>
      <button className={`addBtn ${styles.skillBtn}`} onClick={addBtnHandler}>
        +) 추가 입력하기
      </button>
    </section>
  )
}

export default SkillsInput
