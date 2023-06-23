import React, { useRef } from 'react'
import styles from './header.module.css'
import { useReactToPrint } from 'react-to-print'
import { useNavigate } from 'react-router'

export default function PreviewHeader({ componentRef }) {
  const navigate = useNavigate()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: '이력서',
  })

  return (
    <header className={styles.headerWrap}>
      <h1
        className={`${styles.logoWrap} ${styles.title}`}
        onClick={() => navigate('/')}
      >
        <img src="images/makere-logo.svg" alt="" />
      </h1>
      <nav className={styles.headerNav}>
        <ul>
          <li>
            <button
              className={styles.prevBtn}
              onClick={() => {
                navigate('/')
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
  )
}
