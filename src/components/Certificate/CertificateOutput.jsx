import styles from './CertificateOuput.module.css'

export default function CertificateOutput({ certificate }) {
  const certificates = certificate?.sort((a, b) => b.year - a.year)

  return (
    <section className={styles.certCont}>
      <h2 className={styles.certTitle}>Certificate</h2>
      <ul className={styles.certList}>
        {certificates &&
          certificates.map((certificate) => {
            return (
              <li className={styles.certItem} key={certificate.id}>
                <span className={styles.year}>{certificate.year}</span>
                <p className={styles.item}>{certificate.contents}</p>
              </li>
            )
          })}
      </ul>
    </section>
  )
}
