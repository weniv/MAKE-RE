import styles from './IntroInput.module.css'
import { useState, useEffect } from 'react'

function IntroInput({ resumeData, setResumeData }) {
  const [textCount, setTextCount] = useState(0)
  const [intro, setIntro] = useState(resumeData.intro)

  useEffect(() => {
    setResumeData({ ...resumeData, intro: intro })
  }, [intro])

  useEffect(() => {
    setTextCount(resumeData.intro.length)
  }, [])

  const textChangeHandler = (e) => {
    setIntro(e.target.value)
    setTextCount(e.target.value.length)
  }

  return (
    <section>
      <h2>Introduction</h2>
      <label htmlFor="intro"></label>
      <textarea
        className={styles.introInput}
        type="text"
        id="intro"
        placeholder="예) 웹 풀스텍을 꿈꾸는 개발자 OOO입니다."
        value={intro}
        onChange={textChangeHandler}
      />
      <span className={styles.introCounting}>{textCount}/1000</span>
    </section>
  )
}

export default IntroInput
