"use client"
import styles from "@/components/about/about-bottom-image/about-image.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import React from 'react'


const containerVariants = {
  hidden:{},
  show: {
    transition: {
     staggerChildren: 0.2
    }
  }
}

//children
const itemVariants = {
  hidden:{opacity: 0, y: 20},
  show:{opacity: 1, y: 0}
}


const AboutBottomImage = () => {
  return (
   <motion.section className={styles.aboutbttomimage}
   variants={containerVariants}
   initial="hidden"
   whileInView="show">
  <motion.div variants={itemVariants}><Image src={"/html.png"} alt="html pic" width={96} height={96}></Image></motion.div>
    <motion.div variants={itemVariants}><Image src={"/css.png"} alt="html pic" width={96} height={96}></Image></motion.div>
    <motion.div variants={itemVariants}> <Image src={"/typescript.png"} alt="html pic" width={70} height={70}></Image></motion.div>
    <motion.div variants={itemVariants}><Image src={"/git.png"} alt="html pic" width={96} height={96}></Image></motion.div>
    <motion.div variants={itemVariants}><Image src={"/figma.png"} alt="html pic" width={96} height={96}></Image></motion.div>
    <motion.div variants={itemVariants}><Image src={"/react.png"} alt="html pic" width={96} height={96}></Image></motion.div>
   <motion.div variants={itemVariants}> <Image src={"/node.png"} alt="html pic" width={96} height={96}></Image></motion.div>
    <motion.div variants={itemVariants}><Image src={"/next.png"} alt="html pic" width={96} height={96}></Image></motion.div>
   </motion.section>
  )
}

export default AboutBottomImage;
