import Write from '../pages/Write'
import Preview from '../pages/Preview'
import { useEffect, useState } from 'react'

import styles from './style.module.css'

function App() {
  const dummyData = {
    name: '전유진',
    enName: 'YouJin Jeon',
    experience: [
      { year: 2020, contents: 'ICT 해외 봉사' },
      { year: 2022, contents: '교육 기부 박람회' },
    ],
    certificate: [
      { year: 2020, contents: '컴퓨터 활용능력 1급' },
      { year: 2023, contents: '정보처리기사' },
    ],
    education: [
      { year: 2021, contents: '한국대학교 졸업' },
      { year: 2022, contents: '프론트엔드스쿨 3기 수료' },
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

  return isWrite ? (
    <>
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
      <div className={`${App} ${styles.pageWrap}`}>
        <Write setResumeData={setResumeData} resumeData={resumeData} />
      </div>
    </>
  ) : (
    <>
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
                className={styles.prevBtn}
                onClick={() => {
                  setIsWrite(true)
                }}
              >
                돌아가기
              </button>
            </li>
            <li>
              <button className={styles.exportBtn}>PDF로 내보내기</button>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.prevWrap}>
        <Preview resumeData={resumeData} />
      </div>
    </>
  )
}

export default App
