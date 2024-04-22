import styles from "./footerlogo.module.css";
import { League_Spartan } from "next/font/google";

const league = League_Spartan({ subsets: ['latin'] })

export default function FooterLogo() {
  return (
    <div className={league.className}>
    <div className={styles.container}>
      <h1 className={styles.titulo1}>Pix</h1>
      <h1 className={styles.titulo2}>hub</h1>
    </div>
    </div>
  );
}
