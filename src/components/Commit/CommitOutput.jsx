import React from 'react'
import styles from './CommitOutput.module.css'

export default function CommitOutput({ github }) {
  return (
    <div className={styles.contCommit}>
      <img src={`https://ghchart.rshah.org/219138/${github}`} alt="" />
    </div>
  )
}
