import { useEffect, useRef, useState } from 'react'
import styles from './ProfileInput.module.css'

function ProfileInput() {
  // 이메일 설정 코드
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('직접 입력')
  const [emailHost, setEmailHost] = useState(null)
  const FrequencyEmails = ['naver.com', 'gmail.com', 'daum.net', '직접 입력']
  const dropBoxRef = useRef()

  // 외부 클릭했을 시
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropBoxRef.current && !dropBoxRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
  }, [dropBoxRef])

  // 이메일 선택했을 때 input 내용 변경
  function selectBoxHandler(item) {
    setEmail(item)
    setIsOpen(false)
  }

  // 직접입력일 때 value 변경
  function emailHostHandler(e) {
    setEmailHost(e.target.value)
  }

  // --------
  // 데이터 저장 코드 (useState 추후에 App.jsx에서 받아오기)
  const [data, setData] = useState({})

  // 프로필 이미지
  // 프로필 이름, 영문이름, 전화번호, 이메일
  // 깃허브, 기술블로그 링크, 경력사항
  // intro
  // skills

  return (
    <section>
      <div className={styles.flexBox}>
        <div>
          <label htmlFor="profile-upload" className={styles.profileWrap}>
            <div className={styles.profile}></div>
            <img
              className={styles.profileBtn}
              src="images/camera-icon.svg"
              alt="프로필 사진 업로드하기"
            />
          </label>
          <input
            className={styles.profileInput}
            type="file"
            accept=""
            id="profile-upload"
          />
        </div>
        <div>
          <div className={styles.profileBox}>
            <div className={`${styles.inputBox} ${styles.firstInput}`}>
              <label>이름</label>
              <input type="text" placeholder="예) 홍길동"></input>
            </div>
            <div className={`${styles.inputBox} ${styles.enInput}`}>
              <label>영문 이름</label>
              <input type="text" placeholder="예) Kildong Hong"></input>
            </div>
          </div>
          <div className={`${styles.inputBox} ${styles.firstInput}`}>
            <label>전화번호</label>
            <input type="tel" placeholder="예) 010-0000-0000"></input>
          </div>
          <div className={styles.emailWrap}>
            <div className={`${styles.inputBox} ${styles.firstInput}`}>
              <label>이메일</label>
              <input type="text" />
            </div>
            @
            {email !== '직접 입력' ? (
              <div className={`${styles.inputBox} ${styles.mailInput}`}>
                <input type="text" value={email} readOnly />
              </div>
            ) : (
              <div className={`${styles.inputBox} ${styles.mailInput}`}>
                <input
                  type="text"
                  value={emailHost}
                  onChange={emailHostHandler}
                />
              </div>
            )}
            <div ref={dropBoxRef}>
              <input
                type="button"
                className={styles.emailBtn}
                value={email}
                onClick={() => {
                  isOpen ? setIsOpen(false) : setIsOpen(true)
                }}
              />

              {isOpen && (
                <ul className={styles.emailList}>
                  {FrequencyEmails.map((item, idx) => (
                    <li key={idx} onClick={() => selectBoxHandler(item)}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.linkInput}>
        <label htmlFor="">GitHub 링크</label>
        <input type="url" />
      </div>
      <div className={styles.linkInput}>
        <label htmlFor="">기술 블로그 링크</label>
        <input type="url" />
      </div>
      <div className={styles.careerBox}>
        <span>경력사항</span>
        <div>
          <input id="r1" type="radio" name="radio" />
          <label htmlFor="r1">신입</label>
        </div>
        <div>
          <input id="r2" type="radio" name="radio" />
          <label htmlFor="r2">경력</label>
        </div>
      </div>
    </section>
  )
}

export default ProfileInput
