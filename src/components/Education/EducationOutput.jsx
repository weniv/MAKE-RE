import styles from './EducationOutput.module.css'

export default function EducationOutput() {
  return (
    <section className={styles.eduCont}>
      <h2 className={styles.eduTitle}>Education</h2>
      <ul className={styles.eduList}>
        <li className={styles.eduItem}>
          <span className={styles.year}>2022</span>
          <p className={styles.item}>프론트엔드 스쿨 3기 수료 (4개월)</p>
        </li>
        <li className={styles.eduItem}>
          <span className={styles.year}>2020</span>
          <p className={styles.item}>한국대학교 졸업</p>
        </li>
      </ul>
    </section>
  )
}
