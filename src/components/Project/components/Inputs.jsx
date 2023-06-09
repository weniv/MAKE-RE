import React, { useEffect, useRef, useState } from 'react'
import styles from '../ProjectInput.module.css'

export default function Inputs(props) {
  const [project, setProject] = useState([])
  const [title, setTitle] = useState('')
  const [outline, setOutline] = useState('')
  const [people, setPeople] = useState('')
  const [period, setPeriod] = useState('')
  const [contribute, setContribute] = useState([])
  const [skill, setSkill] = useState([])
  const [github, setGithub] = useState('')
  const [link, setLink] = useState('')
  const [isDrop, setIsDrop] = useState(false)

  useEffect(() => {}, [])

  const val = {
    id: 1,
    title,
    outline,
    people,
    period,
    contribute,
    skill,
    github,
    link,
  }

  const nextId = useRef(1)

  const handleAdd = (e) => {
    e.preventDefault()
    val.id = nextId.current
    nextId.current += 1
    setProject([...project, val])
  }

  console.log(val)

  return (
    <main>
      <h2>Project</h2>
      <ProjectAlign />
      <div className={styles.projectInput}>
        <div className={styles.cont}>
          <ProjectHeader
            setIsDrop={setIsDrop}
            isDrop={isDrop}
            handleAdd={handleAdd}
          />
          {isDrop ? (
            <>
              <form className={styles.inputWrap}>
                <ProjectTitle setTitle={setTitle} />
                <ProjectOutline setOutline={setOutline} />
                <ProjectDetail
                  setPeople={setPeople}
                  setPeriod={setPeriod}
                  period={period}
                />
                <ProjectContribution setContribute={setContribute} />
                <ProjectSkill setSkill={setSkill} />
                <GithubLink setGithub={setGithub} />
                <DeployLink setLink={setLink} />
              </form>
            </>
          ) : null}
        </div>
        {project &&
          project.map(() => (
            <div className={styles.cont}>
              <ProjectHeader
                setIsDrop={setIsDrop}
                isDrop={isDrop}
                handleAdd={handleAdd}
              />
              {isDrop ? (
                <>
                  <form className={styles.inputWrap}>
                    <ProjectTitle setTitle={setTitle} />
                    <ProjectOutline setOutline={setOutline} />
                    <ProjectDetail
                      setPeople={setPeople}
                      setPeriod={setPeriod}
                      period={period}
                    />
                    <ProjectContribution setContribute={setContribute} />
                    <ProjectSkill setSkill={setSkill} />
                    <GithubLink setGithub={setGithub} />
                    <DeployLink setLink={setLink} />
                  </form>
                </>
              ) : null}
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
        onClick={dropDown}
      ></button>
      <button
        type="button"
        className={styles.moreBtn}
        onClick={props.handleAdd}
      ></button>
    </div>
  )
}

const ProjectTitle = (props) => {
  const handleTitle = (e) => {
    props.setTitle(e.target.value)
  }
  return (
    <div className={styles.projectTitle}>
      <h4 className="inputDescription">프로젝트명 입력</h4>
      <input type="text" placeholder="프로젝트명 입력" onChange={handleTitle} />
    </div>
  )
}

const ProjectOutline = (props) => {
  const handleOutline = (e) => {
    props.setOutline(e.target.value)
  }

  return (
    <>
      <h3 className={styles.subTitle}>프로젝트 개요</h3>
      <textarea
        className={styles.oulineText}
        placeholder="본문 내용 입력"
        onChange={handleOutline}
      ></textarea>
    </>
  )
}

const People = (props) => {
  const handlePeople = (e) => {
    props.setPeople(e.target.value)
  }

  return (
    <div className={styles.peple}>
      <h4 className="inputDescription">인원</h4>
      <input
        type="text"
        placeholder="예) Front-End 4명, Back-End 2명"
        onChange={handlePeople}
      />
    </div>
  )
}

const Period = (props) => {
  const [startYear, setStartYear] = useState('')
  const [startMonth, setStartMonth] = useState('')
  const [endYear, setEndYear] = useState('')
  const [endMonth, setEndMonth] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [isDone, setIsDone] = useState(false)

  const val = {
    start: `${startYear}.${startMonth}`,
    end: `${endYear}.${endMonth}`,
  }

  useEffect(() => {
    handlePeriod()
  }, [])

  const handlePeriod = () => {
    if (isChecked) {
      props.setPeriod('진행중')
    } else {
      props.setPeriod(val)
    }
  }

  const handleStartYear = (e) => {
    setStartYear(e.target.value)
    checkIsDone(val)
  }

  const handleStartMonth = (e) => {
    setStartMonth(e.target.value)
    checkIsDone(val)
  }

  const handleEndYear = (e) => {
    setEndYear(e.target.value)
    checkIsDone(val)
  }

  const handleEndMonth = (e) => {
    setEndMonth(e.target.value)
    checkIsDone(val)
  }

  const handleProceeding = (e) => {
    setIsChecked(e.target.checked)
    checkIsDone(val)
  }

  const isEmpty = (obj) =>
    !Object.values(obj).every((x) => x !== null && x !== '')

  const checkIsDone = (obj) => {
    const checkVal = isEmpty(obj) // null이 있으면 true
    // console.log(!checkVal)
    // console.log(!checkVal  !isChecked)
    if (!isChecked) {
      setIsDone(true)
    } else if (checkVal) {
      setIsDone(true)
    } else {
      setIsDone(false)
    }
  }

  console.log(props.period)

  return (
    <div className={styles.period}>
      <h4 className="inputDescription" onClick={isEmpty}>
        기간
      </h4>
      <div>
        <input
          type="text"
          placeholder="YYYY"
          className={styles.year}
          onChange={handleStartYear}
        />
        <input
          type="text"
          placeholder="MM"
          className={styles.month}
          onChange={handleStartMonth}
        />
        <input
          type="text"
          placeholder="YYYY"
          className={styles.year}
          onChange={handleEndYear}
        />
        <input
          type="text"
          placeholder="MM"
          className={styles.month}
          onChange={handleEndMonth}
        />
        <input
          type="checkbox"
          name="Proceeding"
          id="Proceeding"
          onChange={handleProceeding}
        />
      </div>
    </div>
  )
}

const ProjectDetail = (props) => {
  return (
    <>
      <h3 className={styles.subTitle}>개발 인원 및 기간</h3>
      <People setPeople={props.setPeople} />
      <Period setPeriod={props.setPeriod} period={props.period} />
    </>
  )
}

const ProjectContribution = (props) => {
  const [contribute, setContribute] = useState([])

  useEffect(() => {
    console.log(contribute)
  }, [contribute])

  const handleContribute = (e) => {
    setContribute(e.target.value)
  }

  const nextId = useRef(1)

  const handleAdd = (e) => {
    e.preventDefault()
    nextId.current += 1
    setContribute([...contribute, contribute])
  }

  return (
    <>
      <h3 className={styles.subTitle}>기여 부분</h3>
      <div className={styles.contribution}>
        <div className={styles.contributeWrap}>
          <input
            type="text"
            placeholder="예) 스마트 컨트렉스 서버와 연동되는 웹 개발 전반"
            onChange={handleContribute}
          />
          {/* {contribute &&
            contribute.map(() => (
              <input
                type="text"
                placeholder="예) 스마트 컨트렉스 서버와 연동되는 웹 개발 전반"
                onChange={handleContribute}
              />
            ))} */}
        </div>
        <button type="button" className="addBtn" onClick={handleAdd}>
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
        <button type="button" className="addBtn ">
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
