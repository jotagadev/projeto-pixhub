import styles from "./page.module.css"
import { FaGear } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";

export default function Perfil () {
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src="/images/messi.jpeg"></img>
            <div className={styles.nomeeconfig}>
            <h1 className={styles.nome}>Lionel Messi</h1>
            <div className={styles.icons}>
            <IoMdPhotos className={styles.configicon} />
            <FaGear className={styles.configicon}/>
            </div>
            </div>
        </div>
    );
}