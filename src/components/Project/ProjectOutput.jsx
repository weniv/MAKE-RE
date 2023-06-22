import React, { useEffect, useState } from 'react'
import styles from '../Project/ProjectOutput.module.css'

export default function Project({ project }) {
  const [empty, setEmpty] = useState(0)

  const isEmpty = (project) => {
    setEmpty(project.filter((pro) => pro.title !== '').length)
  }

  useEffect(() => {
    isEmpty(project)
  }, [])

  return (
    <>
      {!!project.length && (
        <section className={!empty ? styles.hidden : styles.project}>
          <h2 className={styles.mainTit}>Project</h2>
          <ul>
            {project.map((proj, i) => (
              <ProjectContent key={i} proj={proj} idx={i} />
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

function ProjectContent({ proj, idx }) {
  return (
    <li className={proj.title ? styles.projectItem : styles.hidden}>
      <div className={styles.contDetail}>
        <h3 className={styles.title}>{proj.title}</h3>
        <p className={proj.outline ? styles.outline : styles.hidden}>
          {proj.outline}
        </p>
        <div className={proj.people ? styles.contCategory : styles.hidden}>
          <p className={styles.subtit}>인원</p>
          <p>{proj.people}</p>
        </div>
        <div
          className={
            (proj.startPeriod && proj.endPeriod) ||
            (proj.startPeriod && proj.progress)
              ? styles.contPeriod
              : styles.noContent
          }
        >
          <p className="ir">기간</p>
          <p>
            {proj.startPeriod ? dateFormat(proj.startPeriod) : '시작일'}
            <br />~{' '}
            {proj.progress
              ? '진행중'
              : proj.endPeriod
              ? dateFormat(proj.endPeriod)
              : '종료일'}
          </p>
        </div>
        <div className={proj.skills[idx] ? styles.contSkill : styles.hidden}>
          <p className={styles.subtit}> 적용 기술</p>
          <ul className={styles.skillList}>
            {proj.skills &&
              proj.skills.map((skill, i) => (
                <li
                  key={i}
                  className={
                    proj.skills[idx] ? styles.skillItem : styles.hidden
                  }
                >
                  {skill}
                </li>
              ))}
          </ul>
        </div>
        <div
          className={
            proj.contributes[idx] ? styles.contContribute : styles.hidden
          }
        >
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
        <div className={proj.github ? styles.github : styles.hidden}>
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
        <div className={proj.demo ? styles.demo : styles.hidden}>
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
