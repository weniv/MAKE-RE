import React, { useEffect, useRef, useState } from 'react'
import styles from '../ProjectInput.module.css'

export default function ProjectContribution({ id, project, setProject }) {
  const [contribute, setContribute] = useState([{ id: 1, contribute: '' }])
  const [contributeVal, setContributeVal] = useState('')
  const [curId, setCurId] = useState(1)

  // useEffect(() => {
  //   let findIndex = project.findIndex((item) => item.id === id)
  //   let copiedItems = [...project]
  //   copiedItems[findIndex].contribute = contribute

  //   setProject(copiedItems)
  // }, [contribute])

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
            contribute.map((el, idx) => (
              <input
                key={idx}
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
