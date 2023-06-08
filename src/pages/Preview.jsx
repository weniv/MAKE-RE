import Profile from '../components/Profile/ProfileOutput'
import Intro from '../components/Intro/IntroOutput'
import Skills from '../components/Skills/SkillsOutput'
import Experience from '../components/Experience/ExperienceOutput'
import Certificate from '../components/Certificate/CertificateOutput'
import Education from '../components/Education/EducationOutput'

function Preview() {
  return (
    <main>
      <Profile />
      <Intro />
      <Skills />
      <Experience />
      <Certificate />
      <Education />
    </main>
  )
}

export default Preview
