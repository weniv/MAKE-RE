import { useRef, useState } from 'react'
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routers
        resumeData={resumeData}
        setResumeData={setResumeData}
        componentRef={componentRef}
      />
    </BrowserRouter>
  )
}

export default App
