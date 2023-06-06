import styles from './IntroInput.module.css'

function IntroInput() {
  return (
    <section>
      <h2>Introduction</h2>
      <textarea
        className={styles.introInput}
        type="text"
        placeholder="예) 웹 풀스텍을 꿈꾸는 개발자 OOO입니다."
      />
      <span className={styles.introCounting}>0/1000</span>
    </section>
  )
}

export default IntroInput
