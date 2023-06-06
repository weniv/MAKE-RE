import styles from './SkillsInput.module.css'

function SkillsInput() {
  return (
    <section>
      <h2>Skills</h2>
      <div className={styles.skillFlexBox}>
        <input
          className={styles.skillInput}
          type="text"
          placeholder="예) JavaScript"
        />
        <input className={styles.skillInput} type="text" />
      </div>
      <button className={styles.skillBtn}>+) 추가 입력하기</button>
    </section>
  )
}

export default SkillsInput
