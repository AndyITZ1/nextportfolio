'use client';
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss"
import { useState } from "react";

const Navbar = () => {
    const [menuState, setMenuState] = useState(false);
    const openMenu = () => {
        setMenuState(!menuState);
    }
    let menuActive = menuState ? styles.menuactive : '';
    return (
        <div className={styles.navbar}>
            <Link href="/">Luan Tran</Link>
            <Image
                id={styles.menubtn}
                onClick={openMenu}
                src={menuState ? "exitmenu.svg" : "menu.svg"}
                alt="Menu Button"
                width={40}
                height={40}
            />
            <div className={`${styles.menu} ${menuActive}`}>
                <a href="#home" onClick={openMenu}>Home</a>
                <a href="#about-me" onClick={openMenu}>About</a>
                <a href="#projects" onClick={openMenu}>Projects</a>
                <a href="#contact" onClick={openMenu}>Contact Me</a>
                <a target="_blank" href="/LTranResumeGen.pdf" onClick={openMenu} rel="noopener noreferrer">Resume</a>
            </div> 
            <div className={styles.navlinks}>
                <a href="#home">Home</a>
                <a href="#about-me">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact Me</a>
                <a target="_blank" href="/LTranResumeGen.pdf" rel="noopener noreferrer">Resume</a>
            </div>
        </div>
    )
}

export default Navbar;