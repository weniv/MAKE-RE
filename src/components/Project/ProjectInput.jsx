import React, { useEffect, useState, useRef } from 'react'
import styles from './ProjectInput.module.css'
import { DndContext, closestCenter } from '@dnd-kit/core'
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export default function ProjectInput({
  setResumeData,
  resumeData,
  setFormName,
}) {
  const [project, setProject] = useState(resumeData.project)

  const maxId = project.reduce(
    (acc, cur) => {
      return acc.id > cur.id ? acc : cur
    },
    { id: 0 }
  ).id

  const nextId = useRef(maxId)

  useEffect(() => {
    setResumeData({ ...resumeData, project: project })
  }, [project])

  function handleAdd() {
    nextId.current += 1
    setProject([
      ...project,
      {
        id: nextId.current,
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
    let { name, value } = e.target

    if (name === 'progress') {
      value = e.target.checked
    }

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

  const handleDragEnd = (e) => {
    const { active, over } = e
    setProject((project) => {
      const oldIdx = project.findIndex((pro) => pro.id === active.id)
      const newIdx = project.findIndex((pro) => pro.id === over.id)
      return arrayMove(project, oldIdx, newIdx)
    })
  }

  // console.log('project', project)

  return (
    <>
      <DndContext
        className={styles.project}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <h2>Project</h2>
        <SortableContext items={project} strategy={verticalListSortingStrategy}>
          {project &&
            project.map((pro, idx) => (
              <ProjectContent
                key={idx}
                pro={pro}
                idx={idx}
                setFormName={setFormName}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                handleAddArr={handleAddArr}
                handleUpdateArr={handleUpdateArr}
                handleDeleteArr={handleDeleteArr}
              />
            ))}
        </SortableContext>
      </DndContext>

      <button className={`addBtn ${styles.btnAdd}`} onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </>
  )
}

function ProjectContent({
  pro,
  idx,
  setFormName,
  handleUpdate,
  handleDelete,
  handleAddArr,
  handleUpdateArr,
  handleDeleteArr,
}) {
  const [isDrop, setIsDrop] = useState(true)

  const handleInputDrop = () => {
    if (true) {
      setIsDrop(!isDrop)
    }
  }

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: pro.id,
    })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div className={styles.contProject} style={style}>
      <div className={styles.contHeader}>
        <button
          className={styles.btnDrag}
          ref={setNodeRef}
          {...attributes}
          {...listeners}
        >
          <img
            src={process.env.PUBLIC_URL + '/images/drag-icon.svg'}
            alt="드래그"
          />
        </button>
        <h3>{pro.title ? pro.title : '새로운 프로젝트'}</h3>
        <button
          className={(styles.toggleBtn, isDrop ? styles.open : null)}
          onClick={() => handleInputDrop()}
        >
          <img
            src={process.env.PUBLIC_URL + '/images/polygon-down.svg'}
            alt="내용 열기"
          />
        </button>
        <button className={styles.btnDel}>
          <img
            src={process.env.PUBLIC_URL + '/images/icon-X.svg'}
            alt="삭제"
            onClick={() => handleDelete(idx)}
          />
        </button>
      </div>
      <form
        id={`form-project-${idx}`}
        name={`project-${idx}`}
        onSubmit={(e) => e.preventDefault()}
        onClick={(e) => {
          console.log('project form')
          setFormName(e.currentTarget.name)
        }}
      >
        {isDrop ? (
          <>
            <div className={styles.contTit}>
              <label htmlFor={`project-title-${idx}`}>프로젝트 명</label>
              <input
                type="text"
                id={`project-title-${idx}`}
                name="title"
                value={pro.title}
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    '프로젝트명은 반드시 입력되어야합니다'
                  )
                }
                onChange={(e) => handleUpdate(idx, e)}
                onInput={(e) => setFormName(`project-${parseInt(idx) + 1}`)}
                required={!pro.title ? true : false}
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
                <label htmlFor={`project-size-${idx}`}>인원</label>
                <input
                  id={`project-size-${idx}`}
                  type="text"
                  placeholder="예) Front-End 4명, Back-End 2명"
                  name="people"
                  value={pro.people}
                  onChange={(e) => handleUpdate(idx, e)}
                />
              </div>
              <div className={styles.contDate}>
                <label htmlFor={`project-period-${idx}`}>기간</label>
                <input
                  id={`project-period-${idx}`}
                  type="month"
                  max="9999-12"
                  name="startPeriod"
                  value={pro.startPeriod}
                  onChange={(e) => handleUpdate(idx, e)}
                />
                ~
                {pro.progress ? (
                  ' 진행중'
                ) : (
                  <input
                    type="month"
                    max="9999-12"
                    name="endPeriod"
                    value={pro.endPeriod}
                    onChange={(e) => handleUpdate(idx, e)}
                  />
                )}
                <label htmlFor={`prog-${idx}`} className={styles.progress}>
                  <input
                    type="checkbox"
                    name="progress"
                    value={pro.progress}
                    checked={pro.progress}
                    onChange={(e) => handleUpdate(idx, e)}
                    id={`prog-${idx}`}
                  />
                  진행 중
                </label>
              </div>
            </div>
            <div className={styles.contContribute}>
              <h4 className={styles.subTit}>기여 부분</h4>
              {pro.contributes &&
                pro.contributes.map((ctb, i) => (
                  <div key={i} className={styles.inpContribute}>
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
                        src={process.env.PUBLIC_URL + '/images/icon-X.svg'}
                        alt="삭제"
                        onClick={(e) =>
                          handleDeleteArr(
                            idx,
                            'contributes',
                            pro.contributes,
                            i
                          )
                        }
                      />
                    </button>
                  </div>
                ))}
              <button
                className={`addBtn ${styles.btnAdd}`}
                onClick={(e) =>
                  handleAddArr(idx, 'contributes', pro.contributes)
                }
              >
                +) 추가 입력하기
              </button>
            </div>
            <div className={styles.contSkills}>
              <h4 className={styles.subTit}>적용 기술</h4>
              {pro.skills &&
                pro.skills.map((skill, i) => (
                  <div key={i} className={styles.inpSkills}>
                    <input
                      type="text"
                      placeholder="예) Java"
                      value={skill}
                      onChange={(e) =>
                        handleUpdateArr(
                          idx,
                          'skills',
                          pro.skills,
                          i,
                          e.target.value
                        )
                      }
                    />
                    <button className={styles.btnDel}>
                      <img
                        src={process.env.PUBLIC_URL + '/images/icon-X.svg'}
                        alt="삭제"
                        onClick={(e) =>
                          handleDeleteArr(idx, 'skills', pro.skills, i)
                        }
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
                  <img
                    src={process.env.PUBLIC_URL + '/images/link-icon.svg'}
                    alt="URL 주소"
                  />
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
                  <img
                    src={process.env.PUBLIC_URL + '/images/link-icon.svg'}
                    alt="URL 주소"
                  />
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
          </>
        ) : null}
      </form>
    </div>
  )
}
