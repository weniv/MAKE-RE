import React from 'react'
import styles from './ProjectInput.module.css'
import { ProjectAlign, ProjectHeader, ProjectTitle } from './components/Inputs'

export default function ProjectInput() {
  const handleOutline = (e) => {
    console.log(e.target.value)
  }

  return (
    <main>
      <ProjectAlign />
      <div className={styles.cont}>
        <ProjectHeader />
        {/* 프로젝트 입력창 */}
        <form>
          <ProjectTitle />

          {/* <h3>프로젝트 개요</h3>
          <textarea
            placeholder="본문 내용 입력"
            onChange={handleOutline}
          ></textarea>

          <h3>개발 인원 및 기간</h3>
          <div className={styles.people}>
            <h4>인원</h4>
            <input type="text" placeholder="예) Front-End 4명, Back-End 2명" />
          </div>
          <div className={styles.period}>
            <h4>기간</h4>
            <input type="month" />
            <p>~</p>
            <input type="month" />
            <input type="checkbox" name="Proceeding" id="Proceeding" />
            <p>진행중</p>
          </div>

          <h3>기여 부분</h3>
          <input
            type="text"
            placeholder="예) 스마트 컨트렉스 서버와 연동되는 웹 개발 전반"
          />
          <button type="button" className="skillBtn ">
            +) 추가 입력하기
          </button>
          <h3>적용 기술</h3>
          <input type="text" placeholder="예) Java" />
          <button type="button" className="skillBtn ">
            +) 추가 입력하기
          </button>
          <h3>깃허브 링크</h3>
          <input type="text" ee />

          <h3>프로젝트 링크</h3>
          <input type="text" ee /> */}
        </form>
      </div>
    </main>
  )
}
