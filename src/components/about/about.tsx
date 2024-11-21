"use client";
import React from 'react'
import styles from "@/components/about/about.module.css"
import { caveatFont, interFont } from '@/font'
import Image from 'next/image'
import Button from '../button/button'
import  {motion} from  "framer-motion"

const About = () => {
  return (
    <>
      <section className={styles.about} id='about'>
        <motion.div className={styles.leftdiv}
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:2,type:"spring"}}
        >
            <h1 className={caveatFont.className}>Khizra iqbal</h1>
            <p className={caveatFont.className}>Freelance Web Developer</p>
            <h2 className={`${styles.detialstext} ${interFont.className}`}>

Hi, I&apos;m Khizra, a passionate web developer with a knack for creating dynamic and user-friendly web applications. My expertise lies in **HTML**, **CSS**, and **TypeScript**, where I focus on crafting clean, responsive designs and interactive functionality. I enjoy turning ideas into reality, whether it&apos;s building a **Dynamic Resume Builder**, or a **core website** with seamless user experiences. I also work with **Next.js** and **Tailwind CSS**, constantly learning and improving my skills to develop production-ready applications. With an eye for detail and a love for simplicity, I aim to create projects that not only work efficiently but also look aesthetically pleasing. Let&apos;s build something amazing together!</h2>

            <Button text={"Contact Me"}/>
        </motion.div>
        <motion.div className={styles.aboutrightdiv}
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:2,type:"spring"}}
        >
          <Image src={"/profile.png"} alt='profile picture' width={400} height={400} className={styles.img}></Image>
        </motion.div>
      </section>
  </>
  )
}

export default About
