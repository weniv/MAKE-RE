import styles from './EducationOutput.module.css'

export default function EducationOutput({ education }) {
  const educationList = education?.sort((a, b) => b.year - a.year)

  return (
    <section className={styles.eduCont}>
      <h2 className={styles.eduTitle}>Education</h2>
      <ul className={styles.eduList}>
        {educationList &&
          educationList.map((edu) => {
            return (
              <li className={styles.eduItem} key={edu.id}>
                <span className={styles.year}>{edu.year}</span>
                <p className={styles.item}>{edu.contents}</p>
              </li>
            )
          })}
      </ul>
    </section>
  )
}
