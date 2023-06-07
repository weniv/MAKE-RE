import styles from './IntroInput.module.css'
import { useState } from 'react'

function IntroInput() {
  const [textCount, setTextCount] = useState(0)

  const textChangeHandler = (e) => {
    setTextCount(e.target.value.length)
  }

  return (
    <section>
      <h2>Introduction</h2>
      <textarea
        className={styles.introInput}
        type="text"
        placeholder="예) 웹 풀스텍을 꿈꾸는 개발자 OOO입니다."
        onChange={textChangeHandler}
      />
      <span className={styles.introCounting}>{textCount}/1000</span>
    </section>
  )
}

export default IntroInput
