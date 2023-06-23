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

// return (
// <main>
//   <Profile
//     setResumeData={props.setResumeData}
//     resumeData={props.resumeData}
//   />
//   <Intro
//     setResumeData={props.setResumeData}
//     resumeData={props.resumeData}
//   />
//   <Skills
//     setResumeData={props.setResumeData}
//     resumeData={props.resumeData}
//   />
//   <Career
//     setResumeData={props.setResumeData}
//     resumeData={props.resumeData}
//     setFormName={props.setFormName}
//   />
//   <Project
//     setResumeData={props.setResumeData}
//     resumeData={props.resumeData}
//     setFormName={props.setFormName}
//   />
//   <Experience
//     setResumeData={props.setResumeData}
//     resumeData={props.resumeData}
//   />
//   <Certificate
//     setResumeData={props.setResumeData}
//     resumeData={props.resumeData}
//   />
//   <Education
//     setResumeData={props.setResumeData}
//     resumeData={props.resumeData}
//   />
//   <Url setResumeData={props.setResumeData} resumeData={props.resumeData} />
// </main>
// )
