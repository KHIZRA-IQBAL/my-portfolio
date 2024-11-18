import React from 'react'
import styles from "@/components/services-of-us/services.module.css"
import { caveatFont} from '@/font'
import ServicesCard from './servicescard/services'

function  Services (){
  return (
    <>
      <section className={styles.services} id='service'>
       <h1 className={caveatFont.className}><span>W</span>hat{" "}
        <span> I</span>{" "}
         <span> D</span>o {" "}
          <span>F</span>or {"  "}
          <span>C</span>lients</h1>
          <p>I specialize in crafting dynamic, user-friendly websites and applications tailored to your needs. From clean designs to seamless functionality, <br /> I ensure every project delivers an exceptional user experience while meeting your business goals.</p>
          <div className={styles.servicescarddiv}>
            <ServicesCard/>
          </div>
      </section>
    </>
  )
}

export default Services
