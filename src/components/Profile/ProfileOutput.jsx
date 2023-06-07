import styles from './ProfileOutput.module.css'

function ProfileOutput() {
  return (
    <section className={styles.profileSection}>
      <div className={styles.profileImg}>
        <img src="https://paullab.co.kr/images/weniv-gary.png" alt="" />
      </div>
      <div>
        <span className={styles.profileTitle}>
          <strong>홍길동</strong>Kildong Hong
        </span>
        <ul className={styles.dataList}>
          <li>
            <strong>전화번호</strong>
            010-1234-2022
          </li>
          <li>
            <strong>이메일</strong>
            lovecoding22@gmail.com
          </li>
          <li>
            <strong>깃허브</strong>
            https://github.com/
          </li>
          <li>
            <strong>기술 블로그</strong>
            https://velog.io/
          </li>
          <li>
            <strong>경력 사항</strong>
            신입
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ProfileOutput
