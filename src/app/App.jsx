import Write from '../pages/Write'
import Preview from '../pages/Preview'
import { useState } from 'react'

import styles from './style.module.css'

function App() {
  const [isWrite, setIsWrite] = useState(true)

  return (
    <div className={`${App} ${styles.pageWrap}`}>
      {isWrite ? (
        <>
          <header className={styles.headerWrap}>
            <h1>
              메이커리
              <span> Make A Career</span>
            </h1>
            <button className={`${styles.header} ${styles.saveBtn}`}>
              임시저장
            </button>
            <button
              className={styles.prevBtn}
              onClick={() => {
                setIsWrite(false)
              }}
            >
              미리보기
            </button>
            <button className={styles.exportBtn}>PDF로 내보내기</button>
            <div className={styles.line}></div>
          </header>
          <Write />
        </>
      ) : (
        <>
          <header className={styles.headerWrap}>
            <button
              className={styles.prevBtn}
              onClick={() => {
                setIsWrite(true)
              }}
            >
              돌아가기
            </button>
            <button className={styles.exportBtn}>PDF로 내보내기</button>
            <div className={styles.line}></div>
          </header>
          <Preview />
        </>
      )}
    </div>
  )
}

export default App
