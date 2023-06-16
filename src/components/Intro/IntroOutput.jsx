import styles from './IntroOutput.module.css'

function IntroOutput({ intro }) {
  return (
    <section className={styles.introSection}>
      <h2>Introduction</h2>
      {intro && <div className={styles.intro}>{intro}</div>}
    </section>
  )
}

export default IntroOutput
