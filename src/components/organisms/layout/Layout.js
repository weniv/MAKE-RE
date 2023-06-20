import React, { useState } from 'react'
import Header from './Header'

function Layout({ children }) {
  const dummyData = {
    name: '전유진',
    enName: 'YouJin Jeon',
    intro: 'test',
    skills: ['React', 'JavaScript'],
    career: [{ id: 1, start: '', end: '', companyName: '', works: '' }],
    project: [
      {
        id: 1,
        title: '111111',
        outline: '',
        people: '',
        startPeriod: '',
        endPeriod: '',
        progress: false,
        contributes: [''],
        skills: [''],
        github: '',
        demo: '',
      },
    ],
    experience: [
      { date: '2023-12', contents: '테스트1 입니다' },
      { date: '2023-06', contents: '테스트2 입니다' },
    ],
    certificate: [{ date: '2023-03', contents: '컴퓨터 활용능력 1급' }],
    education: [{ date: '2023-04', contents: '정보처리기사' }],
    url: [
      { contents: '제주도 캐글 밋업', link: 'www.github.com' },
      { contents: '네이버로 이동', link: 'www.naver.com' },
    ],
  }

  const [resumeData, setResumeData] = useState(initValue())

  function initValue() {
    if (localStorage.getItem('data')) {
      return JSON.parse(localStorage.getItem('data'))
    } else {
      // 추후 초기 데이터 수정 필요
      return dummyData
    }
  }
  // setResumeData={setResumeData} resumeData={resumeData}
  return (
    <>
      <Header resumeData={resumeData} />
      {children}
      {/* {simple ? (
        <>
          <SimpleHeader />
          {children}
          <SimpleFooter />
        </>
      ) : (
        <>
          <Mobile>
            <MobileHeader />
          </Mobile>
          <TabletPC>
            <Header />
          </TabletPC>
          {children}
          <Footer />
        </>
      )} */}
    </>
  )
}

export default Layout
