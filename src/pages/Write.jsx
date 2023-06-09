import Profile from '../components/Profile/ProfileInput'
import Intro from '../components/Intro/IntroInput'
import Skills from '../components/Skills/SkillsInput'
import Career from '../components/Career/CareerInput'
import Project from '../components/Project/ProjectInput'
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
      <Career
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
      <Project
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
      <Experience />
      <Certificate />
      <Education />
      <Url />
    </main>
  )
}

export default Write
