import React, { useEffect, useState } from 'react'
import styles from '../ProjectInput.module.css'

export default function People({ id, project, setProject }) {
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
