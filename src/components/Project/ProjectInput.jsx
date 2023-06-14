import React, { useEffect, useState } from 'react'
import styles from './ProjectInput.module.css'

export default function ProjectInput({ setResumeData, resumeData }) {
  const [project, setProject] = useState(resumeData.project)

  useEffect(() => {
    setResumeData({ ...resumeData, project: project })
  }, [project])

  function handleAdd() {
    setProject([
      ...project,
      {
        title: '',
        outline: '',
        people: '',
        startPeriod: '',
        endPeriod: '',
        progress: false,
        contributes: [''],
        skills: [''],
        github: '',
        demo: '',
      },
    ])
  }

  function handleUpdate(idx, e) {
    const { name, value } = e.target
    console.log(name, value)
    setProject(
      project.map((pro, i) => (i === idx ? { ...pro, [name]: value } : pro))
    )
  }

  function handleDelete(idx) {
    setProject(project.filter((pro, i) => i !== idx))
  }

  function handleAddArr(idx, name, arr) {
    setProject(
      project.map((pro, i) =>
        i === idx ? { ...pro, [name]: [...arr, ''] } : pro
      )
    )
  }

  function handleUpdateArr(idx, name, arr, i, value) {
    let newArr = [...arr]
    newArr[i] = value
    setProject(
      project.map((pro, i) => (i === idx ? { ...pro, [name]: newArr } : pro))
    )
  }

  function handleDeleteArr(idx, name, arr, i) {
    let newArr = [...arr]
    newArr.splice(i, 1)
    setProject(
      project.map((pro, i) => (i === idx ? { ...pro, [name]: newArr } : pro))
    )
  }

  return (
    <>
      <section className={styles.project}>
        <h2>Project</h2>
        {project &&
          project.map((pro, idx) => (
            <ProjectContent
              key={idx}
              pro={pro}
              idx={idx}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              handleAddArr={handleAddArr}
              handleUpdateArr={handleUpdateArr}
              handleDeleteArr={handleDeleteArr}
            />
          ))}
      </section>
      {/* <Inputs setResumeData={setResumeData} resumeData={resumeData} /> */}

      <button className={`addBtn ${styles.btnAdd}`} onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </>
  )
}

function ProjectContent({
  pro,
  idx,
  handleUpdate,
  handleDelete,
  handleAddArr,
  handleUpdateArr,
  handleDeleteArr,
}) {
  return (
    <div className={styles.contProject}>
      <div className={styles.contHeader}>
        <button className={styles.btnDrag}>
          <img src="/images/drag-icon.svg" alt="드래그" />
        </button>
        <h3>{pro.title}</h3>
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
        <input
          type="text"
          id={`project-${idx}`}
          name="title"
          value={pro.title}
          onChange={(e) => handleUpdate(idx, e)}
        />
      </div>
      <div className={styles.contOutline}>
        <h4 className={styles.subTit}>프로젝트 개요</h4>
        <textarea
          className={styles.inpOutline}
          type="text"
          name="outline"
          placeholder="프로젝트에 대한 설명을 작성합니다."
          value={pro.outline}
          onChange={(e) => handleUpdate(idx, e)}
        />
      </div>
      <div className={styles.contInput}>
        <h4 className={styles.subTit}>개발 인원 및 기간</h4>
        <div className={styles.contPerson}>
          <label htmlFor="">인원</label>
          <input
            type="text"
            placeholder="예) Front-End 4명, Back-End 2명"
            name="people"
            value={pro.people}
            onChange={(e) => handleUpdate(idx, e)}
          />
        </div>
        <div className={styles.contDate}>
          <label htmlFor="">기간</label>
          <input
            type="month"
            name="startPeriod"
            value={pro.startPeriod}
            onChange={(e) => handleUpdate(idx, e)}
          />
          ~
          <input
            type="month"
            name="endPeriod"
            value={pro.endPeriod}
            onChange={(e) => handleUpdate(idx, e)}
          />
          <label htmlFor={`prog-${idx}`} className={styles.progress}>
            <input
              type="checkbox"
              name="progress"
              id={`prog-${idx}`}
              value={pro.progress}
              onChange={(e) => handleUpdate(idx, e)}
            />
            진행 중
          </label>
        </div>
      </div>
      <div className={styles.contContribute}>
        <h4 className={styles.subTit}>기여 부분</h4>
        {pro.contributes.map((ctb, i) => (
          <div className={styles.inpContribute}>
            <input
              type="text"
              placeholder="예) 스마트 컨트렉스 서버와 연동되는 웹 개발 전반"
              value={ctb}
              onChange={(e) =>
                handleUpdateArr(
                  idx,
                  'contributes',
                  pro.contributes,
                  i,
                  e.target.value
                )
              }
            />
            <button className={styles.btnDel}>
              <img
                src="/images/delete-icon.svg"
                alt="삭제"
                onClick={(e) =>
                  handleDeleteArr(idx, 'contributes', pro.contributes, i)
                }
              />
            </button>
          </div>
        ))}
        <button
          className={`addBtn ${styles.btnAdd}`}
          onClick={(e) => handleAddArr(idx, 'contributes', pro.contributes)}
        >
          +) 추가 입력하기
        </button>
      </div>
      <div className={styles.contSkills}>
        <h4 className={styles.subTit}>적용 기술</h4>
        {pro.skills.map((skill, i) => (
          <div className={styles.inpSkills}>
            <input
              type="text"
              placeholder="예) Java"
              value={skill}
              onChange={(e) =>
                handleUpdateArr(idx, 'skills', pro.skills, i, e.target.value)
              }
            />
            <button className={styles.btnDel}>
              <img
                src="/images/delete-icon.svg"
                alt="삭제"
                onClick={(e) => handleDeleteArr(idx, 'skills', pro.skills, i)}
              />
            </button>
          </div>
        ))}

        <button
          className={`addBtn ${styles.btnAdd}`}
          onClick={(e) => handleAddArr(idx, 'skills', pro.skills)}
        >
          +) 추가 입력하기
        </button>
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
            value={pro.github}
            onChange={(e) => handleUpdate(idx, e)}
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
            value={pro.demo}
            onChange={(e) => handleUpdate(idx, e)}
          />
        </div>
      </div>
    </div>
  )
}
