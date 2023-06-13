import Write from '../pages/Write'
import Preview from '../pages/Preview'
import { useEffect, useState } from 'react'

import styles from './style.module.css'

function App() {
  const dummyData = {
    name: '전유진',
    enName: 'YouJin Jeon',
    project: [
      {
        title: '',
        outline: '',
        people: '',
        startPeriod: '',
        endPeriod: '',
        progress: false,
        contributes: [],
        skills: [],
        github: '',
        link: '',
      },
    ],
    experience: [
      { date: '2023-02', contents: '테스트1 입니다' },
      { date: '2023-06', contents: '테스트2 입니다' },
    ],
    certificate: [{ date: '2023-03', contents: '컴퓨터 활용능력 1급' }],
    education: [{ date: '2023-04', contents: '정보처리기사' }],
    url: [
      { contents: '제주도 캐글 밋업', link: 'www.github.com' },
      { contents: '네이버로 이동', link: 'www.naver.com' },
    ],
  }
  const [isWrite, setIsWrite] = useState(true)
  const [resumeData, setResumeData] = useState(initValue())
  function initValue() {
    if (localStorage.getItem('data')) {
      return JSON.parse(localStorage.getItem('data'))
    } else {
      // 추후 초기 데이터 수정 필요
      return dummyData
    }
  }

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
