import React, { useState } from 'react'
import styles from './header.module.css'

export default function Header({ resumeData }) {
  const [isWrite, setIsWrite] = useState(true)

  const dataUpdateHandler = () => {
    localStorage.setItem('data', JSON.stringify(resumeData))
  }

  return (
    <header className={styles.headerWrap}>
      <h1 className={`${styles.logoWrap} ${styles.title}`}>
        <img src="/images/logo.svg" alt="" />
        메이커리
        <span> Make A Career</span>
      </h1>
      <nav className={styles.headerNav}>
        <ul>
          <li>
            <button
              className={`${styles.header} ${styles.saveBtn}`}
              onClick={dataUpdateHandler}
            >
              임시저장
            </button>
          </li>
          <li>
            <button
              className={styles.prevBtn}
              onClick={() => {
                setIsWrite(false)
              }}
            >
              미리보기
            </button>
          </li>
          <li>
            <button className={styles.exportBtn}>PDF로 내보내기</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
