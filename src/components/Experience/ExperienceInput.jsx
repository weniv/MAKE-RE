import React from 'react'
import styles from './experience.module.css'

export default function ExperienceInput() {
  return (
    <section className={styles.exp}>
      <h3 className={styles.title}>Experience</h3>
      <ExpContent />
      <ExpContent />
      <ExpContent />
      <ExpContent />
      <button className={styles.btn_add}>+) 추가 입력하기</button>
    </section>
  )
}
function ExpContent() {
  return (
    <div className={styles.cont_contents}>
      <button className={styles.btn_year}>연도</button>
      <ul className={styles.list_year}>
        {YearList().map((v, i) => {
          return <li>{v}</li>
        })}
      </ul>
      <input
        className={styles.inp_item}
        type="text"
        placeholder="예) ICT 해외봉사"
      />
      <button className={styles.btn_del}>
        <img src="/images/delete-icon.svg" alt="삭제" />
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
