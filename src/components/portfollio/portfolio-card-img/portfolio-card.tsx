"use client"
import React from 'react'
import Image from 'next/image'
import styles from "@/components/portfollio/portfolio-card-img/portfolio-card.module.css"
import {portfoliocards} from "@/constant/portfoliocard"
import Link from 'next/link'
import { motion } from 'framer-motion'

const Portfoliocard = () => {
  return (
    <>
    {portfoliocards.map((item,index)=>{
        return(  
      <motion.div className={styles.card} key={index}
      initial={{opacity:0,scale:0}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:1}}
      >
              <Link href={item.href}>  <div className={styles.cardimage}>
                  {item.type=="image"?(
                        <Image src={item.src} alt="profilepic"  height={407} width={407} className={styles.img}/> 
                  ):(
                    <video src={item.src}  controls loop muted></video>
                  )}
                    </div></Link>
                    <div  className={styles.cardbottom}>{item.title}</div>
                </motion.div>);
              })}
    </> 
  )
}

export default Portfoliocard
