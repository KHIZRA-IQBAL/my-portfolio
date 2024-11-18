import React from 'react'
import styles from "@/components/footer/footer.module.css"
import { caveatFont } from '@/font'

const Footer = () => {
  return (
    <>
      <footer  className={styles.footer}>
             <h1 className={caveatFont.className}>© 2024 Khizra Iqbal. All rights reserved.</h1>
      </footer>
    </>
  )
}

export default Footer
