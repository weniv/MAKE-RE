import React from 'react'
import styles from '../layout/footer.module.css'

export default function WriteFooter() {
  return (
    <footer className={styles.writeFooter}>
      <ul className={styles.footerCont}>
        <li>
          <p>위니브</p>
          <a
            href="https://paullab.co.kr/about.html"
            target="_blank"
            rel="noreferrer"
          >
            회사 소개
          </a>
          <a
            href="https://paullab.co.kr/index.html"
            target="_blank"
            rel="noreferrer"
          >
            제주코딩베이스캠프
          </a>
        </li>
        <li>
          <p>메이커리</p>
          <a
            href="https://paullabworkspace.notion.site/b3258bc3a2a94151b9bf4d6e6f7b5071"
            target="_blank"
            rel="noreferrer"
          >
            메이커리 서비스 소개
          </a>
        </li>
        <li>
          <p>자료</p>
          <a
            href="https://ridibooks.com/books/2773000064?_s=search&_q=%EA%B0%9C%EB%B0%9C%EC%9E%90+%EC%9D%B4%EB%A0%A5%EC%84%9C&_rdt_sid=search&_rdt_idx=0"
            target="_blank"
            rel="noreferrer"
          >
            신입 개발자 이력서 작성 가이드
          </a>
          <a
            href="https://paullabworkspace.notion.site/Figma-bfa32213fc244db9b31bb8486a479ee6?pvs=4"
            target="_blank"
            rel="noreferrer"
          >
            Figma 이력서 바로가기
          </a>
          <a href="files/제코베_포트폴리오_템플릿_배포용.pptx" download>
            PPT 포트폴리오 다운로드
          </a>
        </li>
      </ul>
      <address className={styles.writeCopy}>© Weniv Corp.</address>
    </footer>
  )
}
