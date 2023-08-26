import React from 'react'
import styles from './FileList.module.css'

export default function FileList(props) {
console.log(props)
  return (
    <div className={styles.fileList}>{props.name}</div>
  )
}
