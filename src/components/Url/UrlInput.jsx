import React, { useEffect, useRef, useState } from 'react'
import styles from './url.module.css'

export default function Url({ setResumeData, resumeData }) {
  const [url, setUrl] = useState(resumeData.url)

  useEffect(() => {
    setResumeData({ ...resumeData, url: url })
  }, [url])

  function handleAdd() {
    setUrl([...url, { contents: '', link: '' }])
  }

  function handleDelete(idx) {
    setUrl(url.filter((url, i) => i !== idx))
  }

  function handleUpdate(idx, event) {
    const { name, value } = event.target
    setUrl(url.map((url, i) => (i === idx ? { ...url, [name]: value } : url)))
  }

  return (
    <section className={styles.url}>
      <h2>url</h2>
      {url &&
        url.map((url, idx) => (
          <UrlContent
            key={idx}
            idx={idx}
            url={url}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      <button className={`addBtn ${styles.btnAdd}`} onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </section>
  )
}

function UrlContent({ url, idx, handleDelete, handleUpdate }) {
  return (
    <div className={styles.contContents}>
      <label className={styles.lbTit} htmlFor="contents">
        링크명
      </label>
      <input
        className={styles.inpItem}
        type="text"
        id="contents"
        name="contents"
        value={url.contents}
        placeholder="예) 포트폴리오"
        onChange={(e) => handleUpdate(idx, e)}
      />
      <label htmlFor="link" className={styles.lbLink}>
        <img src="/images/link-icon.svg" alt="URL 주소" />
      </label>
      <input
        className={styles.inpItem}
        type="text"
        placeholder="Url 주소를 입력하세요"
        name="link"
        id="link"
        value={url.link}
        onChange={(e) => handleUpdate(idx, e)}
      />
      <button className={styles.btnDel}>
        <img
          src="/images/delete-icon.svg"
          alt="삭제"
          onClick={() => handleDelete(idx)}
        />
      </button>
    </div>
  )
}

function YearList() {
  const year = []
  const birthYear = 2000
  for (let i = 2023; i >= birthYear; i--) {
    year.push(i)
  }
  return year
}
