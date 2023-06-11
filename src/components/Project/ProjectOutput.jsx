import React from 'react'
import styles from '../Project/ProjectOutput.module.css'

export default function ProjectOutput() {
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
      <Project data={dummy} />
    </section>
  )
}

const Project = (props) => {
  const data = props.data
  return (
    <div className={styles.projectWrap}>
      <div className={styles.rowWrap}>
        <div className={styles.period}>
          <p>2019.01</p>
          <p>~2019.03</p>
        </div>

        <div className={styles.columnWrap}>
          <div>
            <p className={styles.title}>밥줬냥</p>
            <p className={styles.sub}>
              길고양이에 관한 사회적 문제를 해결하기 위한 프로젝트입니다. 먹이,
              물, 피난처가 부족한 길고양이들에게 안전한 급식소를 제공합니다.
              Kakao Map API를 사용하여 지도를 보여주고 급식소 마커를 생성/관리할
              수 있습니다.
            </p>
          </div>

          <div className={styles.row}>
            <p className={styles.title}>인원</p>
            <p>Front-End 4명</p>
          </div>

          <div>
            <p className={styles.title}>적용기술</p>
            <ul className={styles.skillWrap}>
              <li className={styles.skill}>JAVA</li>
              <li className={styles.skill}>JAVA</li>
              <li className={styles.skill}>JAVA</li>
              <li className={styles.skill}>JAVA</li>
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
  )
}
