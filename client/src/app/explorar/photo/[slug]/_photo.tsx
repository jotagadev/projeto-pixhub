

import styles from "./page.module.css";
import Link from "next/link";



export default function Photo({session, photo, author} : any) {

  return (
    <div className={styles.container}>
      <img className={styles.img} src={photo?.photoURL}></img>
      <div className={styles.info}>
        <div className={styles.titulodiv}>
        <h1 className={styles.titulo}>
            {photo?.title}
        </h1>
        <small className={styles.cat}>{photo?.category}</small>
        </div>
        <div className={styles.autor}>
          <img className={styles.autorimg} src="/images/defaultavatar.png"></img>
          <Link href={`/explorar/perfil/${photo?.userId}`}><p className={styles.autornome}>{author.name}</p></Link>
        </div>
        <p className={styles.desc}>{photo?.description}</p>
        <Link className={styles.explorarbtn} href="/explorar">Voltar a explorar</Link>
      </div>
    </div>
  );
}
