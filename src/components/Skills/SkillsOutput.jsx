import styles from './SkillsOutput.module.css'

function SkillsOutput() {
  const skillList = [
    'Python',
    'JAVA',
    'JavaScript',
    'NodeJS',
    'Python',
    'JAVA',
    'JavaScript',
    'NodeJS',
  ]
  return (
    <section className={styles.skillsSection}>
      <h3 className={styles.skillsTitle}>Skills</h3>
      <ul className={styles.skillList}>
        {skillList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default SkillsOutput
