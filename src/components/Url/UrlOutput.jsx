import React from 'react'
import styles from './url.module.css'

export default function Url({ url }) {
  const urlOutput = url.filter((u) => u.contents.trim() || u.link.trim())
  return (
    <>
      {!!urlOutput.length && (
        <section className={styles.exp}>
          <h2 className={styles.titOutput}>URL</h2>
          <ul className={styles.listUrl}>
            {urlOutput.map((url) => (
              <li>
                <p className={styles.urlTitle}>{url.contents.trim()}</p>
                <div className={styles.urlLink}>
                  <img src="/images/link-icon-blue.svg" alt="" />
                  <a
                    href={urlValidation(url.link.trim())}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {url.link.trim()}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

function urlValidation(url) {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  } else {
    return 'http://' + url
  }
}
