import Profile from '../components/Profile/ProfileOutput'
import Intro from '../components/Intro/IntroOutput'
import Skills from '../components/Skills/SkillsOutput'
import Career from '../components/Career/CareerOutput'
import Experience from '../components/Experience/ExperienceOutput'
import Certificate from '../components/Certificate/CertificateOutput'
import Education from '../components/Education/EducationOutput'

const dummy = [
  {
    period: '2016.01 ~ 2020.11',
    companyName: '이랜드 외식 사업부',
    works: [
      '매출, 인건비, 원가, 식자재, 인원 관리 및 전반적인 매장관리를 맡았습니다.',
      '50명 규모의 매장의 중간 관리자 경험이 있어 사람들을 이끄는 리더쉽과, 뒷받침해주는 팔로쉽 모두를 지니고 있습니다.',
    ],
  },
  {
    period: '2016.01 ~ 2020.11',
    companyName: 'ddsddsdddds',
    works: [
      '매출, 인건비, 원가, 식자재, 인원 관리 및 전반적인 매장관리를 맡았습니다.',
      '50명 규모의 매장의 중간 관리자 경험이 있어 사람들을 이끄는 리더쉽과, 뒷받침해주는 팔로쉽 모두를 지니고 있습니다.',
    ],
  },
  {
    period: '2016.01 ~ 2020.11',
    companyName: '3332423423',
    works: [
      '매출, 인건비, 원가, 식자재, 인원 관리 및 전반적인 매장관리를 맡았습니다.',
      '50명 규모의 매장의 중간 관리자 경험이 있어 사람들을 이끄는 리더쉽과, 뒷받침해주는 팔로쉽 모두를 지니고 있습니다.',
    ],
  },
]

function Preview() {
  return (
    <main>
      <Profile />
      <Intro />
      <Skills />
      <Career data={dummy} />
      <Experience />
      <Certificate />
      <Education />
    </main>
  )
}

export default Preview
