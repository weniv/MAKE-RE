import React from 'react'
import { Layout } from '../organisms'
import styles from '../../pages/preview.module.css'
import {
  ProfileOutput,
  IntroOutput,
  SkillOutput,
  CareerOutput,
  ProjectOutput,
  ExperienceOutput,
  CertificateOutput,
  EducationOutput,
  UrlOutput,
} from '../index'

export default function PreviewTemplate({ componentRef }) {
  const data = JSON.parse(localStorage.getItem('data'))
  const isNewcomer = data.newcomer

  return (
    <Layout>
      <div ref={componentRef} className={styles.printPage}>
        <main className="main">
          <ProfileOutput profile={data} className={styles.test} />
          <IntroOutput intro={data.intro} className={styles.pagebreak} />
          <SkillOutput skills={data.skills} className={styles.pagebreak} />

          {isNewcomer === 'true' ? (
            <>
              <CareerOutput career={data.career} />
              <ProjectOutput project={data.project} />
            </>
          ) : (
            <>
              <CareerOutput career={data.career} />
              <ProjectOutput project={data.project} />
            </>
          )}
          <ExperienceOutput
            experience={data.experience}
            className={styles.pagebreak}
          />
          <CertificateOutput
            certificate={data.certificate}
            className={styles.pagebreak}
          />
          <EducationOutput education={data.education} />
          <UrlOutput url={data.url} className={styles.pagebreak} />
        </main>
      </div>
    </Layout>
  )
}
