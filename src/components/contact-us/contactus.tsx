"use client"
import React, { useState } from 'react'
import styles from "@/components/contact-us/contactus.module.css"
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { caveatFont, interFont } from '@/font'
import { send_Email } from '@/utils/emailServices';

const ContactUs = () => {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')

  const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();

    const  templateParams={
      to_name:"khizra iqbal",
      from_name:name,
      from_email:email,
      message:message
    };

    try{
      await send_Email(templateParams);
        alert("Email send Successfully");
        setName('');
        setEmail('');
        setMessage('');
    }
    catch(error){
    console.log('Emailjs Error',error);
    alert("Failed to send email");
    }
  }
  return (
    <>
      <section className={`${styles.contactus} ${interFont.className}`} id='contact'>
        <h1 className={caveatFont.className}><span>C</span>ontact {" "}
        <span>M</span>e</h1> 
        <p>Got a project in mind or need expert advice? Contact me, and let&apos;s collaborate to bring your web development <br /> ideas to life with precision and creativity</p>
        <div className={styles.contactusbottomdiv}>
            <div className={styles.contactleftdiv}>
                <div className={styles.contactleftdivContainer}>
                    <IoIosMail size={24} color={"var(--logo-color)"}/>
                <div className={styles.contactleftdivtext}>
                 <h6>Have a question?</h6>
                 <h6>I am here to help you</h6>
                 <h6>Email me at iqbalkhizra026@gmail.com</h6>
                </div>
              </div>
              <div className={styles.contactleftdivContainer}>
                    <FaMapMarkerAlt size={24} color={"var(--logo-color)"}/>
                <div className={styles.contactleftdivtext}>
                 <h6>Current Location</h6>
                 <h6>Mansoura, Egypt</h6>
                 <h6>serving clients worldwide</h6>
                </div>
              </div>
            </div>

            <div className={styles.contactrightdiv}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.topinputdiv}>
                        <input type="text" placeholder='Your name' className={styles.inputdetials} name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
                        <input type="text" placeholder='Your email' className={styles.inputdetials} name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <input type="text" placeholder='Subject' className={styles.inputdetials} />
                    <textarea placeholder='Your massage'className={styles.inputdetials} style={{height:"224px"}}
                     name='message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>

                    <input type="submit" className={styles.inputbtn} value={"Send Message"} />
                </form>
            </div>
        </div>
        </section>
    </>
  )
}

export default ContactUs
