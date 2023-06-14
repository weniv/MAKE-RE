import styles from './CertificateOuput.module.css'

export default function CertificateOutput({ certificate }) {
  const certificates = certificate?.filter(
    (cert) => cert.date || cert.contents.trim()
  )
  certificates.sort(
    (a, b) =>
      parseInt(b.date.replace('-', '')) - parseInt(a.date.replace('-', ''))
  )

  const hasCertificates = !!certificates.length

  return (
    <>
      {hasCertificates && (
        <section className={styles.certCont}>
          <h2 className={styles.certTitle}>Certificate</h2>
          <ul className={styles.certList}>
            {certificates.map((certificate, i) => {
              return (
                <li className={styles.certItem} key={i}>
                  <span className={styles.date}>
                    {formateDate(certificate.date)}
                  </span>
                  <p className={styles.contents}>{certificate.contents}</p>
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </>
  )
}

function formateDate(date) {
  if (date) {
    return date.replace('-', '. ') + '.'
  }
}
