import styles from './CertificateInput.module.css'

export default function CertificateInput() {
  return (
    <section>
      <h2>Certificate</h2>
      <CertContent />
      <button className={`skillBtn ${styles.addBtn}`}>+) 추가 입력하기</button>
    </section>
  )
}

function CertContent() {
  return (
    <div className={styles.contentCont}>
      <div className={styles.yearCont}>
        <button className={styles.yearBtn}>
          연도
          <img src="/images/polygon-down-icon.svg" alt="연도 항목 펼치기" />
        </button>
      </div>
      <input
        className={styles.contentInput}
        type="text"
        placeholder="예) 정보처리기사"
      />
      <button className={styles.deleteBtn}>
        <img src="/images/delete-icon.svg" alt="삭제" />
      </button>
    </div>
  )
}
