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
import axios from 'axios'
import { useEffect, useState } from 'react'

function Preview({ componentRef }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const result = await axios.get('/resume/preview')
      setData(result.data)
    } catch (err) {
      console.log('err')
    }
  }

  return (
    <>
      {data ? (
        <>
          <div ref={componentRef} className={styles.printPage}>
            <main>
              <Profile profile={data} className={styles.test} />
              <Intro intro={data.intro} className={styles.pagebreak} />
              <Skills skills={data.skills} className={styles.pagebreak} />
              {data.newcomer ? (
                <>
                  <Project project={data.project} />
                  <Career career={data.career} />
                </>
              ) : (
                <>
                  <Career career={data.career} />
                  <Project project={data.project} />
                </>
              )}
              <Experience
                experience={data.experience}
                className={styles.pagebreak}
              />
              <Certificate
                certificate={data.certificate}
                className={styles.pagebreak}
              />
              <Education education={data.education} />
              <Url url={data.url} className={styles.pagebreak} />
            </main>
          </div>
        </>
      ) : null}
    </>
  )
}

export default Preview
