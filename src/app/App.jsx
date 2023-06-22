import Write from '../pages/Write'
import Preview from '../pages/Preview'
import { useEffect, useRef, useState } from 'react'

import styles from './style.module.css'
import { useReactToPrint } from 'react-to-print'

function App() {
  const dummyData = {
    profileImg: 'https://api.mandarin.weniv.co.kr/1687337079735.png',
    name: '전유진',
    enName: 'YouJin Jeon',
    phoneNumber: '010-6878-0493',
    fullEmail: 'weniv@email.com',
    github: 'https://github.com/Iam-Ujin',
    blog: 'https://github.com/Iam-Ujin',
    newcomer: 'true',
    intro: '웹 풀스택을 꿈꾸는 개발자 전유진입니다.',
    skills: [''],
    career: [{ id: 1, start: '', end: '', companyName: '', works: '' }],
    project: [
      {
        id: 1,
        title: '111111',
        outline: '',
        people: '',
        startPeriod: '',
        endPeriod: '',
        progress: false,
        contributes: [''],
        skills: [''],
        github: '',
        demo: '',
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
  const [formNum, setFormNum] = useState(0)
  const componentRef = useRef(null)

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

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: '이력서',
  })
  console.log('formNum', formNum)

  return isWrite ? (
    <>
      <header className={styles.headerWrap}>
        <h1 className={`${styles.logoWrap} ${styles.title}`}>
          <img src="/images/makere-logo.svg" alt="" />
          {/* <span> Make A Career</span> */}
        </h1>
        <nav className={styles.headerNav}>
          <ul>
            <li>
              <button
                form={`career-form-${formNum}`}
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
              <a
                href="https://paullabworkspace.notion.site/Figma-bfa32213fc244db9b31bb8486a479ee6?pvs=4"
                target="_blank"
                rel="noreferrer"
              >
                Figma 이력서
              </a>
            </li>
            <li>
              <a href="/files/제코베_포트폴리오_템플릿_배포용.pptx" download>
                PPT 포트폴리오
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className={`${App} ${styles.pageWrap}`}>
        <Write
          setResumeData={setResumeData}
          resumeData={resumeData}
          setFormNum={setFormNum}
        />
      </div>
    </>
  ) : (
    <>
      <header className={styles.headerWrap}>
        <h1 className={`${styles.logoWrap} ${styles.title}`}>
          <img src="/images/makere-logo.svg" alt="" />
          {/* <span> Make A Career</span> */}
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
      <div className={styles.prevWrap}>
        <Preview resumeData={resumeData} componentRef={componentRef} />
      </div>
    </>
  )
}

export default App
