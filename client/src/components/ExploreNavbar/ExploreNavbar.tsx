"use client";

import Link from "next/link";
import Logo from "../Logo/Logo";
import styles from "./ExploreNavbar.module.css";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useRef, useState } from "react";
import RegisterDialog from "../RegisterDialog/RegisterDialog";
import { SlMagnifier } from "react-icons/sl";
import { useParams, usePathname } from "next/navigation";

//TODO - GERENCIAMENTO DE ESTADO DE LOGGED IN

export default function ExploreNavbar() {
  const [mobile, setMobile] = useState(false);
  const [loginOption, setLoginOption] = useState(false);
  const [search, setSearch] = useState(""); // ESTADO DA PESQUISA - TODO
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const pathname = usePathname();
  const explorarAtivo = pathname.endsWith("/explorar");
  const criarAtivo = pathname.endsWith("/criar");

  const onClick = () => {
    setMobile((prev) => !prev);
  };

  const toggleDialog = (option: boolean) => {
    if (!dialogRef.current) {
      return;
    }

    setLoginOption(option);

    setTimeout(() => {
      if (dialogRef.current instanceof HTMLDialogElement) {
        if (dialogRef.current.hasAttribute("open")) {
          dialogRef.current.close();
        } else {
          dialogRef.current.showModal();
        }
      }
    }, 0);
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <dialog className={styles.dialog} ref={dialogRef}>
        <RegisterDialog
          option={loginOption}
          closeDialog={closeDialog}
        ></RegisterDialog>
      </dialog>
      <header className={styles.container}>
        <div className={styles.logoelinks}>
          <Link href="/explorar">
            <Logo></Logo>
          </Link>
          <Link
            className={`${styles.navbtn} ${
              explorarAtivo && styles.navbtnselected
            }`}
            href="/explorar"
          >
            Página inicial
          </Link>
          <Link
            className={`${styles.navbtn} ${
              criarAtivo && styles.navbtnselected
            }`}
            href="/explorar/criar"
          >
            Criar
          </Link>
        </div>
        {!criarAtivo && <div className={styles.search}>
          <input
            placeholder="Pesquisar"
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchinput}
          ></input>
          <button className={styles.searchbtn}>
            <SlMagnifier />
          </button>
        </div>}

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
