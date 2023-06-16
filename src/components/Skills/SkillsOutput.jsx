import styles from './SkillsOutput.module.css'

function SkillsOutput({ skills }) {
  return (
    <section className={styles.skillsSection}>
      <h3 className={styles.skillsTitle}>Skills</h3>
      <ul className={styles.skillList}>
        {skills === '' || skills.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </section>
  )
}

export default SkillsOutput
