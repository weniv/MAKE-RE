import styles from './CertificateOuput.module.css'

export default function CertificateOutput({ certificate }) {
  const certificates = certificate?.sort(
    (a, b) =>
      parseInt(b.date.replace('-', '')) - parseInt(a.date.replace('-', ''))
  )

  return (
    <section className={styles.certCont}>
      <h2 className={styles.certTitle}>Certificate</h2>
      <ul className={styles.certList}>
        {certificates &&
          certificates.map((certificate, i) => {
            return (
              <li className={styles.certItem} key={i}>
                <span className={styles.date}>
                  {formateDate(certificate.date)}
                </span>
                <p className={styles.item}>{certificate.contents}</p>
              </li>
            )
          })}
      </ul>
    </section>
  )
}

function formateDate(date) {
  return date.replace('-', '. ') + '.'
}
