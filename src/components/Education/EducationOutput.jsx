import styles from './EducationOutput.module.css'

export default function EducationOutput({ education }) {
  const educationList = education?.filter(
    (edu) => edu.date || edu.contents.trim()
  )
  education.sort(
    (a, b) =>
      parseInt(b.date.replace('-', '')) - parseInt(a.date.replace('-', ''))
  )

  const hasEducation = !!educationList.length

  return (
    <>
      {hasEducation && (
        <section className={styles.eduCont}>
          <h2 className={styles.eduTitle}>Education</h2>
          <ul className={styles.eduList}>
            {educationList &&
              educationList.map((edu, i) => {
                return (
                  <li className={styles.eduItem} key={i}>
                    <span className={styles.date}>{formateDate(edu.date)}</span>
                    <p className={styles.item}>{edu.contents}</p>
                  </li>
                )
              })}
          </ul>
        </section>
      )}
    </>
  )
}

function formateDate(date) {
  return date.replace('-', '. ') + '.'
}
