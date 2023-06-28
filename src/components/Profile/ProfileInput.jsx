import { useEffect, useRef, useState } from 'react'
import styles from './ProfileInput.module.css'
import axios from 'axios'

function ProfileInput({ setResumeData, resumeData }) {
  const defaultImg = 'https://api.mandarin.weniv.co.kr/1687337079735.png'
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
  // 드롭박스 외부 클릭했을 시
  const [isOpen, setIsOpen] = useState(false)
  const dropBoxRef = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropBoxRef.current && !dropBoxRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
  }, [dropBoxRef])

  // 이메일 설정
  const FrequencyEmails = ['naver.com', 'gmail.com', 'daum.net', '직접 입력']
  const [id, setId] = useState(profileData.fullEmail.split('@')[0])
  const [domain, setDomain] = useState(profileData.fullEmail.split('@')[1])

  useEffect(() => {
    const fullEmail = [id, domain].join('@')
    setResumeData({ ...resumeData, fullEmail: fullEmail })
  }, [id, domain])

  const [email, setEmail] = useState('직접 입력')

  // 이메일 선택했을 때 input 내용 변경
  function handleSelectBox(item) {
    if (item !== '직접 입력') {
      setDomain(item)
      setEmail(item)
    } else {
      setEmail('직접 입력')
      setDomain('')
    }
    setIsOpen(false)
  }

  return (
    <section>
      <div className={styles.flexBox}>
        <div className={styles.profileImgBox}>
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
              src={process.env.PUBLIC_URL + '/images/camera-icon.svg'}
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
          {profileData.profileImg !== defaultImg ? (
            <button
              className={styles.profileDelete}
              onClick={(e) => {
                setProfileData({ ...profileData, profileImg: defaultImg })
              }}
            >
              <img
                src={process.env.PUBLIC_URL + '/images/icon-X.svg'}
                alt="프로필 삭제"
              />
            </button>
          ) : (
            <></>
          )}
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
                value={id}
                onChange={(e) => {
                  setId(e.target.value)
                }}
              />
            </div>
            @
            {email !== '직접 입력' ? (
              <div className={`${styles.inputBox} ${styles.mailInput}`}>
                <label htmlFor="domain" className="ir"></label>
                <input
                  type="text"
                  id="domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                />
              </div>
            ) : (
              // 직접입력일 경우
              <div className={`${styles.inputBox} ${styles.mailInput}`}>
                <label htmlFor="domain" className="ir"></label>
                <input
                  type="text"
                  id="domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                />
              </div>
            )}
            <div ref={dropBoxRef} className={styles.dropEmail}>
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
                      <li key={idx} onClick={() => handleSelectBox(item)}>
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
                    className={`${styles.emailBtn} ${styles.close} ${styles.noneOutline}`}
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
        <label htmlFor="gitHub">GitHub 이름</label>
        <input
          type="text"
          id="gitHub"
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
        {profileData.newcomer ? (
          <>
            <div>
              <input
                id="r1"
                type="radio"
                name="radio"
                checked
                onClick={() => {
                  setProfileData({ ...profileData, newcomer: true })
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
                  setProfileData({ ...profileData, newcomer: false })
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
                  setProfileData({ ...profileData, newcomer: true })
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
                  setProfileData({ ...profileData, newcomer: false })
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
