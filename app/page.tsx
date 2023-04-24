import Image from 'next/image'
import { Inter, Noto_Sans_KR } from 'next/font/google'
import styles from './page.module.css'
import navstyle from './Navbar.module.scss'
import Navbar from './Navbar'
import Link from 'next/link'
import { JetBrains_Mono } from 'next/font/google';
import Contact from '../components/Contact/Contact';
import Project from '@/components/Project/Project';
import { useState } from 'react'

const jetbrains_mono = JetBrains_Mono({
  weight: ["400"],
  subsets: ["latin"]
})

const noto_sans_kr = Noto_Sans_KR({
  weight: ["400"],
  subsets: ["latin"]
})

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Navbar/>
        <section id="home" className={styles.greeting}>
          <span id={styles.hi}></span>👋 <br/><span id={styles.name}></span><br/>
          <span id={styles.greet}></span>
          <Image 
          className={styles.arrow}
          src="darrow.svg" 
          width={100}
          height={100}
          alt="Animated Down Arrow"
          />
        </section>
        <section id="about-me" className={styles.about}>
          <div className={styles.aboutcontainers}>
            <h2>About Me</h2>
            <p>I'm a currently a Full Stack Software Developer at Revature. My interests are working on replicating UI designs into my personal proejcts, creating web applications with React/Next.js, and writing scripts to automate tasks.</p>
          </div>
          <div className={styles.aboutcontainers}>
            <h2>Technical Skills</h2>
            <ul className={styles.skills}>
              <li>Java</li>
              <li>Spring</li>
              <li>PostgreSQL</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Sass</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Python</li>
              <li>Git</li>
            </ul>
          </div>
        </section>
        <section id="projects" className={styles.projects}>
          <h2>Projects</h2>
          <div className={styles.projectlist}>
            <Project git="" url="" name="Fluttr" image="/fluttr.png" imagew={100} imageh={100} desc="Fluttr, a social media platform for users to share their fleeting and fluttering experiences. Like-minded individuals can share their thoughts, likes posts they enjoy, and follow others to keep in contact."/>
            <Project git="https://github.com/reidschroder/spree" url="https://github.com/reidschroder/spree" name="Spoint" image="spoint.png" imagew={100} imageh={100} desc="Spoint is an e-commerce platform for shopping clothes."/>
            <Project git="https://github.com/AndyITZ1/navkord" url="" name="NavKORd" image="navlogo.svg" imagew={100} imageh={100} desc="NavKORd is an open source Discord bot that provides the convenience of a Korean to English and vice versa dictionary!"/>
            <Project git="https://github.com/AndyITZ1/Geimu" url="" name="Geimu" image="geimu.png" imagew={100} imageh={100} desc="Geimu is an e-commerce platform for shopping video games and plushies. Sign up for an account, add to your cart, and start gaming!"/>
           
          </div>
        </section>
        <section id="contact" className={styles.contact}>
          <h2>Reach Out!</h2>
          <Contact/>
          {/* <form className={`${styles.cform}`} method="post">
            <label htmlFor="cname">Name</label>
            <input className={`${noto_sans_kr.className}`} type="text" id="cname" name="cname" />
            <label htmlFor="cemail">Email</label>
            <input className={`${noto_sans_kr.className}`} type="email" id="cemail" name="cemail" />
            <label htmlFor="cmessage">Message</label>
            <textarea className={`${noto_sans_kr.className}`} id="cmessage"></textarea>
        </form> */}
          <div className={styles.contactpoints}>
            <div className={styles.contactbox}>
              <a target="_blank" href="mailto:ltran20sk@gmail.com">
                <Image
                src="gmail.svg"
                alt="Gmail Icon"
                width={50}
                height={50}
                />
              </a>
            </div>
            <div className={styles.contactbox}>
              <a target="_blank" href="https://github.com/AndyITZ1">
                <Image
                src="github.svg"
                alt="Github Icon"
                width={50}
                height={50}
                />
              </a>
            </div>
            <div className={styles.contactbox}>
              <a target= "_blank" href="https://www.linkedin.com/in/luantran3/">
                <Image
                src="linkedin.svg"
                alt="LinkedIn Icon"
                width={50}
                height={50}
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
