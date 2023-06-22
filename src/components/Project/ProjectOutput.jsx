import React from 'react'
import styles from '../Project/ProjectOutput.module.css'

export default function Project({ project }) {
  return (
    <>
      {!!project.length && (
        <section className={styles.project}>
          <h2 className={styles.mainTit}>Project</h2>
          <ul>
            {project.map((proj, i) => (
              <ProjectContent key={i} proj={proj} />
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

function ProjectContent({ proj }) {
  console.log('proj.outline', proj.outline)
  return (
    <li className={`${styles.projectItem}`}>
      <div className={styles.contDetail}>
        <h3 className={styles.title}>{proj.title}</h3>
        <p className={styles.outline}>{proj.outline}</p>
        <div className={styles.contCategory}>
          <p className={styles.subtit}>인원</p>
          <p>{proj.people}</p>
        </div>
        <div className={styles.contPeriod}>
          <p className="ir">기간</p>
          <p>
            {dateFormat(proj.startPeriod)}
            <br />~ {proj.progress ? '진행중' : dateFormat(proj.endPeriod)}
          </p>
        </div>
        <div className={styles.contSkill}>
          <p className={styles.subtit}> 적용 기술</p>
          <ul className={styles.skillList}>
            {proj.skills &&
              proj.skills.map((skill, i) => (
                <li key={i} className={styles.skillItem}>
                  {skill}
                </li>
              ))}
          </ul>
        </div>
        <div className={styles.contContribute}>
          <p className={styles.subtit}>기여 부분</p>
          <ul className={styles.contrList}>
            {proj.contributes &&
              proj.contributes.map((contr, i) => (
                <li key={i} className={styles.contritem}>
                  {contr}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.github}>
          <p className={styles.subtit}>깃허브 링크</p>
          <div className={styles.urlLink}>
            <img src="/images/link-icon-blue.svg" alt="" />
            <a
              href={urlValidation(proj.github.trim())}
              target="_blank"
              rel="noopener noreferrer"
            >
              {proj.github.trim()}
            </a>
          </div>
        </div>
        <div className={styles.demo}>
          <p className={styles.subtit}>프로젝트 링크</p>
          <div className={styles.urlLink}>
            <img src="/images/link-icon-blue.svg" alt="" />
            <a
              href={urlValidation(proj.demo && proj.demo.trim())}
              target="_blank"
              rel="noopener noreferrer"
            >
              {proj.demo && proj.demo.trim()}
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}

function urlValidation(url) {
  if (
    (url && url.startsWith('http://')) ||
    (url && url.startsWith('https://'))
  ) {
    return url
  } else {
    return 'http://' + url
  }
}

function dateFormat(date) {
  if (date) {
    return date && date.replace('-', '. ')
  }
  return date
}
