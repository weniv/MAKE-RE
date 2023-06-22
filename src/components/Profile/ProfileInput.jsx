import { useEffect, useRef, useState } from 'react'
import styles from './ProfileInput.module.css'
import axios from 'axios'

function ProfileInput({ setResumeData, resumeData }) {
  // ----------------------------------
  // 프로필 데이터 업데이트
  const [profileData, setProfileData] = useState({
    profileImg: resumeData.profileImg,
    name: resumeData.name,
    enName: resumeData.enName,
    phoneNumber: resumeData.phoneNumber,
    fullEmail: resumeData.fullEmail,
    github: resumeData.github,
    blog: resumeData.blog,
    newcomer: resumeData.newcomer,
  })

  // 프로필 정보 변경될 때마다 resumeData 업데이트
  useEffect(() => {
    setResumeData({ ...resumeData, ...profileData })
  }, [profileData])

  // ----------------------------------
  // 프로필 이미지 설정
  const handleImageChange = async (e) => {
    const formData = new FormData()
    const imageFile = e.target.files[0]
    formData.append('image', imageFile)

    try {
      const response = await axios.post(
        'https://api.mandarin.weniv.co.kr/image/uploadfile',
        formData
      )
      await console.log(response)

      const imageUrl =
        'https://api.mandarin.weniv.co.kr/' + response.data.filename

      setProfileData({ ...resumeData, profileImg: imageUrl })
    } catch (error) {
      console.error(error)
    }
  }

  // ----------------------------------
  // 이메일 설정 코드
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('직접 입력')
  const [emailHost, setEmailHost] = useState(null)
  const FrequencyEmails = ['naver.com', 'gmail.com', 'daum.net', '직접 입력']
  const dropBoxRef = useRef()

  // 외부 클릭했을 시
  useEffect(() => {
    const clickOutsideHandler = (e) => {
      if (dropBoxRef.current && !dropBoxRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', clickOutsideHandler)
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

  return (
    <section>
      <div className={styles.flexBox}>
        <div>
          <label htmlFor="profile-upload" className={styles.profileWrap}>
            {profileData.profileImg ? (
              <div className={styles.profile}>
                <img
                  className={styles.profileImg}
                  src={profileData.profileImg}
                  alt=""
                />
              </div>
            ) : (
              <div className={styles.profile}></div>
            )}
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
            onChange={handleImageChange}
          />
        </div>
        <div>
          <div className={styles.profileBox}>
            <div className={`${styles.inputBox} ${styles.firstInput}`}>
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                value={profileData.name}
                onChange={(e) => {
                  setProfileData({ ...profileData, name: e.target.value })
                }}
                placeholder="예) 홍길동"
              ></input>
            </div>
            <div className={`${styles.inputBox} ${styles.enInput}`}>
              <label htmlFor="enName">영문 이름</label>
              <input
                type="text"
                id="enName"
                placeholder="예) Kildong Hong"
                value={profileData.enName}
                onChange={(e) => {
                  setProfileData({ ...profileData, enName: e.target.value })
                }}
              ></input>
            </div>
          </div>
          <div className={`${styles.inputBox} ${styles.firstInput}`}>
            <label htmlFor="phoneNumber">전화번호</label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="예) 010-0000-0000"
              value={profileData.phoneNumber}
              onChange={(e) => {
                setProfileData({ ...profileData, phoneNumber: e.target.value })
              }}
            ></input>
          </div>
          <div className={styles.emailWrap}>
            <div className={`${styles.inputBox} ${styles.firstInput}`}>
              <label htmlFor="id">이메일</label>
              <input
                type="text"
                id="id"
                value={profileData.fullEmail.split('@')[0]}
                onChange={(e) => {}}
              />
            </div>
            @
            {email !== '직접 입력' ? (
              <div className={`${styles.inputBox} ${styles.mailInput}`}>
                <label htmlFor="domain" className="ir"></label>
                <input
                  type="text"
                  id="domain"
                  readOnly
                  value={profileData.fullEmail.split('@')[1]}
                  onChange={(e) => {}}
                />
              </div>
            ) : (
              <div className={`${styles.inputBox} ${styles.mailInput}`}>
                <label htmlFor="domain" className="ir"></label>
                <input
                  type="text"
                  id="domain"
                  value={profileData.fullEmail.split('@')[1]}
                  onChange={emailHostHandler}
                />
              </div>
            )}
            <div ref={dropBoxRef}>
              {isOpen ? (
                <>
                  <label htmlFor="selectDomain" className="ir">
                    이메일 주소 선택
                  </label>
                  <input
                    type="button"
                    id="selectDomain"
                    className={`${styles.emailBtn} ${styles.open}`}
                    value={email}
                    onClick={() => {
                      isOpen ? setIsOpen(false) : setIsOpen(true)
                    }}
                  />

                  <ul className={styles.emailList}>
                    {FrequencyEmails.map((item, idx) => (
                      <li key={idx} onClick={() => selectBoxHandler(item)}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <label htmlFor="selectDomain" className="ir">
                    이메일 주소 선택
                  </label>
                  <input
                    type="button"
                    id="selectDomain"
                    className={`${styles.emailBtn} ${styles.close}`}
                    value={email}
                    onClick={() => {
                      isOpen ? setIsOpen(false) : setIsOpen(true)
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.linkInput}>
        <label htmlFor="gitHub">GitHub 링크</label>
        <input
          type="url"
          id="github"
          value={profileData.github}
          onChange={(e) => {
            setProfileData({ ...profileData, github: e.target.value })
          }}
        />
      </div>
      <div className={styles.linkInput}>
        <label htmlFor="blog">기술 블로그 링크</label>
        <input
          type="url"
          id="blog"
          value={profileData.blog}
          onChange={(e) => {
            setProfileData({ ...profileData, blog: e.target.value })
          }}
        />
      </div>
      <div className={styles.careerBox}>
        <span>경력사항</span>
        {profileData.newcomer === 'true' ? (
          <>
            <div>
              <input
                id="r1"
                type="radio"
                name="radio"
                checked
                onClick={() => {
                  setProfileData({ ...profileData, newcomer: 'true' })
                }}
              />
              <label htmlFor="r1">신입</label>
            </div>
            <div>
              <input
                id="r2"
                type="radio"
                name="radio"
                onClick={() => {
                  setProfileData({ ...profileData, newcomer: 'false' })
                }}
              />
              <label htmlFor="r2">경력</label>
            </div>
          </>
        ) : (
          <>
            <div>
              <input
                id="r1"
                type="radio"
                name="radio"
                onClick={() => {
                  setProfileData({ ...profileData, newcomer: 'true' })
                }}
              />
              <label htmlFor="r1">신입</label>
            </div>
            <div>
              <input
                id="r2"
                type="radio"
                name="radio"
                checked
                onClick={() => {
                  setProfileData({ ...profileData, newcomer: 'false' })
                }}
              />
              <label htmlFor="r2">경력</label>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default ProfileInput
