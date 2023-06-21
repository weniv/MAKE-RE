import styles from './SkillsOutput.module.css'

function SkillsOutput({ skills }) {
  return (
    <section className={styles.skillsSection}>
      <h3 className={styles.skillsTitle}>Skills</h3>
      <ul className={styles.skillList}>
        {skills.map((item, idx) => item === '' || <li key={idx}>{item}</li>)}
      </ul>
    </section>
  )
}

export default SkillsOutput
