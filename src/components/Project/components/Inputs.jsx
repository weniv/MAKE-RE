import React, { useEffect, useRef, useState } from 'react'
import styles from '../ProjectInput.module.css'

export default function Inputs({ resumeData, setResumeData }) {
  const [project, setProject] = useState([
    {
      id: 1,
      title: '',
      outline: '',
      people: '',
      startPeriod: '',
      endPeriod: '',
      contribute: [],
      skill: [],
      github: '',
      link: '',
    },
  ])
  const [isDrop, setIsDrop] = useState(false)

  useEffect(() => {
    setResumeData({ ...resumeData, project })
  }, [project])

  const nextId = useRef(1)

  const val = {
    id: nextId.current,
    title: '',
    outline: '',
    people: '',
    startPeriod: '',
    endPeriod: '',
    contribute: [],
    skill: [],
    github: '',
    link: '',
  }

  const handleAdd = (e) => {
    e.preventDefault()
    nextId.current += 1
    val.id = nextId.current
    setProject([...project, val])
  }

  console.log('project')
  console.log(project)

  return (
    <main>
      <h2>Project</h2>
      <ProjectAlign />
      <div className={styles.projectInput}>
        {project &&
          project.map((el) => (
            <div className={styles.cont}>
              <ProjectHeader
                id={el.id}
                // setIsDrop={setIsDrop}
                // isDrop={isDrop}
                handleAdd={handleAdd}
              />
              {/* {isDrop ? (
                <> */}
              <form className={styles.inputWrap}>
                <ProjectTitle
                  id={el.id}
                  setProject={setProject}
                  project={project}
                />
                <ProjectOutline
                  id={el.id}
                  setProject={setProject}
                  project={project}
                />
                <ProjectDetail
                  id={el.id}
                  setProject={setProject}
                  project={project}
                />
                <ProjectContribution
                  id={el.id}
                  setProject={setProject}
                  project={project}
                />
                <ProjectSkill
                  id={el.id}
                  setProject={setProject}
                  project={project}
                />
                <GithubLink
                  id={el.id}
                  setProject={setProject}
                  project={project}
                />
                <DeployLink
                  id={el.id}
                  setProject={setProject}
                  project={project}
                />
              </form>
              {/* </>
              ) : null} */}
            </div>
          ))}
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

const ProjectHeader = (props) => {
  const dropDown = () => {
    if (props.isDrop) {
      props.setIsDrop(false)
    } else {
      props.setIsDrop(true)
    }
  }

  return (
    <div className={styles.projectHeader}>
      <button type="button" className={styles.menuBtn}></button>
      <p>AT(Arzra Takarsen)</p>
      <button
        type="button"
        className={styles.downBtn}
        // onClick={dropDown}
      ></button>
      <button
        type="button"
        className={styles.moreBtn}
        onClick={props.handleAdd}
      ></button>
    </div>
  )
}

const ProjectTitle = ({ id, project, setProject }) => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    let findIndex = project.findIndex((item) => item.id === id)
    let copiedItems = [...project]
    copiedItems[findIndex].title = title

    setProject(copiedItems)
  }, [title])

  return (
    <div id={id} className={styles.projectTitle}>
      <h4 className="inputDescription">프로젝트명 입력</h4>
      <input
        type="text"
        placeholder="프로젝트명 입력"
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  )
}

const ProjectOutline = ({ id, project, setProject }) => {
  const [outline, setOutline] = useState('')

  useEffect(() => {
    let findIndex = project.findIndex((item) => item.id === id)
    let copiedItems = [...project]
    copiedItems[findIndex].outline = outline

    setProject(copiedItems)
  }, [outline])

  return (
    <>
      <h3 className={styles.subTitle}>프로젝트 개요</h3>
      <textarea
        className={styles.oulineText}
        placeholder="본문 내용 입력"
        onChange={(e) => setOutline(e.target.value)}
      ></textarea>
    </>
  )
}

const People = ({ id, project, setProject }) => {
  const [people, setPeople] = useState('')

  useEffect(() => {
    let findIndex = project.findIndex((item) => item.id === id)
    let copiedItems = [...project]
    copiedItems[findIndex].people = people

    setProject(copiedItems)
  }, [people])

  return (
    <div className={styles.peple}>
      <h4 className="inputDescription">인원</h4>
      <input
        type="text"
        placeholder="예) Front-End 4명, Back-End 2명"
        onChange={(e) => setPeople(e.target.value)}
      />
    </div>
  )
}

const Period = ({ id, project, setProject }) => {
  const min_month = 1
  const max_month = 31

  const [startPeriod, setStartPeriod] = useState('')
  const [endPeriod, setEndPeriod] = useState('')
  const [startYear, setStartYear] = useState('')
  const [startMonth, setStartMonth] = useState('')
  const [endYear, setEndYear] = useState('')
  const [endMonth, setEndMonth] = useState('')

  useEffect(() => {
    let findIndex = project.findIndex((item) => item.id === id)
    let copiedItems = [...project]
    copiedItems[findIndex].startPeriod = startPeriod
    copiedItems[findIndex].endPeriod = endPeriod

    setProject(copiedItems)
  }, [startPeriod, endPeriod])

  useEffect(() => {
    setStartPeriod(`${startYear}.${startMonth}`)
  }, [startYear, startMonth])

  useEffect(() => {
    setEndPeriod(`${endYear}.${endMonth}`)
  }, [endYear, endMonth])

  return (
    <div className={styles.period}>
      <h4 className="inputDescription">기간</h4>
      <div>
        <input
          type="number"
          placeholder="YYYY"
          className={styles.year}
          onChange={(e) => setStartYear(e.target.value)}
        />
        <input
          type="number"
          placeholder="MM"
          className={styles.month}
          onChange={(e) => setStartMonth(e.target.value)}
          min={min_month}
          max={max_month}
        />
        <input
          type="number"
          placeholder="YYYY"
          className={styles.year}
          onChange={(e) => setEndYear(e.target.value)}
        />
        <input
          type="number"
          placeholder="MM"
          className={styles.month}
          onChange={(e) => setEndMonth(e.target.value)}
          min={min_month}
          max={max_month}
        />
        <input
          type="checkbox"
          name="Proceeding"
          id="Proceeding"
          onChange={(e) => console.log(e.target.checked)}
        />
      </div>
    </div>
  )
}

const ProjectDetail = ({ id, project, setProject }) => {
  return (
    <>
      <h3 className={styles.subTitle}>개발 인원 및 기간</h3>
      <People id={id} setProject={setProject} project={project} />
      <Period id={id} setProject={setProject} project={project} />
    </>
  )
}

const ProjectContribution = ({ id, project, setProject }) => {
  const [contribute, setContribute] = useState([{ id: 1, contribute: '' }])
  const [contributeVal, setContributeVal] = useState('')
  const [curId, setCurId] = useState(1)

  useEffect(() => {
    let findIndex = project.findIndex((item) => item.id === id)
    let copiedItems = [...project]
    copiedItems[findIndex].contribute = contribute

    setProject(copiedItems)
  }, [contribute])

  const nextId = useRef(1)

  const val = {
    id: nextId.current,
    contribute: '',
  }

  useEffect(() => {
    let findIndex = contribute.findIndex((item) => item.id === parseInt(curId))
    let copiedItems = [...contribute]
    copiedItems[findIndex].contribute = contributeVal
    setContribute(copiedItems)
  }, [contribute.length, contributeVal, curId])

  const handleAdd = (e) => {
    e.preventDefault()
    nextId.current += 1
    val.id = nextId.current
    setContribute([...contribute, val])
  }

  return (
    <>
      <h3 className={styles.subTitle}>기여 부분</h3>
      <div className={styles.contribution}>
        <div className={styles.contributeWrap}>
          {contribute &&
            contribute.map((el) => (
              <input
                id={el.id}
                type="text"
                placeholder="예) 스마트 컨트렉스 서버와 연동되는 웹 개발 전반"
                onChange={(e) => setContributeVal(e.target.value)}
                onMouseDown={(e) => setCurId(e.target.id)}
              />
            ))}
        </div>
        <button type="button" className="addBtn" onClick={handleAdd}>
          +) 추가 입력하기
        </button>
      </div>
    </>
  )
}

const ProjectSkill = ({ id, project, setProject }) => {
  const [skill, setSkill] = useState([{ id: 1, skill: '' }])
  const [skillVal, setSkillVal] = useState('')
  const [curId, setCurId] = useState(1)

  useEffect(() => {
    let findIndex = project.findIndex((item) => item.id === id)
    let copiedItems = [...project]
    copiedItems[findIndex].skill = skill

    setProject(copiedItems)
  }, [skill])

  const nextId = useRef(1)

  const val = {
    id: nextId.current,
    skill: '',
  }

  useEffect(() => {
    let findIndex = skill.findIndex((item) => item.id === parseInt(curId))
    let copiedItems = [...skill]
    copiedItems[findIndex].skill = skillVal
    setSkill(copiedItems)
  }, [skill.length, skillVal, curId])

  const handleAdd = (e) => {
    e.preventDefault()
    nextId.current += 1
    val.id = nextId.current
    setSkill([...skill, val])
  }

  return (
    <>
      <h3 className={styles.subTitle}>적용 기술</h3>
      <div className={styles.skill}>
        {skill &&
          skill.map((el) => (
            <input
              id={el.id}
              type="text"
              placeholder="예) Java"
              onChange={(e) => setSkillVal(e.target.value)}
              onMouseDown={(e) => setCurId(e.target.id)}
            />
          ))}
      </div>
      <button type="button" className="addBtn" onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </>
  )
}

const GithubLink = ({ id, project, setProject }) => {
  const [github, setGithub] = useState('')

  useEffect(() => {
    let findIndex = project.findIndex((item) => item.id === id)
    let copiedItems = [...project]
    copiedItems[findIndex].github = github

    setProject(copiedItems)
  }, [github])

  return (
    <>
      <h3 className={styles.subTitle}>깃허브 링크</h3>
      <div id="id" className={styles.github}>
        <img src="" alt="" />
        <input type="url" onChange={(e) => setGithub(e.target.value)} />
      </div>
    </>
  )
}

const DeployLink = ({ id, project, setProject }) => {
  const [link, setLink] = useState('')

  useEffect(() => {
    let findIndex = project.findIndex((item) => item.id === id)
    let copiedItems = [...project]
    copiedItems[findIndex].link = link

    setProject(copiedItems)
  }, [link])

  return (
    <>
      <h3 className={styles.subTitle}>프로젝트 링크</h3>
      <div className={styles.deploy}>
        <img src="" alt="" />
        <input type="url" onChange={(e) => setLink(e.target.value)} />
      </div>
    </>
  )
}
