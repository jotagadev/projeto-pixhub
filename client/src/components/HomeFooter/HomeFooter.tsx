import Image from "next/image";
import styles from "./homefooter.module.css";
import FooterLogo from "../Logo/FooterLogo";

export default function HomeFooter () {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
               <FooterLogo></FooterLogo>
               <p className={styles.madeby}>Projeto direcionado ao processo seletivo da TecnoJr. Feito por André Dutra e João Henrique,
               Sendo André responsável pelo back-end e João Henrique responsável pelo front-end.</p>
            </div>
            
          
                <Image className={styles.logotecno} alt="logo da tecnojr" src="/logo/tecnologo.webp" width={546} height={113}></Image>
            
        </div>
    );
}