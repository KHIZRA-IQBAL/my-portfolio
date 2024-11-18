import React from 'react'
import styles from "@/components/button/button.module.css"

const   Button = (props:{text:string}) => {
    const {text}=props
  return (
    <>
      <button className={styles.btn}>{text}</button>
    </>
  )
}

export default  Button
