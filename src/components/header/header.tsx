"use client"
import styles from "@/components/header/header.module.css"
import { caveatFont, interFont } from '@/font'
import Link from 'next/link'
import { TiThMenu } from "react-icons/ti";
import { CgCloseR } from "react-icons/cg";
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from "react";

const Header = () => {

  const [isopen, setIsopen] = useState(false)
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h1 className={caveatFont.className}>Khizra Iqbal</h1>
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
            <li><Link href={"#about"}>About</Link></li>
            <li><Link href={"#portfolio"}>Portfolio</Link></li>
            <li><Link href={"#service"}>Services</Link></li>
            <li><Link href={"#testimonial"}>Testimonial</Link></li>
            <li> <Link href={"#contact"}>Contact</Link></li>
          </motion.ul>) : 
          (
          <ul className={`${interFont.className} ${styles.navUL}`}>
            <li> <Link href={"#"}>Home</Link></li>
            <li><Link href={"#about"}>About</Link></li>
            <li><Link href={"#portfolio"}>Portfolio</Link></li>
            <li><Link href={"#service"}>Services</Link></li>
            <li><Link href={"#testimonial"}>Testimonial</Link></li>
            <li> <Link href={"#contact"}>Contact</Link></li>
          </ul>)}
          </AnimatePresence>
          <TiThMenu size={30} className={styles.menu} onClick={() => { setIsopen(!isopen) }} />
        </nav>
      </header>
    </>
  )
}

export default Header
