import React, { useState } from 'react'
import Inputs from './components/Inputs'
import styles from './ProjectInput.module.css'
export default function ProjectInput({ setResumeData, resumeData }) {
  const [project, setProject] = useState(resumeData.project)

  function handleAdd() {
    setProject([...project])
  }

  function handleDelete(idx) {
    setProject(project.filter((pro, i) => i !== idx))
  }

  return (
    <>
      <section className={styles.project}>
        <h2>Project</h2>
        <ProjectContent idx={1} handleDelete={handleDelete} />
        <ProjectContent idx={2} handleDelete={handleDelete} />
      </section>
      <Inputs setResumeData={setResumeData} resumeData={resumeData} />

      <button className={`addBtn ${styles.btnAdd}`} onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </>
  )
}

function ProjectContent({ idx, handleDelete }) {
  return (
    <div className={styles.contProject}>
      <div className={styles.contHeader}>
        <button className={styles.btnDrag}>
          <img src="/images/drag-icon.svg" alt="드래그" />
        </button>
        <h3>제대로 가자</h3>

        <button className={styles.btnToggle}>
          <img src="/images/polygon-down.svg" alt="내용 열기" />
        </button>
        <button className={styles.btnDel}>
          <img
            src="/images/delete-icon.svg"
            alt="삭제"
            onClick={() => handleDelete(idx)}
          />
        </button>
      </div>
      <div className={styles.contTit}>
        <label htmlFor={`project-${idx}`}>프로젝트 명</label>
        <input type="text" id={`project-${idx}`} />
      </div>
      <div className={styles.contOutline}>
        <h4 className={styles.subTit}>프로젝트 개요</h4>
        <textarea
          className={styles.inpOutline}
          type="text"
          placeholder="프로젝트에 대한 설명을 작성합니다."
        />
      </div>
      <div className={styles.contInput}>
        <h4 className={styles.subTit}>개발 인원 및 기간</h4>
        <div className={styles.contPerson}>
          <label htmlFor="">인원</label>
          <input type="text" placeholder="예) Front-End 4명, Back-End 2명" />
        </div>
        <div className={styles.contDate}>
          <label htmlFor="">기간</label>
          <input type="month" />
          ~
          <input type="month" />
          <label htmlFor={`prog-${idx}`} className={styles.progress}>
            <input type="checkbox" name="" id={`prog-${idx}`} />
            진행 중
          </label>
        </div>
      </div>
      <div className={styles.contContribute}>
        <h4 className={styles.subTit}>기여 부분</h4>
        <div className={styles.inpContribute}>
          <input
            type="text"
            placeholder="예) 스마트 컨트렉스 서버와 연동되는 웹 개발 전반"
          />
          <button className={styles.btnDel}>
            <img
              src="/images/delete-icon.svg"
              alt="삭제"
              onClick={() => handleDelete(idx)}
            />
          </button>
        </div>
        <button className={`addBtn ${styles.btnAdd}`}>+) 추가 입력하기</button>
      </div>
      <div className={styles.contSkills}>
        <h4 className={styles.subTit}>적용 기술</h4>
        <div className={styles.inpSkills}>
          <input type="text" placeholder="예) Java" />
          <button className={styles.btnDel}>
            <img
              src="/images/delete-icon.svg"
              alt="삭제"
              onClick={() => handleDelete(idx)}
            />
          </button>
        </div>
        <button className={`addBtn ${styles.btnAdd}`}>+) 추가 입력하기</button>
      </div>
      <div>
        <h4 className={styles.subTit}>깃허브 링크</h4>
        <div className={styles.contLink}>
          <label htmlFor={`ghLink-${idx}`} className={styles.lbLink}>
            <img src="/images/link-icon.svg" alt="URL 주소" />
          </label>
          <input
            className={styles.inpItem}
            type="text"
            name="github"
            id={`ghLink-${idx}`}
          />
        </div>
      </div>
      <div>
        <h4 className={styles.subTit}>프로젝트 링크</h4>
        <div className={styles.contLink}>
          <label htmlFor={`dmLink-${idx}`} className={styles.lbLink}>
            <img src="/images/link-icon.svg" alt="URL 주소" />
          </label>
          <input
            className={styles.inpItem}
            type="text"
            name="demo"
            id={`dmLink-${idx}`}
          />
        </div>
      </div>
    </div>
  )
}
