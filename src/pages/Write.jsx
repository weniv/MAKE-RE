import Profile from '../components/Profile/ProfileInput'
import Intro from '../components/Intro/IntroInput'
import Skills from '../components/Skills/SkillsInput'
import Career from '../components/Career/CareerInput'
import Project from '../components/Project/ProjectInput'
import Experience from '../components/Experience/ExperienceInput'
import Certificate from '../components/Certificate/CertificateInput'
import Education from '../components/Education/EducationInput'
import Url from '../components/Url/UrlInput'
import { WriteTemplate } from '../components/templates'

function Write({ resumeData, setResumeData }) {
  return <WriteTemplate resumeData={resumeData} setResumeData={setResumeData} />
}

export default Write
