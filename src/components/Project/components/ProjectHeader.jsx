import React from 'react'
import styles from '../ProjectInput.module.css'

export default function ProjectHeader({
  id,
  handleAdd,
  click,
  proejct,
  setProject,
}) {
  const handleDelete = (id) => {
    setProject(proejct.filter((el) => el.id !== parseInt(id)))
  }

  return (
    <div className={styles.projectHeader}>
      <button type="button" className={styles.menuBtn}></button>
      <p>{`새로운 프로젝트`}</p>
      <button
        id={id}
        type="button"
        className={styles.downBtn}
        onClick={(e) => click(e)}
      ></button>
      <button
        type="button"
        className={styles.moreBtn}
        onClick={handleAdd}
      ></button>
      <button
        id={id}
        type="button"
        className={styles.delBtn}
        onClick={(e) => handleDelete(e.target.id)}
      ></button>
    </div>
  )
}
