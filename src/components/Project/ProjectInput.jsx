import React, { forwardRef, useEffect, useRef, useState } from 'react'
import styles from './ProjectInput.module.css'
import ProjectAlign from './components/ProjectAlign'
import ProjectHeader from './components/ProjectHeader'
import ProjectTitle from './components/ProjectTitle'
import ProjectOutline from './components/ProjectOutline'
import ProjectDetail from './components/ProjectDetail'
import ProjectContribution from './components/ProjectContribution'
import ProjectSkill from './components/ProjectSkill'
import GithubLink from './components/GithubLink'
import DeployLink from './components/DeployLink'

export default function ProjectInput({ resumeData, setResumeData }) {
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
  const [dropId, setDropId] = useState(1)

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

  // console.log('project')
  // console.log(project)

  const click = (e) => {
    setDropId(e.target.id)
    if (true) {
      setIsDrop(!isDrop)
    }
  }

  return (
    <main>
      <h2>Project</h2>
      <ProjectAlign />
      <div className={styles.projectInput}>
        {project &&
          project.map((el) => (
            <div className={styles.cont}>
              <ProjectHeader id={el.id} handleAdd={handleAdd} click={click} />
              {isDrop && dropId == el.id ? (
                <form id={el.id} className={styles.inputWrap}>
                  <ProjectTitle
                    id={el.id}
                    project={project}
                    setProject={setProject}
                  />
                  <ProjectOutline
                    id={el.id}
                    project={project}
                    setProject={setProject}
                  />
                  <ProjectDetail
                    id={el.id}
                    project={project}
                    setProject={setProject}
                  />
                  <ProjectContribution
                    id={el.id}
                    project={project}
                    setProject={setProject}
                  />
                  <ProjectSkill
                    id={el.id}
                    project={project}
                    setProject={setProject}
                  />
                  <GithubLink
                    id={el.id}
                    project={project}
                    setProject={setProject}
                  />
                  <DeployLink
                    id={el.id}
                    project={project}
                    setProject={setProject}
                  />
                </form>
              ) : null}
            </div>
          ))}
      </div>
    </main>
  )
}
