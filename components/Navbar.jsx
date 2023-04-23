import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/Layout.module.css"
import logo from "../public/favicon.ico"
import LiveSearch from './LiveSearch'

const Navbar = () => {
  return (
    <div className={styles.navBarConteiner}>
      <Link href={"/"}><Image width={30} src={logo} alt='logo'></Image></Link>
        <LiveSearch/>
      <Link href={"/"}><Image width={30} src={logo} alt='logo'></Image></Link>
    </div>
  )
}

export default Navbar