import { useEffect, useRef, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routers from '../routes/Routers'

function App() {
  const dummyData = {
    profileImg: 'https://api.mandarin.weniv.co.kr/1687337079735.png',
    name: '',
    enName: '',
    phoneNumber: '',
    fullEmail: '',
    github: '',
    blog: '',
    newcomer: 'true',
    intro: '',
    skills: [''],
    career: [{ id: 1, start: '', end: '', companyName: '', works: '' }],
    project: [
      {
        id: 1,
        title: '',
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
    experience: [{ date: '', contents: '' }],
    certificate: [{ date: '', contents: '' }],
    education: [{ date: '', contents: '' }],
    url: [{ contents: '', link: '' }],
  }

  const [resumeData, setResumeData] = useState(initValue())
  const componentRef = useRef(null)

  function initValue() {
    if (localStorage.getItem('data')) {
      return JSON.parse(localStorage.getItem('data'))
    } else {
      // 추후 초기 데이터 수정 필요
      return dummyData
    }
  }

  return (
    <BrowserRouter>
      <Routers
        resumeData={resumeData}
        setResumeData={setResumeData}
        componentRef={componentRef}
      />
    </BrowserRouter>
  )
}

export default App

// return isWrite ? (
//   <>
// <header className={styles.headerWrap}>
//   <h1 className={`${styles.logoWrap} ${styles.title}`}>
//     <img src="images/makere-logo.svg" alt="" />
//     {/* <span> Make A Career</span> */}
//   </h1>
//   <nav className={styles.headerNav}>
//     <ul>
//       <li>
//         <button
//           form={`form-${formName}`}
//           className={`${styles.header} ${styles.saveBtn}`}
//           onClick={handleDataUpdate}
//         >
//           임시저장
//         </button>
//       </li>
//       <li>
//         <button
//           className={styles.prevBtn}
//           onClick={(e) => {
//             console.log('fff', e.target.form)
//             setIsWrite(false)
//             handleDataUpdate()
//           }}
//           form={`form-${formName}`}
//         >
//           미리보기
//         </button>
//       </li>
//     </ul>
//   </nav>
// </header>
//     <div className={`${App} ${styles.pageWrap}`}>
//       <Write
//         setResumeData={setResumeData}
//         resumeData={resumeData}
//         setFormName={setFormName}
//       />
//     </div>
//     <footer className={styles.writeFooter}>
//       <ul className={styles.footerCont}>
//         <li>
//           <p>위니브</p>
//           <a href="https://paullab.co.kr/about.html" target="_blank">
//             회사 소개
//           </a>
//           <a href="https://paullab.co.kr/index.html" target="_blank">
//             제주코딩베이스캠프
//           </a>
//         </li>
//         <li>
//           <p>메이커리</p>
//           <a
//             href="https://paullabworkspace.notion.site/b3258bc3a2a94151b9bf4d6e6f7b5071"
//             target="_blank"
//           >
//             메이커리 서비스 소개
//           </a>
//         </li>
//         <li>
//           <p>자료</p>
//           <a
//             href="https://paullabworkspace.notion.site/Figma-bfa32213fc244db9b31bb8486a479ee6?pvs=4"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Figma 이력서 바로가기
//           </a>
//           <a href="/files/제코베_포트폴리오_템플릿_배포용.pptx" download>
//             PPT 포트폴리오 다운로드
//           </a>
//         </li>
//       </ul>
//       <address className={styles.writeCopy}>© Weniv Corp.</address>
//     </footer>
//   </>
// ) : (
//   <>
//     <header className={styles.headerWrap}>
//       <h1 className={`${styles.logoWrap} ${styles.title}`}>
//         <img src="images/makere-logo.svg" alt="" />
//         {/* <span> Make A Career</span> */}
//       </h1>
//       <nav className={styles.headerNav}>
//         <ul>
//           <li>
//             <button
//               className={styles.prevBtn}
//               onClick={() => {
//                 setIsWrite(true)
//               }}
//             >
//               돌아가기
//             </button>
//           </li>
//           <li>
//             <button className={styles.exportBtn} onClick={handlePrint}>
//               PDF로 내보내기
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </header>
//     <div className={styles.prevWrap}>
//       <Preview resumeData={resumeData} componentRef={componentRef} />
//     </div>
//     <footer className={styles.prevFooter}>
//       <address>© Weniv Corp.</address>
//     </footer>
//   </>
// )
