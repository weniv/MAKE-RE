import React from 'react'
import styles from '../CareerInput.module.css'

export default function Inputs() {
  return (
    <main>
      <h2>Career</h2>
      <div className={styles.cont}>
        <Period />
        <Company />
        <textarea placeholder="담당 업무"></textarea>
      </div>
      <button type="button" className="skillBtn ">
        +) 추가 입력하기
      </button>
    </main>
  )
}

const Period = () => {
  return (
    <div className={styles.deploy}>
      <h4 className="inputDescription">기간</h4>
      <input type="text" placeholder="예) 2019. 01. 01 ~ 2019. 01. 03" />
    </div>
  )
}

const Company = () => {
  return (
    <div className={styles.company}>
      <h4 className="inputDescription">회사명</h4>
      <input type="text" placeholder="예) 네이버 (NAVER) " />
    </div>
  )
}
