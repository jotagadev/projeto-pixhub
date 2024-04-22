"use client";

import Link from "next/link";
import Logo from "../Logo/Logo";
import styles from "./HomeNavbar.module.css";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useRef, useState } from "react";
import RegisterDialog from "../RegisterDialog/RegisterDialog";

export default function HomeNavbar() {
  const [mobile, setMobile] = useState(false);
  const [loginOption, setLoginOption] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const onClick = () => {
    setMobile((prev) => !prev);
  };

  const toggleDialog = (option: boolean) => {
    if (!dialogRef.current) {
      return;
    }

    setLoginOption(option);

    setTimeout(() => {
      dialogRef?.current.hasAttribute("open")
        ? dialogRef?.current.close()
        : dialogRef?.current.showModal();
    }, 0);
  };

  return (
    <>
      <dialog className={styles.dialog} key={loginOption} ref={dialogRef}>
        <RegisterDialog option={loginOption}></RegisterDialog>
      </dialog>
      <header className={styles.container}>
        <Logo></Logo>
        <Link className={styles.explorarbtn} href="/">
          Explorar
        </Link>

        <div className={styles.containerauth}>
          <button
            className={styles.loginbtn}
            onClick={() => toggleDialog(true)}
          >
            Login
          </button>
          <button
            className={styles.registerbtn}
            onClick={() => toggleDialog(false)} 
          >
            Registrar-se
          </button>
        </div>
        <label className={styles.menu} onClick={onClick}>
          {mobile ? <FaX></FaX> : <FaBars></FaBars>}
        </label>
        <div
          className={
            mobile ? `${styles.mobilenav} ${styles.show}` : styles.mobilenav
          }
        >
          <Link className={styles.registerbtn} href="/">
            Explorar
          </Link>
          <div className={styles.mobileauth}>
            <button
              className={styles.loginbtn}
              onClick={() => toggleDialog(true)} 
            >
              Login
            </button>
            <button
              className={styles.registerbtn}
              onClick={() => toggleDialog(false)} 
            >
              Registrar-se
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
