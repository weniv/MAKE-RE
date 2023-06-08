import Write from '../pages/Write'
import Preview from '../pages/Preview'
import { useState } from 'react'

import styles from './style.module.css'

function App() {
  const dummyData = {
    name: '전유진',
    enName: 'YouJin Jeon',
    experience: [
      { year: 2020, contents: 'ICT 해외 봉사' },
      { year: 2022, contents: '교육 기부 박람회' },
    ],
    url: [
      { contents: '제주도 캐글 밋업', link: 'www.github.com' },
      { contents: '네이버로 이동', link: 'www.naver.com' },
    ],
  }
  const [isWrite, setIsWrite] = useState(true)
  const [resumeData, setResumeData] = useState(dummyData)

  const dataUpdateHandler = () => {
    localStorage.setItem('data', JSON.stringify(resumeData))
  }

  // console.log(resumeData)

  return (
    <div className={`${App} ${styles.pageWrap}`}>
      {isWrite ? (
        <>
          <header className={styles.headerWrap}>
            <h1>
              메이커리
              <span> Make A Career</span>
            </h1>
            <button
              className={`${styles.header} ${styles.saveBtn}`}
              onClick={dataUpdateHandler}
            >
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
          <Write setResumeData={setResumeData} resumeData={resumeData} />
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
          <Preview resumeData={resumeData} />
        </>
      )}
    </div>
  )
}

export default App
