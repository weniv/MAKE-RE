import { useNavigate } from 'react-router'
import styles from './header.module.css'

export default function WriteHeader({ resumeData, formName }) {
  const navigate = useNavigate()

  function handleDataUpdate() {
    localStorage.setItem('data', JSON.stringify(resumeData))
  }

  return (
    <header className={styles.headerWrap}>
      <h1
        className={`${styles.logoWrap} ${styles.title}`}
        onClick={() => navigate('/')}
      >
        <img
          src={process.env.PUBLIC_URL + '/images/makere-logo.svg'}
          alt="메이커리 로고 이미지"
        />
      </h1>
      <nav className={styles.headerNav}>
        <ul>
          <li>
            <button
              form={`form-${formName}`}
              className={`${styles.header} ${styles.saveBtn}`}
              onClick={handleDataUpdate}
            >
              임시저장
            </button>
          </li>
          <li>
            <button
              className={styles.prevBtn}
              onClick={(e) => {
                handleDataUpdate()
                navigate('/preview')
              }}
              form={`form-${formName}`}
            >
              미리보기
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
