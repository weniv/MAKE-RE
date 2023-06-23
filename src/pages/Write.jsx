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

function Write(props) {
<<<<<<< HEAD
  return <WriteTemplate />
  // return (
  //   <main>
  //     <Profile
  //       setResumeData={props.setResumeData}
  //       resumeData={props.resumeData}
  //     />
  //     <Intro
  //       setResumeData={props.setResumeData}
  //       resumeData={props.resumeData}
  //     />
  //     <Skills
  //       setResumeData={props.setResumeData}
  //       resumeData={props.resumeData}
  //     />
  //     <Career
  //       setResumeData={props.setResumeData}
  //       resumeData={props.resumeData}
  //     />
  //     <Project
  //       setResumeData={props.setResumeData}
  //       resumeData={props.resumeData}
  //     />
  //     <Experience
  //       setResumeData={props.setResumeData}
  //       resumeData={props.resumeData}
  //     />
  //     <Certificate
  //       setResumeData={props.setResumeData}
  //       resumeData={props.resumeData}
  //     />
  //     <Education
  //       setResumeData={props.setResumeData}
  //       resumeData={props.resumeData}
  //     />
  //     <Url setResumeData={props.setResumeData} resumeData={props.resumeData} />
  //   </main>
  // )
=======
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
        setFormName={props.setFormName}
      />
      <Project
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
        setFormName={props.setFormName}
      />
      <Experience
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
      <Certificate
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
      <Education
        setResumeData={props.setResumeData}
        resumeData={props.resumeData}
      />
      <Url setResumeData={props.setResumeData} resumeData={props.resumeData} />
    </main>
  )
>>>>>>> 1699c442fd0410512599a7e6aca302de5e80348e
}

export default Write
