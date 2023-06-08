import Profile from '../components/Profile/ProfileInput'
import Intro from '../components/Intro/IntroInput'
import Skills from '../components/Skills/SkillsInput'
import Experience from '../components/Experience/ExperienceInput'
import Certificate from '../components/Certificate/CertificateInput'
import Education from '../components/Education/EducationInput'
import Career from '../components/Career/CareerInput'
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
      <Career
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
      <Experience
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
      <Certificate
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
      <Education />
      <Url setResumeData={props.setResumeData} resumeData={props.resumeData} />
    </main>
  )
}

export default Write
