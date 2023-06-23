import React, { useState, useRef } from 'react'
import styles from './header.module.css'
import { useReactToPrint } from 'react-to-print'

export default function Header({ resumeData }) {
  const [isWrite, setIsWrite] = useState(true)
  const [formName, setFormName] = useState('')
  const componentRef = useRef(null)

  const dataUpdateHandler = () => {
    localStorage.setItem('data', JSON.stringify(resumeData))
  }

  function handleDataUpdate() {
    localStorage.setItem('data', JSON.stringify(resumeData))
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: '이력서',
  })

  return isWrite ? (
    <>
      <header className={styles.headerWrap}>
        <h1 className={`${styles.logoWrap} ${styles.title}`}>
          <img src="MAKE-RE/images/makere-logo.svg" alt="" />
        </h1>
        <nav className={styles.headerNav}>
          <ul>
            <li>
              <button
                form={`form-${formName}`}
                className={`${styles.header} ${styles.saveBtn}`}
                onClick={handleDataUpdate}
              >
                임시저장
              </button>
            </li>
            <li>
              <button
                className={styles.prevBtn}
                onClick={(e) => {
                  setIsWrite(false)
                  handleDataUpdate()
                }}
                form={`form-${formName}`}
              >
                미리보기
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  ) : (
    <>
      <header className={styles.headerWrap}>
        <h1 className={`${styles.logoWrap} ${styles.title}`}>
          <img src="MAKE-RE/images/makere-logo.svg" alt="" />
        </h1>
        <nav className={styles.headerNav}>
          <ul>
            <li>
              <button
                className={styles.prevBtn}
                onClick={() => {
                  setIsWrite(true)
                }}
              >
                돌아가기
              </button>
            </li>
            <li>
              <button className={styles.exportBtn} onClick={handlePrint}>
                PDF로 내보내기
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
