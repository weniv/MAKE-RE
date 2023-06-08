import Profile from '../components/Profile/ProfileOutput'
import Intro from '../components/Intro/IntroOutput'
import Skills from '../components/Skills/SkillsOutput'
import Experience from '../components/Experience/ExperienceOutput'
import Certificate from '../components/Certificate/CertificateOutput'
import Education from '../components/Education/EducationOutput'
import Url from '../components/Url/UrlOutput'

function Preview(props) {
  return (
    <main>
      <Profile />
      <Intro />
      <Skills />
      <Experience experience={props.resumeData.experience} />
      <Certificate />
      <Education />
      <Url />
    </main>
  )
}

export default Preview
