import Profile from '../components/Profile/ProfileOutput'
import Intro from '../components/Intro/IntroOutput'
import Skills from '../components/Skills/SkillsOutput'
import Experience from '../components/Experience/ExperienceOutput'
import Certificate from '../components/Certificate/CertificateOutput'

function Preview() {
  return (
    <main>
      <Profile />
      <Intro />
      <Skills />
      <Experience />
      <Certificate />
    </main>
  )
}

export default Preview
