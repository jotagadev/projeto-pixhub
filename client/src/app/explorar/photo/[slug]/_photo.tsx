"use client";

import { deletePhoto } from "@/actions";
import styles from "./page.module.css";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";
import { redirect } from "next/navigation";


export default function Photo({ session, photo, author } : any ) {

  const removePhoto = async () => {
    await deletePhoto(photo.id);
    redirect("/explorar");
  }

  return (
    <div className={styles.container}>
      <img className={styles.img} src={photo?.photoURL}></img>
      <div className={styles.info}>
        <div className={styles.titulodiv}>
          <div className={styles.tituloeremove}>
            <h1 className={styles.titulo}>{photo?.title}</h1>
            {photo.userId == session.userId && <button onClick={removePhoto} className={styles.removebtn}><FaTrashAlt /></button>}
          </div>
          <small className={styles.cat}>{photo?.category}</small>
        </div>
        <div className={styles.autor}>
          <img
            className={styles.autorimg}
            src="/images/defaultavatar.png"
          ></img>
          <Link href={`/explorar/perfil/${photo?.userId}`}>
            <p className={styles.autornome}>{author.name}</p>
          </Link>
        </div>
        <p className={styles.desc}>{photo?.description}</p>
        <Link className={styles.explorarbtn} href="/explorar">
          Voltar a explorar
        </Link>
      </div>
    </div>
  );
}
