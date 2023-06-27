import CommitOutput from '../Commit/CommitOutput'
import styles from './ProfileOutput.module.css'

function ProfileOutput({ profile }) {
  const defaultImg = 'https://api.mandarin.weniv.co.kr/1687337079735.png'

  return (
    <section className={styles.profileSection}>
      {profile.profileImg && profile.profileImg !== defaultImg ? (
        <>
          <div className={styles.profileImg}>
            <img src={profile.profileImg} alt="" />
          </div>
          <div>
            <span className={styles.profileTitle}>
              <strong>{profile.name}</strong>
              {profile.enName}
            </span>

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
                  <a
                    href={urlValidation(`www.github.com/${profile.github}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.github.com/{profile.github}
                  </a>
                </li>
              )}
              {profile.blog && (
                <li>
                  <strong>기술 블로그</strong>
                  <a
                    href={urlValidation(profile.blog)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.blog}
                  </a>
                </li>
              )}
              {
                <li>
                  <strong>경력 사항</strong>
                  {profile.newcomer ? '신입' : '경력'}
                </li>
              }
              {profile.github && (
                <li>
                  <CommitOutput github={profile.github} />
                </li>
              )}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div>
            <span className={`${styles.profileTitle} ${styles.notProfileImg}`}>
              <strong>{profile.name}</strong>
              {profile.enName}
            </span>

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
                  <a
                    href={urlValidation(`www.github.com/${profile.github}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.github}
                  </a>
                </li>
              )}
              {profile.blog && (
                <li>
                  <strong>기술 블로그</strong>
                  <a
                    href={urlValidation(profile.blog)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile.blog}
                  </a>
                </li>
              )}
              {
                <li>
                  <strong>경력 사항</strong>
                  {profile.newcomer ? '신입' : '경력'}
                </li>
              }
              {profile.github && (
                <li>
                  <CommitOutput github={profile.github} />
                </li>
              )}
            </ul>
          </div>
        </>
      )}
    </section>
  )
}

function urlValidation(url) {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  } else {
    return 'http://' + url
  }
}

export default ProfileOutput
