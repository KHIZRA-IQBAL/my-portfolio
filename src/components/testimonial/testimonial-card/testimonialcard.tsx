import React from 'react'
import Image from 'next/image'
import { interFont } from '@/font'
import styles from "@/components/testimonial/testimonial-card/testimonial.module.css"
import { testimonailcard } from '@/constant/testimonialcard'

const Testimonialcard = () => {
  return (
    <>
       {testimonailcard.map((card, index)=>{return(
        <div className={`${interFont.className}   ${styles.card}`} key={index}>
        <div className={styles.cardimg}>
            <Image src={card.src} alt={"picture"} width={150} height={150}></Image>
        </div>
        <p>{card.name}</p>
        <p><span>{card.title}</span></p>
        <p style={{marginBottom:"0px"}}>{card.desc}</p>
     </div>
       )})}
    </>
  )
}

export default Testimonialcard
