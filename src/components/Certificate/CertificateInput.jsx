import { useState, useEffect, useRef } from 'react'
import styles from './CertificateInput.module.css'

export default function CertificateInput({ resumeData, setResumeData }) {
  const [certificate, setCertificate] = useState(resumeData.certificate)

  useEffect(() => {
    setResumeData({ ...resumeData, certificate })
  }, [certificate])

  function handleAdd() {
    setCertificate([...certificate, { date: '', contents: '' }])
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
  const dropdownRef = useRef(null)

  return (
    <div className={styles.contentCont} ref={dropdownRef}>
      <input
        type="month"
        max="9999-12"
        value={cert.date}
        className={styles.dateInput}
        onChange={(e) => handleUpdate(idx, 'date', e.target.value)}
      />
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
