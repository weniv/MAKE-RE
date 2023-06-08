import React from 'react'
import styles from './url.module.css'

export default function Url() {
  return (
    <section className={styles.exp}>
      <h2 className={styles.titOutput}>Url</h2>
      <ul className={styles.listUrl}>
        <li>
          <p className={styles.urlTitle}>제주도 데이터 사이언스 캐글 밋업</p>
          <div className={styles.urlLink}>
            <img src="/images/link-icon-blue.svg" alt="" />
            <a href="https://github.com">https://github.com/</a>
          </div>
        </li>
        <li>
          <p className={styles.urlTitle}>제주도 데이터 사이언스 캐글 밋업</p>
          <div className={styles.urlLink}>
            <img src="/images/link-icon-blue.svg" alt="" />
            <a href="https://github.com">https://github.com/</a>
          </div>
        </li>
      </ul>
    </section>
  )
}
