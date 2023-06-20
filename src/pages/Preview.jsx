import Profile from '../components/Profile/ProfileOutput'
import Intro from '../components/Intro/IntroOutput'
import Skills from '../components/Skills/SkillsOutput'
import Career from '../components/Career/CareerOutput'
import Project from '../components/Project/ProjectOutput'
import Experience from '../components/Experience/ExperienceOutput'
import Certificate from '../components/Certificate/CertificateOutput'
import Education from '../components/Education/EducationOutput'
import Url from '../components/Url/UrlOutput'
import styles from './preview.module.css'
import { useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'

function Preview({ resumeData }) {
  const data = JSON.parse(localStorage.getItem('data'))

  const componentRef = useRef(null)
  function handleClick() {
    handlePrint()
  }
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: '파일명',
  })
  return (
    <>
      <button onClick={handleClick}>프린트</button>
      <div ref={componentRef} className={styles.printPage}>
        <main>
          <Profile profile={data} />
          <Intro intro={data.intro} />
          <Skills skills={data.skills} />
          <Career data={data.career} />
          <Project project={data.project} />
          <Experience experience={data.experience} />
          <Certificate certificate={data.certificate} />
          <Education education={data.education} />
          <Url url={data.url} />
        </main>
      </div>
    </>
  )
}

export default Preview
