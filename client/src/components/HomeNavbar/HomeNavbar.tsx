"use client"

import Link from "next/link";
import Logo from "../Logo/Logo";
import styles from "./HomeNavbar.module.css";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useState } from "react";

export default function HomeNavbar() {

    const [mobile, setMobile] = useState(false);

    const onClick = () => {
        setMobile((prev) => (!prev))
    }

  return (
    <header className={styles.container}>
      <Logo></Logo>
      <Link className={styles.explorarbtn} href="/">
        Explorar
      </Link>

      <div className={styles.containerauth}>
        <Link className={styles.loginbtn} href="/">
          Login
        </Link>
        <Link className={styles.registerbtn} href="/">
          Registrar-se
        </Link>
      </div>
      <label className={styles.menu} onClick={onClick}>{mobile? <FaX></FaX> : <FaBars></FaBars>}</label>
      <div className={mobile ? `${styles.mobilenav} ${styles.show}` : styles.mobilenav}>
        <Link className={styles.registerbtn} href="/">
          Explorar
        </Link>
        <div className={styles.mobileauth}>
          <Link className={styles.loginbtn} href="/">
            Login
          </Link>
          <Link className={styles.registerbtn} href="/">
            Registrar-se
          </Link>
        </div>
      </div>
    </header>
  );
}
