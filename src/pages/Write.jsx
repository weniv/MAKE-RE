import Profile from '../components/Profile/ProfileInput'
import Intro from '../components/Intro/IntroInput'
import Skills from '../components/Skills/SkillsInput'
import Experience from '../components/Experience/ExperienceInput'
import Certificate from '../components/Certificate/CertificateInput'
import Education from '../components/Education/EducationInput'
import Url from '../components/Url/UrlInput'

function Write(props) {
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
      <Experience />
      <Certificate
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
      <Education />
      <Url />
    </main>
  )
}

export default Write
