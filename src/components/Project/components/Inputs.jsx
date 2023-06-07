import React from 'react'
import styles from '../ProjectInput.module.css'

export default function Inputs() {
  const handleOutline = (e) => {
    console.log(e.target.value)
  }

  return (
    <main>
      <h2>Project</h2>
      <ProjectAlign />
      <div className={styles.cont}>
        <ProjectHeader />
        <form className={styles.inputWrap}>
          <ProjectTitle />
          <ProjectOutline />
          <ProjectDetail />
          <ProjectContribution />
          <ProjectSkill />
          <GithubLink />
          <DeployLink />
        </form>
      </div>
    </main>
  )
}

const ProjectAlign = () => {
  return (
    <div className={styles.isAlign}>
      <p>시간 순서로 정렬</p>
      <input type="checkbox" name="alignBtn" id={styles.alignBtn} />
    </div>
  )
}

const ProjectHeader = () => {
  return (
    <div className={styles.projectHeader}>
      <button type="button" className={styles.menuBtn}></button>
      <p>AT(Arzra Takarsen)</p>
      <button type="button" className={styles.downBtn}></button>
      <button type="button" className={styles.moreBtn}></button>
    </div>
  )
}

const ProjectTitle = () => {
  return (
    <div className={styles.projectTitle}>
      <h4 className="inputDescription">프로젝트명 입력</h4>
      <input type="text" placeholder="프로젝트명 입력" />
    </div>
  )
}

const ProjectOutline = () => {
  return (
    <>
      <h3 className={styles.subTitle}>프로젝트 개요</h3>
      <textarea className="oulineText" placeholder="본문 내용 입력"></textarea>
    </>
  )
}

const People = () => {
  return (
    <div className={styles.peple}>
      <h4 className="inputDescription">인원</h4>
      <input type="text" placeholder="예) Front-End 4명, Back-End 2명" />
    </div>
  )
}

const Period = () => {
  return (
    <div className={styles.period}>
      <h4 className="inputDescription">기간</h4>
      <div>
        <input type="text" placeholder="YYYY" className={styles.year} />
        <input type="text" placeholder="MM" className={styles.month} />
        <input type="text" placeholder="YYYY" className={styles.year} />
        <input type="text" placeholder="MM" className={styles.month} />
        <input type="checkbox" name="Proceeding" id="Proceeding" />
      </div>
    </div>
  )
}

const ProjectDetail = () => {
  return (
    <>
      <h3 className={styles.subTitle}>개발 인원 및 기간</h3>
      <People />
      <Period />
    </>
  )
}

const ProjectContribution = () => {
  return (
    <>
      <h3 className={styles.subTitle}>기여 부분</h3>
      <div className={styles.contribution}>
        <input
          type="text"
          placeholder="예) 스마트 컨트렉스 서버와 연동되는 웹 개발 전반"
        />
        <button type="button" className="skillBtn ">
          +) 추가 입력하기
        </button>
      </div>
    </>
  )
}

const ProjectSkill = () => {
  return (
    <>
      <h3 className={styles.subTitle}>적용 기술</h3>
      <div className={styles.skill}>
        <input type="text" placeholder="예) Java" />
        <button type="button" className="skillBtn ">
          +) 추가 입력하기
        </button>
      </div>
    </>
  )
}

const GithubLink = () => {
  return (
    <>
      <h3 className={styles.subTitle}>깃허브 링크</h3>
      <div className={styles.github}>
        <img src="" alt="" />
        <input type="url" />
      </div>
    </>
  )
}

const DeployLink = () => {
  return (
    <>
      <h3 className={styles.subTitle}>프로젝트 링크</h3>
      <div className={styles.deploy}>
        <img src="" alt="" />
        <input type="url" />
      </div>
    </>
  )
}
