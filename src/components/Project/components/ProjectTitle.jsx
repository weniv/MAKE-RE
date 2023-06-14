import React, { useEffect, useRef, useState } from 'react'
import styles from '../ProjectInput.module.css'

export default function ProjectTitle({ id, idx, data, handleUpdate }) {
  const [title, setTitle] = useState('')

  const update = (id, e) => {
    setTitle(e.target.value)
    handleUpdate(id, e)
  }

  return (
    <div className={styles.projectTitle}>
      <h4 className="inputDescription">프로젝트명 입력</h4>
      <input
        name="title"
        type="text"
        placeholder="프로젝트명 입력"
        onChange={(e) => update(id, e)}
        value={data.project[idx].title}
      />
    </div>
  )
}
