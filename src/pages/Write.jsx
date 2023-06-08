import Profile from '../components/Profile/ProfileInput'
import Intro from '../components/Intro/IntroInput'
import Skills from '../components/Skills/SkillsInput'
import Experience from '../components/Experience/ExperienceInput'
import Certificate from '../components/Certificate/CertificateInput'
import Education from '../components/Education/EducationInput'
import Url from '../components/Url/UrlInput'

import { useEffect } from 'react'
function Write(props) {
  useEffect(() => {
    console.log(JSON.stringify(props.resumeData))
  }, [])

  return (
    <main>
      <Profile
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
      <Intro
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
      <Skills
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
      <Experience
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
      <Certificate />
      <Education />
      <Url />
    </main>
  )
}

export default Write
