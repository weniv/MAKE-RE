import React, { useEffect, useState } from 'react'
import styles from './UrlInput.module.css'

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
      <h2>URL</h2>
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
      <label className={styles.lbTit} htmlFor={`content-${idx}`}>
        링크명
      </label>
      <input
        className={styles.inpItem}
        type="text"
        id={`content-${idx}`}
        name="contents"
        value={url.contents}
        placeholder="예) 포트폴리오"
        onChange={(e) => handleUpdate(idx, e)}
      />
      <label htmlFor={`link-${idx}`} className={styles.lbLink}>
        <img
          src={process.env.PUBLIC_URL + '/images/link-icon.svg'}
          alt="URL 주소"
        />
      </label>
      <input
        className={styles.inpLink}
        type="text"
        placeholder="예) www.paullab.co.kr"
        name="link"
        id={`link-${idx}`}
        value={url.link}
        onChange={(e) => handleUpdate(idx, e)}
      />
      <button className={styles.btnDel}>
        <img
          src="images/delete-icon.svg"
          alt="삭제"
          onClick={() => handleDelete(idx)}
        />
      </button>
    </div>
  )
}
