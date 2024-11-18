"use client"
import React, { useRef } from 'react'
import styles from "@/components/services-of-us/servicescard/servicescard.module.css"
import { interFont } from '@/font'
import Image from 'next/image'
import { motion , useMotionValue,useTransform} from 'framer-motion'
import { servicescard } from '@/constant/servicescard'

const ServicesCard = () => {
  return (
    <>
      {servicescard.map((item,index)=>{
        return(
         <Card item={item} key={index}/>
      );
      })}
    </>
  );
}

function Card({item}:{item:{src:string,title:string,discription:string}}){
  const cardRef=useRef<HTMLDivElement|null>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX=useTransform(mouseY,[-100,100],[10,-10])
  const rotateY=useTransform(mouseX,[-100,100],[-10,10])

  const handleMouseMove=(e:React.MouseEvent)=>{
    if(!cardRef.current) return;
     const rect=cardRef.current.getBoundingClientRect()
     const x=e.clientX-rect.left-rect.width/2
     const y=e.clientY-rect.top-rect.height/2

     mouseX.set(x)
     mouseY.set(y)
  }

  const handleMouseleave=()=>{
    mouseX.set(0)
     mouseY.set(0)
  }
   return(
      <motion.div className={`${styles.card} ${interFont.className}`}
      ref={cardRef}
      style={{perspective: 1000,rotateX:rotateX,rotateY:rotateY}}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseleave}
       >
      <div className={styles.cardimg}>
        <Image 
        src={item.src} 
        alt={"picture"} 
        width={60} 
        height={60}>

        </Image>
      </div>

      <h1>{item.title}</h1>

      <p>{item.discription}</p>
    </motion.div>
    )
}

export default ServicesCard
