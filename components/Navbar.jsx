import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/Layout.module.css"
import logo from "../public/favicon.ico"
import LiveSearch from './LiveSearch'

const Navbar = () => {

  const toggleTheme = () =>{
    var currentTheme = document.documentElement.getAttribute("data-theme")
    if(currentTheme === null || currentTheme === "null"){
      document.documentElement.setAttribute("data-theme", "dark")
    }else{
      document.documentElement.setAttribute("data-theme", "null")
    }
  }

  return (
    <div className={styles.navBarConteiner}>
      <Link href={"/"}><Image width={30} src={logo} alt='logo'></Image></Link>
        <LiveSearch/>
      <button onClick={()=>{toggleTheme()}} className={styles.themeToggle}></button>
    </div>
  )
}

export default Navbar