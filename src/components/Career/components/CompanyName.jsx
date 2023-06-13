import React, { useEffect, useState } from 'react'
import styles from '../CareerInput.module.css'

export default function CompanyName({ id, career, setCareer, handleDelete }) {
  const [name, setName] = useState('')

  useEffect(() => {
    let findIndex = career.findIndex((item) => item.id === id)
    let copiedItems = [...career]
    copiedItems[findIndex].companyName = name

    setCareer(copiedItems)
  }, [name])

  return (
    <div className={styles.company}>
      <label htmlFor="" className="inputDescription">
        회사명
      </label>
      <input
        id={id}
        type="text"
        placeholder="예) 네이버 (NAVER) "
        onChange={(e) => setName(e.target.value)}
      />
      <button className={styles.btnDel}>
        <img
          src="/images/delete-icon.svg"
          alt="삭제"
          onClick={() => handleDelete(id)}
        />
      </button>
    </div>
  )
}
