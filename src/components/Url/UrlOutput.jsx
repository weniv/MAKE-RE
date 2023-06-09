import React from 'react'
import styles from './url.module.css'

export default function Url({ url }) {
  const urlOutput = url && url.filter((u) => u.contents && u.link)
  return (
    <>
      {urlOutput && (
        <section className={styles.exp}>
          <h2 className={styles.titOutput}>URL</h2>
          <ul className={styles.listUrl}>
            {urlOutput.map((url) => (
              <li>
                <p className={styles.urlTitle}>{url.contents}</p>
                <div className={styles.urlLink}>
                  <img src="/images/link-icon-blue.svg" alt="" />
                  <a href={url.link}>{url.link}/</a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}
