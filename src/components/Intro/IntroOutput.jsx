import styles from './IntroOutput.module.css'

function IntroOutput({ intro }) {
  return (
    <section className={styles.introSection}>
      <h2>Introduction</h2>
      {intro && <pre className={styles.intro}>{intro}</pre>}
    </section>
  )
}

export default IntroOutput
