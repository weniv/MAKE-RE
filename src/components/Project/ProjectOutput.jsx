import React from 'react'
import styles from '../Project/ProjectOutput.module.css'

export default function ProjectOutput({ project }) {
  return (
    <section className={styles.projectSection}>
      <h2>Project</h2>
      <Project project={project} />
    </section>
  )
}

const Project = ({ project }) => {
  return (
    <div className={styles.cont}>
      {project &&
        project.map((project) => (
          <div className={styles.projectWrap}>
            <div className={styles.rowWrap}>
              <div className={styles.period}>
                <p>{project.startPeriod}</p>
                <p>~{project.endPeriod}</p>
              </div>

              <div className={styles.columnWrap}>
                <div>
                  <p className={styles.title}>{project.title}</p>
                  <pre className={styles.sub}>{project.outline}</pre>
                </div>

                <div className={styles.row}>
                  <p className={styles.title}>인원</p>
                  <p>{project.people}</p>
                </div>

                <div>
                  <p className={styles.title}>적용기술</p>
                  <ul className={styles.skillWrap}>
                    {project.skill &&
                      project.skill.map((skill) => (
                        <li className={styles.skill}>{skill.skill}</li>
                      ))}
                  </ul>
                </div>

                <div>
                  <p className={styles.title}>기여 부분</p>
                  <ul className={styles.list}>
                    {project.contribute &&
                      project.contribute.map((el) => (
                        <li className={styles.sub}>{el.contribute}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.github}>
              <p className={styles.title}>깃허브 링크</p>
              <div className={styles.urlLink}>
                <img src="/images/link-icon-blue.svg" alt="" />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.github}
                </a>
              </div>
            </div>

            <div className={styles.link}>
              <p className={styles.title}>프로젝트 링크</p>
              <div className={styles.urlLink}>
                <img src="/images/link-icon-blue.svg" alt="" />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link}
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
