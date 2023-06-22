import styles from './ProfileOutput.module.css'

function ProfileOutput({ profile }) {
  return (
    <section className={styles.profileSection}>
      {profile.profileImg ? (
        <>
          <div className={styles.profileImg}>
            <img src={profile.profileImg} alt="" />
          </div>
          <div>
            {profile.enName ? (
              <span className={styles.profileTitle}>
                <strong>{profile.name}</strong>
                {profile.enName}
              </span>
            ) : (
              <span className={styles.profileTitle}>
                <strong>{profile.name}</strong>
                {profile.enName}
              </span>
            )}

            <ul className={styles.dataList}>
              {profile.phoneNumber && (
                <li>
                  <strong>전화번호</strong>
                  {profile.phoneNumber}
                </li>
              )}

              {profile.fullEmail && (
                <li>
                  <strong>이메일</strong>
                  {profile.fullEmail}
                </li>
              )}
              {profile.github && (
                <li>
                  <strong>깃허브</strong>
                  {profile.github}
                </li>
              )}
              {profile.blog && (
                <li>
                  <strong>기술 블로그</strong>
                  {profile.blog}
                </li>
              )}
              {profile.newcomer && (
                <li>
                  <strong>경력 사항</strong>
                  {profile.newcomer === 'true' ? '신입' : '경력'}
                </li>
              )}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div>
            {profile.enName ? (
              <span
                className={`${styles.profileTitle} ${styles.notProfileImg}`}
              >
                <strong>{profile.name}</strong>
                {profile.enName}
              </span>
            ) : (
              <span className={styles.profileTitle}>
                <strong>{profile.name}</strong>
                {profile.enName}
              </span>
            )}

            <ul className={styles.dataList}>
              {profile.phoneNumber && (
                <li>
                  <strong>전화번호</strong>
                  {profile.phoneNumber}
                </li>
              )}

              {profile.fullEmail && (
                <li>
                  <strong>이메일</strong>
                  {profile.fullEmail}
                </li>
              )}
              {profile.github && (
                <li>
                  <strong>깃허브</strong>
                  {profile.github}
                </li>
              )}
              {profile.blog && (
                <li>
                  <strong>기술 블로그</strong>
                  {profile.blog}
                </li>
              )}
              {profile.newcomer && (
                <li>
                  <strong>경력 사항</strong>
                  {profile.newcomer === 'true' ? '신입' : '경력'}
                </li>
              )}
            </ul>
          </div>
        </>
      )}
    </section>
  )
}

export default ProfileOutput
