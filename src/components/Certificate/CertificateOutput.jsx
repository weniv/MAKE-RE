import styles from './CertificateOuput.module.css'

export default function CertificateOutput() {
  return (
    <section className={styles.certCont}>
      <h2 className={styles.certTitle}>Certificate</h2>
      <ul className={styles.certList}>
        <li className={styles.certItem}>
          <span className={styles.year}>2019</span>
          <p className={styles.item}>정보처리기사</p>
        </li>
        <li className={styles.certItem}>
          <span className={styles.year}>2016</span>
          <p className={styles.item}>빅데이터 분석기사</p>
        </li>
        <li className={styles.certItem}>
          <span className={styles.year}>2012</span>
          <p className={styles.item}>자동차 운전면허 2종 보통</p>
        </li>
      </ul>
    </section>
  )
}
