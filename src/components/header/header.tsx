import React from 'react'
import styles from "@/components/header/header.module.css"
import { caveatFont, interFont } from '@/font'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <header className={styles.header}>
        <nav className={styles.nav}>
         <h1 className={caveatFont.className}>khizra iqbal</h1>
         <ul className={interFont.className}>
           <li> <Link href={"#"}>Home</Link></li>
            <li><Link href={"#about"}>about</Link></li>
            <li><Link href={"#portfolio"}>portfolio</Link></li>
            <li><Link href={"#service"}>services</Link></li>
            <li><Link href={"#testimonial"}>testimonial</Link></li>
           <li> <Link href={"#contact"}>contact</Link></li>
         </ul>
        </nav>
    </header>
    </>
  )
}

export default Header
