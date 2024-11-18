import styles from "@/components/portfollio/portfolio.module.css"
import { caveatFont, interFont } from "@/font"
import Portfoliocard from "./portfolio-card-img/portfolio-card"
import React from 'react'

const Portfolio = () => {
  return (
    <>
      <section className={styles.portfolio} id="portfolio">
        <h1 className={caveatFont.className}><span>M</span>y {" "}
        <span>L</span>ast {" "}
        <span>W</span>ork</h1>{" "}

        <p className={interFont.className}>

Here are some of the projects I&apos;ve worked on, showcasing my skills and passion for web development.Each project reflects my dedication to<br /> creating functional, dynamic, and visually appealing applications. Explore my work below! </p>

        <div className={styles.mywork}>
         <Portfoliocard/>
             </div>
      </section>
    </>
  )
}

export default Portfolio
