import React from 'react'
import styles from '../Project/ProjectOutput.module.css'

export default function ProjectOutput({ project }) {
  console.log(12222)
  console.log(project)
  const dummy = [
    '쇼핑라이브 방송 송출 및 서비스에 필요한 Backend API 개발 및 운영',
    '2021년 실시간 방송 재생 정보 HTTP -> Socket 방식으로 전환',
    '순간적인 트래픽이 몰렸을 때 API 대역폭 리스크 감소',
    '2021년 방송 트레일러 개선',
    'CPC에 효과적인 트레일러를 노출시키기 위해, 다시보기 영상에 실시간 방송 지표를 적용한 트레일러 추출 및 적용',
  ]
  return (
    <section className={styles.projectSection}>
      <h2>Project</h2>
      <Project dummy={dummy} project={project} />
    </section>
  )
}

const Project = ({ dummy, project }) => {
  const data = dummy

  return (
    <div className={styles.cont}>
      {project &&
        project.map((project) => (
          <div className={styles.projectWrap}>
            <div className={styles.rowWrap}>
              <div className={styles.period}>
                <p>2019.01</p>
                <p>~2019.03</p>
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
                    {data.map((el) => (
                      <li className={styles.sub}>{el}</li>
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
                  // href={urlValidation(url.link)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/
                </a>
              </div>
            </div>

            <div className={styles.link}>
              <p className={styles.title}>프로젝트 링크</p>
              <div className={styles.urlLink}>
                <img src="/images/link-icon-blue.svg" alt="" />
                <a
                  // href={urlValidation(url.link)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
