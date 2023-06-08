import React, { useEffect, useRef, useState } from 'react'
import styles from './url.module.css'

export default function Url() {
  const [url, setUrl] = useState([{ id: 1, title: '', url: '' }])
  const nextId = useRef(2)

  function handleAdd() {
    setUrl([...url, { id: nextId.current, title: '', url: '' }])
    nextId.current += 1
  }

  function handleDelete(id) {
    setUrl(url.filter((url) => url.id !== id))
  }

  function handleUpdate(id, name, value) {
    // const { name, value } = event.target
    setUrl(url.map((url) => (url.id === id ? { ...url, [name]: value } : url)))
  }

  return (
    <section className={styles.url}>
      <h2>url</h2>
      {url &&
        url.map((url, i) => (
          <UrlContent
            key={url.id}
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

function UrlContent({ url, handleDelete, handleUpdate }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleItemClick = (item) => {
    handleUpdate(url.id, 'year', item)
    setIsOpen(false)
  }

  function handleOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.contContents}>
      <label className={styles.lbTit} htmlFor="title">
        링크명
      </label>
      <input
        className={styles.inpItem}
        type="text"
        id="title"
        placeholder="예) 포트폴리오"
        onChange={(e) => handleUpdate(url.id, 'contents', e.target.value)}
      />
      <label htmlFor="link" className={styles.lbLink}>
        <img src="/images/link-icon.svg" alt="URL 주소" />
      </label>
      <input
        className={styles.inpItem}
        type="text"
        placeholder="Url 주소를 입력하세요"
        onChange={(e) => handleUpdate(url.id, 'contents', e.target.value)}
      />
      <button className={styles.btnDel}>
        <img
          src="/images/delete-icon.svg"
          alt="삭제"
          onClick={() => handleDelete(url.id)}
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
