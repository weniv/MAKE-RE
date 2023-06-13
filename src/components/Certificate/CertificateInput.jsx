import { useState, useEffect, useRef } from 'react'
import styles from './CertificateInput.module.css'

export default function CertificateInput({ resumeData, setResumeData }) {
  const [certificate, setCertificate] = useState(resumeData.certificate)

  useEffect(() => {
    setResumeData({ ...resumeData, certificate })
  }, [certificate])

  function handleAdd() {
    setCertificate([...certificate, { year: '', contents: '' }])
  }

  function handleDelete(idx) {
    setCertificate(certificate.filter((cert, i) => i !== idx))
  }

  function handleUpdate(idx, name, value) {
    setCertificate(
      certificate.map((cert, i) =>
        i === idx ? { ...cert, [name]: value } : cert
      )
    )
  }

  return (
    <section>
      <h2 className={styles.title}>Certificate</h2>
      {certificate &&
        certificate.map((cert, idx) => (
          <CertContent
            key={idx}
            idx={idx}
            cert={cert}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      <button className={`addBtn ${styles.addBtn}`} onClick={handleAdd}>
        +) 추가 입력하기
      </button>
    </section>
  )
}

function CertContent({ cert, idx, handleDelete, handleUpdate }) {
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

  const handleItemClick = (idx, item) => {
    handleUpdate(idx, 'year', item)
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
                <li key={i} onClick={() => handleItemClick(idx, v)}>
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
        required
        value={cert.contents}
        onChange={(e) => handleUpdate(idx, 'contents', e.target.value)}
      />
      <button className={styles.deleteBtn}>
        <img
          src="/images/delete-icon.svg"
          alt="삭제"
          onClick={() => handleDelete(idx)}
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
