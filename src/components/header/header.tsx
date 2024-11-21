"use client"
import React, { useState } from 'react'
import styles from "@/components/header/header.module.css"
import { caveatFont, interFont } from '@/font'
import Link from 'next/link'
import { TiThMenu } from "react-icons/ti";
import { CgCloseR } from "react-icons/cg";
import { AnimatePresence, motion } from 'framer-motion'

const Header = () => {

  const [isopen, setIsopen] = React.useState(false)
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h1 className={caveatFont.className}>khizra iqbal</h1>
          <AnimatePresence>
          {isopen == true ? (
            <motion.ul className={`${interFont.className} ${styles.navUL} ${styles.active}`}
            key={"active"}
            initial={{opacity:0,width:0}}
            animate={{opacity:1,width:"40%"}}
            exit={{width:0,  opacity:0}}
            transition={{duration:0.2}}
            >
              <CgCloseR size={30} className={styles.close} onClick={()=>setIsopen(false)}/>
            <li> <Link href={"#"}>Home</Link></li>
            <li><Link href={"#about"}>about</Link></li>
            <li><Link href={"#portfolio"}>portfolio</Link></li>
            <li><Link href={"#service"}>services</Link></li>
            <li><Link href={"#testimonial"}>testimonial</Link></li>
            <li> <Link href={"#contact"}>contact</Link></li>
          </motion.ul>) : 
          (
          <ul className={`${interFont.className} ${styles.navUL}`}>
            <li> <Link href={"#"}>Home</Link></li>
            <li><Link href={"#about"}>about</Link></li>
            <li><Link href={"#portfolio"}>portfolio</Link></li>
            <li><Link href={"#service"}>services</Link></li>
            <li><Link href={"#testimonial"}>testimonial</Link></li>
            <li> <Link href={"#contact"}>contact</Link></li>
          </ul>)}
          </AnimatePresence>
          <TiThMenu size={30} className={styles.menu} onClick={() => { setIsopen(!isopen) }} />
        </nav>
      </header>
    </>
  )
}

export default Header
