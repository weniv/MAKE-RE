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
import Commit from '../components/Commit/CommitOutput'

function Preview({ resumeData, componentRef }) {
  const data = JSON.parse(localStorage.getItem('data'))
  const isNewcomer = data.newcomer

  return (
    <>
      <div ref={componentRef} className={styles.printPage}>
        <main>
          <Profile profile={data} className={styles.test} />
          <Commit github={data.github} />

          <Intro intro={data.intro} className={styles.pagebreak} />
          <Skills skills={data.skills} className={styles.pagebreak} />
          {isNewcomer ? (
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
  )
}

export default Preview
