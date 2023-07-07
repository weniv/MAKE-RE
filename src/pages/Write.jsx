import Profile from '../components/Profile/ProfileInput'
import Intro from '../components/Intro/IntroInput'
import Skills from '../components/Skills/SkillsInput'
import Career from '../components/Career/CareerInput'
import Project from '../components/Project/ProjectInput'
import Experience from '../components/Experience/ExperienceInput'
import Certificate from '../components/Certificate/CertificateInput'
import Education from '../components/Education/EducationInput'
import Url from '../components/Url/UrlInput'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Write(props) {
  const url = '/resume/write'
  const [data, setData] = useState()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const result = await axios.get(url)
      setData(result.data)
    } catch (err) {
      console.log(err)
    }
  }

  const patchTest = () => {
    updateData()
  }

  // here!
  // updateData: 하드코딩 된 상태 (미완)
  // 컴포넌트별로 정보를 모아서 상위에 모은후에 한번만 요청을 보내는 방법이 좋을지도
  // 데이터가 객체 형태 => 어떻게 렌더링 여부를 판단할것인가? => 컴포넌트 렌더링될때마다 주소 변경되지않도록 => useMemo..?
  const updateData = async () => {
    const updateData = { name: '이혜영', enName: 'Lee Hyeyeong' }
    try {
      const result = await axios.patch(url, { updateData })

      setData(result.data)
    } catch (err) {
      console.log(err)
    }
  }
  console.log(data)

  return (
    <>
      <button type="button" onClick={patchTest}>
        test button
      </button>
      {data ? (
        <main>
          <Profile setResumeData={props.setResumeData} resumeData={data} />
          <Intro setResumeData={props.setResumeData} resumeData={data} />
          <Skills setResumeData={props.setResumeData} resumeData={data} />
          <Career
            setResumeData={props.setResumeData}
            resumeData={data}
            setFormName={props.setFormName}
          />
          <Project
            setResumeData={props.setResumeData}
            resumeData={data}
            setFormName={props.setFormName}
          />
          <Experience setResumeData={props.setResumeData} resumeData={data} />
          <Certificate setResumeData={props.setResumeData} resumeData={data} />
          <Education setResumeData={props.setResumeData} resumeData={data} />
          <Url setResumeData={props.setResumeData} resumeData={data} />
        </main>
      ) : null}
    </>
  )
}

export default Write
