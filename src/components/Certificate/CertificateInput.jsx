import { useState, useEffect, useRef } from 'react'
import styles from './CertificateInput.module.css'

export default function CertificateInput() {
  const [certificate, setCertificate] = useState([
    { id: 1, year: '', contents: '' },
  ])
  const nextId = useRef(2)

  function handleAdd() {
    setCertificate([
      ...certificate,
      { id: nextId.current, year: '', contents: '' },
    ])
    nextId.current += 1
  }

  function handleDelete(id) {
    setCertificate(certificate.filter((cert) => cert.id !== id))
  }

  function handleUpdate(id, name, value) {
    setCertificate(
      certificate.map((cert) =>
        cert.id === id ? { ...cert, [name]: value } : cert
      )
    )
  }

  return (
    <section>
      <h2>Certificate</h2>
      {certificate &&
        certificate.map((cert, i) => (
          <CertContent
            key={cert.id}
            cert={cert}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      <button className={`skillBtn ${styles.addBtn}`} onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </section>
  )
}

function CertContent({ cert, handleDelete, handleUpdate }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleItemClick = (year) => {
    handleUpdate(cert.id, 'year', year)
    setIsOpen(false)
  }

  function handleOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.contentCont} ref={dropdownRef}>
      <div className={styles.yearCont}>
        <button className={styles.yearBtn} onClick={handleOpen}>
          {cert.year || '연도'}
          {isOpen ? (
            <img src="/images/polygon-up-icon.svg" alt="연도 메뉴 닫기" />
          ) : (
            <img src="/images/polygon-down-icon.svg" alt="연도 메뉴 열기" />
          )}
        </button>
        {isOpen && (
          <ol className={styles.yearList}>
            {getYearList().map((v, i) => {
              return (
                <li key={i} onClick={() => handleItemClick(v)}>
                  <button>{v}</button>
                </li>
              )
            })}
          </ol>
        )}
      </div>
      <input
        className={styles.contentInput}
        type="text"
        placeholder="예) 정보처리기사"
        onChange={(e) => handleUpdate(cert.id, 'contents', e.target.value)}
      />
      <button className={styles.deleteBtn}>
        <img
          src="/images/delete-icon.svg"
          alt="삭제"
          onClick={() => handleDelete(cert.id)}
        />
      </button>
    </div>
  )
}

function getYearList() {
  const yearList = []
  const currentYear = new Date().getFullYear()

  for (let i = 0; i < 20; i++) {
    yearList.push(currentYear - i)
  }

  return yearList
}
